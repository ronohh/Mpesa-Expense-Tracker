import React from "react";

const Categories = () => {
    return (
        <div className="p-6">
            <h1>Categories</h1>

            <form className="bg-white shadow rounded-lg p-6 mb-6">
                <h2 className="bg-black text-white p-2">Add Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" placeholder="Enter category name" />
                    <select>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                    <input type="submit" value="Add Category" />
                    <button>Add Category</button>
                </div>
            </form>
        </div>
    );
}

export default Categories;