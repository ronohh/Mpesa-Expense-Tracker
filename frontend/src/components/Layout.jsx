import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div >
            <div className="flex-1 flex flex-col">
                <Navbar />
            </div>
            <div className="flex min-h-screen bg-gray-100">
                <Sidebar/>

                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout 