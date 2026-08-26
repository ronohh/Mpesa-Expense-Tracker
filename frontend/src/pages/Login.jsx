import React, { useState } from "react";
import axios from "axios";

const Login = () => {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/api/auth/login",{username, password});
            if (response.data.success){
                await Login(response.data.user, response.data.token);
                navigate('/dashboard')
            }else{
                alert(response.data.error)
            }
        }catch(error) {
            console.error("wrong logins", error)
        }
    }

    return(
        <div className="flex flex-col items-center justify-center ">
            <div className="border shadow-lg p-6 w-80 bg-white">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input type="text" id="username" name="username" onChange={ (e) => setUsername(e.target.value)} placeholder="enter email" className="w-full px-3 py-2 border rounded"/>
                    </div>
                    <div className="mb-4">
                        <label>Password</label>
                        <input type="text" id="password" name="password" onChange={ (e) => setPassword(e.target.value)} placeholder="enter your password" className=" border w-full px-3 py-2 rounded"/>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
} 
export default Login;