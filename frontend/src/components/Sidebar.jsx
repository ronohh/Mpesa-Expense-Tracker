import React, { useEffect, useState } from "react";
import {FaHome} from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const menuItems = [
        { name: "Dashboard", path: "/dashboard", icon: <FaHome /> }
    ]

    const [menuLinks, setMenuLinks] = useState();
    useEffect(() => {
        if(user) {
            setMenuLinks(menuItems)
        }
    }, [])
    return(
        <div className="flex flex-col h-screen bg-black text-white w-16 md:w-64 fixed">
            <div className="h-16 ">
                <span className=" hidden md:block text-lg font-bold">Expense Tracker</span>
                <span className="md:hidden text-sm font-bold">Expense Tracker</span>
            </div>

            <div>
                <ul className="space-y-2 p-2">
                    {
                        menuLinks.map( (item) => (
                            <li key={item.name}>
                                <NavLink className={({isActive}) => isActive ? "flex items-center p-2 text-white bg-gray-700 rounded" : "flex items-center p-2 text-white hover:bg-gray-700 rounded"} to={item.path}>
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="hidden md:block">{item.name}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;