import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import Home from "../pages/Home"

function Navbar() {
    const navigate = useNavigate();
    const [log, setLog] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"))

    const handleLogOut = (go) => () => { // Changed here
        if (localStorage.getItem("token")) {
            navigate(`/${go}`)
        }
    }

    const handleLog = () => {
        localStorage.clear();
        setToken("")
        navigate("/");
    }

    return (
        <div className="navbar bg-[#453F78] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handleLogOut("menu")}><Link>Menu</Link></li>
                        <li onClick={handleLogOut("cart")}><Link>Cart</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li onClick={handleLogOut("menu")}><Link>Menu</Link></li>
                    <li onClick={handleLogOut("cart")}><Link>Cart</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {!token ? <a className="btn" onClick={() => navigate("/login")}>Log In</a> :
                    <a className="btn" onClick={handleLog}>Log Out</a>
                }
            </div>
        </div>
    );
}

export default Navbar;
