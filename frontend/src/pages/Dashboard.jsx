import React from "react";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

const Dashboard = () => {
    return ( 
        <Layout>
            <div>
                <div className="flex">
                    <Sidebar/>
                </div>
            </div>
        </Layout>
        
    )
}

export default Dashboard