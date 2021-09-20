import { useEffect } from 'react';
import CreateForm from '../components/CreateForm.js';
import ReportTable from '../components/ReportTable.js';
import Footer from '../components/Footer.js'
import React, { useState } from "react";


export default function LoginForm() {
    const { login } = useAuth();
    const [username, setUsername] = useState({

    })

    const handlelogin = ((e) => {
        e.preventDefault();
        const user = e.target.username.value
        const password = e.target.password.value
        login(user, password)

    })
    return (

        <form onSubmit={handlelogin} className="grid justify-center w-1/3 grid-rows-3 p-5 mx-auto font-semibold text-center bg-green-200 border-2 border-green-500 border-solid rounded-lg m-9 my-7">
            <div className="grid grid-rows-2 ">
                <label >Username</label>
                <input type="text" name="username"  required className=""/>
            </div>
            <div className="grid grid-rows-2 ">
                <label >Password</label>
                <input type="password" name="password" required className="w-full" />
            </div>
            <div>
                <button className="w-full p-2 mt-5 text-white bg-green-700 rounded">Login</button>
            </div>



        </form>
    )
}