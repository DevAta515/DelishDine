import Navbar from "../components/Navbar"
import Card from "../components/Card"
import SearchBar from "../components/SearchBar"
import OrderBar from "../components/OrderBar"
import { useState, useEffect } from "react"
import axios from "axios"
import { useRecoilValue } from "recoil"
import cartAtom from "../store/cart"
import CardForCart from "../components/CardForCart"
function Cart() {
    const [menu, setMenu] = useState([]);
    const [search, setSearchTerm] = useState("");
    const cartList = useRecoilValue(cartAtom)
    console.log(cartList)




    const filteredList = cartList.filter((item) => { return search.toLowerCase() == "" ? item : item.name.toLowerCase().includes(search.toLowerCase()) });
    const seen = {};
    const uniqueList = filteredList.filter(item => {
        if (seen[item.name]) {
            return false;
        } else {
            seen[item.name] = true;
            return true;
        }
    });
    console.log("Unique List", uniqueList)
    return (
        <>
            <Navbar></Navbar>
            <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
            {cartList.length >= 1 ? <div className="flex gap-6 px-3 flex-wrap justify-center items-center pb-36">
                {uniqueList.map((dish) => <CardForCart key={dish.id} name={dish.name} desc={dish.description} price={dish.price} image={dish.imageUrl}></CardForCart>)
                }
                {/* {cartList.filter((item) => { return search.toLowerCase() == "" ? item : item.name.toLowerCase().includes(search.toLowerCase()) }).map((dish) => <CardForCart key={dish.id} name={dish.name} desc={dish.description} price={dish.price} image={dish.imageUrl}></CardForCart>)
                } */}
            </div> : <div>No items in cart</div>}
            <OrderBar></OrderBar>
        </>
    )
}


export default Cart