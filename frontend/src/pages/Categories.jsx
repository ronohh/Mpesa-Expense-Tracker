import { React, useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        type: "expense",
        icon: ""
    });

const fetchCategories = async () => {
    try{
        const response = await axios.get("http://localhost:3000/api/categories/",{
            headers: { Authorization: `Bearer ${localStorage.getItem("pos-token")}`}
        });
        if (response.data.success) {
            setCategories(response.data.Categories);
        }
    }catch(error) {
            console.error( "Error fetching categories", error)
        }
        useEffect(() => {
            fetchCategories();
        },[])
}

const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value
    }));
}

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/categories/", formData,
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

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this category?")

        if(!confirmDelete) return;

        try {
            const response = await axios.delete(`http://localhost:3000/api/categories/${id}`,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("pos-token")}` }
                }
            );

            if (response.data.success) {
                fetchCategories();
            }
        } catch (error) {
            console.error("Error deleting category:", error.response?.data || error.message);
        }
    }
    return (
        <div className="ml-12 p-6">
            <h1>Categories</h1>

            <form  onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 mb-6">
                <h2 className="bg-green-500 text-black font-bold p-2">Add Category</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <input type="text" name="name" placeholder="Enter category name" className="border rounded px-4 py-2" required onChange={handleChange} />
                    <select name="type" className="border rounded px-4 py-2" onChange={handleChange}>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                    <input type="text" name="icon" placeholder="Icon name" className="border rounded px-4 py-2" onChange={handleChange}/>
                    <input type="submit" value="Add Category" />
                    <button type="submit" className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover-green-700">Add Category</button>
                </div>
            </form>

            <div className="bg-white shadow rounded-lg p-6">
                <div className="p-4 border-b">
                    <h2 className="text-lg font-semibold">My Categories</h2>
                </div>
                {/* {categories.length === 0 ? (
                    <p>No categories found.</p>
                ):( */}
                    <div>
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left p-4">Name</th>
                                    <th className="text-left p-4">Type</th>
                                    <th className="text-left p-4">Icon</th>
                                    <th className="text-left p-4">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {categories.map((category) => (
                                    <tr key={category._id}>
                                        <td>{category.name}</td>
                                        <td>{category.type}</td>
                                        <td>{category.icon}</td>
                                        <td className="p-4 text-right">
                                            <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(category._id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                {/* )} */}
            </div>
        </div>
    );
}

export default Categories;