import React from "react";

const Transactions = () => {
    return (
        <div className="p-6">
            <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold">Transactions</h1>
                <p className="text-gray-500"> View and manage your transactions.</p>
            </div>
{/* summarry cards */}
            <div className="grid grid-cols-1 md: grid-cols-4 gap-4 mb-6">
                <div className="bg-white shadow rounded-lg p-4">

                    <p className="text-gray-500"> Total Income</p>

                    <h2 className="text-2xl font-bold text-green-600">Ksh : 0.00</h2>
                </div>

                <div className= "bg-white shadow rounded-lg p-4">

                    <p className="text-gray-500">Transaction</p>
                    <h2 className="text-xl font-bold">tttt</h2>
                </div>
            </div>

        </div>
    )
}

export default Transactions;