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

                {/*  Add Transaction */}

                <div className="bg-white shadow rounded-lg p-6 mb-6 ">
                    <h2 className="text-lg font-bold mb-4">Add Transaction</h2>

                    <form className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
                        <input type="text" placeholder="Description" required />
                        <input type="number" placeholder="Amount" required />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Transactions;