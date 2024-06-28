import Bill from "../components/Bill"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Home from "./Home"
import cartAtom from '../store/cart';
import { useRecoilValue, useSetRecoilState } from "recoil"

function PrevOrders() {
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])
    const cartList = useSetRecoilState(cartAtom);

    const handleDone = () => {
        cartList([]);
        navigate("/")
    }

    useEffect(() => {
        const showOrders = async () => {
            const token = "Bearer " + localStorage.getItem("token");
            const email = localStorage.getItem("email");
            const response = await axios.get("http://localhost:3000/api/v1/order/prevOrders",
                {
                    headers: {
                        authorization: token,
                        email: email,
                        'Content-Type': 'application/json',
                    },
                }
            )
            const orders = response.data.orders;
            setOrders(orders.reverse())
        }
        showOrders();
    }, [])


    return (
        <>
            <h1 className="text-4xl py-8 font-serif bg-gray-400 text-black text-center font-extralight">Your Orders</h1>
            <div className="bg-gray-400 text-white text-center" ><button className="text-2xl mb-4 font-serif  font-extralight bg-purple-500 p-2 rounded-lg hover:bg-purple-700" onClick={handleDone}><Link>Done </Link></button></div>
            <div className="App flex justify-center items-start min-h-screen bg-gray-400 gap-5 flex-wrap w-full ">
                {orders.map((item) => <Bill key={item.name} name={item.name} price={item.price} date={item.date} time={item.time} />)}
            </div>


        </>
    )
}


export default PrevOrders