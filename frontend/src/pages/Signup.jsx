import React from "react";
import { useState } from "react";
import axios from 'axios';

const Signup = () => {
    const [formData, setformData] = useState({
        name: "",
        username: "",
        email: "",
        phoneNumber: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/api/auth/signup",formData);
            if (response.data.success){
                alert ("registered succefully")
                setformData({
                    name: "",
                    username: "",
                    email: "",
                    phoneNumber: "",
                    password: ""
                })
            }else {
                console.log("error registering")
            }
        }catch(error){
            console.error("error submiting", error)
        }
    }

    const handleChange = (e) => {
        const { name, value} = e.target;
        setformData((prev) => ({
            ...prev,
            [name] : value,
        }));
    }

    return (
        <div className="flex flex-col items-center justify-center m-8">
            <div>
                <h1 className=" text-2xl font-bold ">Sign up</h1>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="flex flex-col">
                    
                    <label>Name : </label>
                    <input type="text" name="name" value={ formData.name} onChange={handleChange} className="border rounded px-3 py-2 ml-2"/>
                    <label>Username : </label>
                    <input type="text" name="username" value={ formData.username } onChange={handleChange} className="border rounded px-3 py-2 ml-2"/>
                    <label>email: </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="border rounded px-3 py-2 ml-2"/>
                    <label> phoneNumber: </label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border rounded px-3 py-2 ml-2"/>
                    <label>Password : </label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="border rounded px-3 py-2 ml-2"/>
                    
                    <button type='submit' className="bg-green-500 text-white py-2 rounded hover:bg-blue-600 mt-4">submit</button>
                    
                </div>
            </form>
        </div>
    )
}

export default Signup