import React from 'react';
import axios from "axios"
import { useState, useEffect } from "react"
import cartAtom from '../store/cart';
import { useRecoilValue } from "recoil"
import { useNavigate } from "react-router-dom"
const BarComponent = () => {
    const navigate = useNavigate()
    const [confirm, setConfirm] = useState(false);
    const cartList = useRecoilValue(cartAtom);
    const [able, setAble] = useState(false)
    const seen = {};
    const uniqueList = cartList.filter(item => {
        if (seen[item.name]) {
            return false;
        } else {
            seen[item.name] = true;
            return true;
        }
    });
    useEffect(() => {
        // onst uniqueList = Array.from(new Set(cartList.map(item => item.name)));
        setAble(uniqueList.length === 0);
    }, [cartList]);

    const handleOrder = async () => {

        document.documentElement.scrollTop = 0;
        setConfirm(true);
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        console.log(formattedDate)

        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        console.log(typeof (uniqueList[0].price))

        for (let i = 0; i < uniqueList.length; i++) {
            try {
                const token = "Bearer " + localStorage.getItem("token");
                const email = localStorage.getItem("email");
                console.log(token)
                console.log(email)
                const response = await axios.post(
                    'http://localhost:3000/api/v1/order/createOrder',
                    {
                        date: formattedDate,
                        time: formattedTime,
                        name: uniqueList[i].name,
                        price: uniqueList[i].price.toString(),
                    },
                    {
                        headers: {
                            authorization: token,
                            email: email,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        cartList.length = 0;
    };

    return (
        <>
            {confirm && <div role="alert" className="alert alert-success bg-purple-800 text-white text-lg absolute top-24" >
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Your purchase has been confirmed!</span>
                <span><button className="rounded-md bg-white hover:scale-105 w-16 h-12 text-black" onClick={() => {
                    setConfirm(false);

                    navigate("/prev");
                }}>Done</button></span>
            </div>}
            <div className="fixed bottom-0 w-4/5 left-1/2 transform -translate-x-1/2 bg-purple-500 p-4 rounded-t-lg h-15vh flex items-center justify-between text-center">
                <p className="text-white text-xl">Your order is ready to be placed.</p>
                <button
                    className="bg-white text-purple-600 px-4 py-2 rounded-md hover:bg-purple-200 transition duration-300"
                    onClick={handleOrder}
                    disabled={able}
                >
                    Place Order
                </button>
            </div>
        </>
    );
};

export default BarComponent;
