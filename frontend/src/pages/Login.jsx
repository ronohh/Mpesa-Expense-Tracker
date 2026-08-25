import React from "react"

const Login = () => {
    

    return(
        <div className="flex flex-col items-center justify-center ">
            <div className="border shadow-lg p-6 w-80 bg-white">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form >
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input type="text" className="w-full px-3 py-2 border rounded"/>
                    </div>
                    <div className="mb-4">
                        <label>Password</label>
                        <input type="text" className=" border w-full px-3 py-2 rounded"/>
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