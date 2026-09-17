import React from "react";

const Categories = () => {
    return (
        <div className="ml-12 p-6">
            <h1>Categories</h1>

            <form className="bg-white shadow rounded-lg p-6 mb-6">
                <h2 className="bg-green-500 text-black font-bold p-2">Add Category</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <input type="text" placeholder="Enter category name" className="border rounded px-4 py-2" required />
                    <select className="border rounded px-4 py-2">
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                    <input type="text" placeholder="Icon name" className="border rounded px-4 py-2"/>
                    <input type="submit" value="Add Category" />
                    <button type="submit" className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover-green-700">Add Category</button>
                </div>
            </form>
        </div>
    );
}

export default Categories;