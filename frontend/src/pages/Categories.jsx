import { React, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        type: "expense",
        icon: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/categories", formData,
                { headers: {
                    Authorization: `Bearer ${localStorage.getItem("pos-token")}`
                }}
            );
            if (response.data.success){
                setFormData({
                    name: "",
                    type: "expense",
                    icon: ""
                });
            }
        }catch (error) {
            console.error(" error creating category: ", error)
        }
    }
    return (
        <div className="ml-12 p-6">
            <h1>Categories</h1>

            <form  onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 mb-6">
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