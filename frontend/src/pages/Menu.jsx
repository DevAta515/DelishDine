import Navbar from "../components/Navbar"
import Card from "../components/Card"
import SearchBar from "../components/SearchBar"
import OrderBar from "../components/OrderBar"
import { useState, useEffect } from "react"
// const axios = require("axios")
import axios from "axios"
function Menu() {
    const [menu, setMenu] = useState([])
    const [search, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3080/food");
                setMenu(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    // console.log(menu);
    return (
        <>
            <Navbar></Navbar>
            <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
            <div className="flex gap-6 px-3 flex-wrap justify-center items-center pb-12">
                {menu.filter((item) => { return search.toLowerCase() == "" ? item : item.name.toLowerCase().includes(search.toLowerCase()) }).map((dish) => <Card key={dish.id} name={dish.name} desc={dish.description} price={dish.price} image={dish.imageUrl}></Card>)
                }
                {/* {menu.map((dish) => (<Card key={dish.id} name={dish.name} desc={dish.description} price={dish.price} image={dish.imageUrl}></Card>))} */}
            </div>
            {/* <OrderBar></OrderBar> */}
        </>
    )
}


export default Menu