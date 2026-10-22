
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
                            <thead>
                                <tr>
                                    <th>category</th>
                                    <th>Budget</th>
                                    <th>Spent</th>
                                    <th>Remaining</th>
                                    <th>Progress</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget;