import React from 'react'

const Signup = () => {

    return (
        <div className="flex flex-col items-center justify-center m-8">
            <div>
                <h1 className=" text-2xl font-bold ">Sign up</h1>
            </div>
            <div className="flex flex-col">
                
                <label>Name : </label>
                <input type="text" className="border rounded px-3 py-2 ml-2"/>
                <label>Username : </label>
                <input type="text" className="border rounded px-3 py-2 ml-2"/>
                <label>email: </label>
                <input type="email" className="border rounded px-3 py-2 ml-2"/>
                <label> phoneNumber: </label>
                <input type="text" className="border rounded px-3 py-2 ml-2"/>
                <label>Password : </label>
                <input type="password" className="border rounded px-3 py-2 ml-2"/>
                
                <button type='submit' className="bg-green-500 text-white py-2 rounded hover:bg-blue-600 mt-4">submit</button>
            </div>
        </div>
    )
}

export default Signup