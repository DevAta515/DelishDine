import { Link, useNavigate } from "react-router-dom"
import Menu from "../pages/Menu"
import Home from "../pages/Home"
import { useState, useEffect } from "react"
function Hero() {
    const navigate = useNavigate()
    const handleLogOut = () => {
        if (localStorage.getItem("token")) {
            navigate("/menu")
        }
    }
    return (
        <>
            <div className="bg-[#453F78] hero min-h-screen shadow-2xl shadow-white">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary" onClick={handleLogOut} ><Link > Time to order</Link></button>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Hero