import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"
function LogIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/api/v1/user/login", {
            email,
            password,
        })
        console.log("After req")
        const token = response.data.token;
        localStorage.setItem("token", token)
        localStorage.setItem("email", email);
        setEmail("")
        setPassword("")
        navigate("/menu")
    }
    return (
        <>
            <div className="hero min-h-screen bg-[#453F78] shadow-2xl shadow-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left max-w-screen-md text-white">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#AD88C6] shadow-black ">
                        <form className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email"
                                    value={email} placeholder="email" className="input input-bordered" required onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    value={password} className="input input-bordered" required onChange={(e) => setPassword(e.target.value)} />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-purple-800 text-lg" onClick={() => navigate("/signup")}>Register?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-purple-700 text-white" onClick={handleSubmit}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}


export default LogIn