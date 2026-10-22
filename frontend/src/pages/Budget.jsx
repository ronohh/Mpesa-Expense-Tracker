
const Budget = () => {
    return (
        <div className="p-6">
            <h1 className="text-left text-2xl font-bold ">Budgets</h1>
            <p>plan your expenses and track your spending</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 mb-6">
                <div className="bg-white shadow rounded-lg p-2">
                    <h3 className="text-sm font-semibold">Total Budget</h3>
                    <h2 className="text-md font-bold">Ksh:0.00</h2>
                    <p className="text-sm">This Month</p>
                </div>

                <div className="bg-white shadow rounded-lg p-2">
                    <h3 className="text-sm font-semibold">Total Spent</h3>
                    <h2 className="text-md font-bold">Ksh:0.00</h2>
                    <p className="text-sm">This Month</p>
                </div>

                <div className="bg-white shadow rounded-lg p-2">
                    <h3 className="text-sm font-semibold">Remaining Budget</h3>
                    <h2 className="text-md font-bold">Ksh:0.00</h2>
                    <p className="text-sm">This Month</p>
                </div>
            </div>

            <div className= "bg-white shadow rounded-lg p-6 mt-6">
                <h1 className="text-sm font-semibold">Budget by category</h1>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6">
                    <div>
                        <table className="w-full">
                            <thead >
                                <tr>
                                    <th className="text-sm text-left p-4">Category</th>
                                    <th className="text-sm text-left p-4">Budget</th>
                                    <th className="text-sm text-left p-4">Spent</th>
                                    <th className="text-sm text-left p-4">Remaining</th>
                                    <th className="text-sm text-left p-4">Progress</th>
                                    <th className="text-sm text-left p-4">Status</th>
                                    <th className="text-sm text-left p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Food</td>
                                    <td>Ksh 5,000.00</td>
                                    <td>Ksh 3,000.00</td>
                                    <td>Ksh 2,000.00</td>
                                    <td>60%</td>
                                    <td className="text-green-500">On Track</td>
                                    <td>
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                                        <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget;