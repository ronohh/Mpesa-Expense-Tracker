
const Budget = () => {
    return (
        <div className="p-6">
            <h1 className="text-left text-2xl font-bold ">Budgets</h1>
            <p>plan your expenses and track your spending</p>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mb-6">
                <div>
                    <h3>Total Budget</h3>
                    <h2>KSH:0.00</h2>
                    <p>This Month</p>
                </div>

                <div>
                    <h3>Total Spent</h3>
                    <h2>KSH:0.00</h2>
                    <p>This Month</p>
                </div>

                <div>
                    <h3>Remaining Budget</h3>
                    <h2>KSH:0.00</h2>
                    <p>This Month</p>
                </div>
            </div>
        </div>
    )
}