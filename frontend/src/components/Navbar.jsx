import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="bg-green-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/Dashboard" className="text-xl font-bold">Expense Tracker</Link>
                <div className="flex items-center gap-6">
                    <Link to="/dashboard" className="hover:text-green-200">Dashboard</Link>
                    <Link></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;