import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div >
            <div className="flex-1 flex flex-col">
                <Navbar />
            </div>
            <div className="flex min-h-screen bg-gray-100">
                <Sidebar/>
            </div>
        </div>
    )
}

export default Layout 