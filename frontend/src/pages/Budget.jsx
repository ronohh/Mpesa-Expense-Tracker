
const Budget = () => {
    return (
        <div className="p-6">
            <h1 className="text-left text-2xl font-bold ">Budgets</h1>
            <p>plan your expenses and track your spending</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 mb-6">
                <div className="bg-white shadow rounded-lg p-2">
                    <h3 className="text-md font-semibold">Total Budget</h3>
                    <h2 className="text-2xl font-semibold">KSH:0.00</h2>
                    <p>This Month</p>
                </div>

                <div className="bg-white shadow rounded-lg p-2">
                    <h3 className="text-md font-semibold">Total Spent</h3>
                    <h2 className="text-2xl font-semibold">KSH:0.00</h2>
                    <p>This Month</p>
                </div>

                <div className="bg-white shadow rounded-lg p-2">
                    <h3 className="text-md font-semibold">Remaining Budget</h3>
                    <h2 className="text-2xl font-semibold">KSH:0.00</h2>
                    <p>This Month</p>
                </div>
            </div>
        </div>
    )
}

export default Budget;