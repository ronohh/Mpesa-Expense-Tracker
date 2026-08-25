import React from "react"

const Login = () => {
    

    return(
        <div>
            <div>
                <h1>Login</h1>
                <form >
                    <div>
                        <label>Username</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" />
                    </div>
                    <div>
                        <button type="submit" >Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
} 
export default Login;