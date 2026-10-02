import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [categories, setCategories] = useState([]);

    const getHeaders = () => {
        return {
            Authorization: `Bearer ${localStorage.getItem("pos-token")}`
        };
    };
    
    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/categories", {
                headers: getHeaders()
            });
            if (response.data.success) {
                setCategories(response.data.categories);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/transactions",
                {
                    headers: getHeaders()
                }
            );
            if (response.data.success) {
                setTransactions(response.data.transactions);
            }
        }catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };
    
    useEffect(() => {
        fetchTransactions();
    }, []);

    const totalIncome = transactions.filter(
        (transaction) => transaction.category?.type === "income"
    ).reduce((sum, transaction) => sum + transaction.amount, 0);

    const totalExpenses = transactions.filter(
        (transaction)=> transaction.category?.type === "expense"
    ).reduce((sum, transaction) => sum + transaction.amount, 0);

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

                    <h2 className="text-2xl font-bold text-green-600">Ksh : {totalIncome.toFixed(2)}</h2>
                </div>

                <div className= "bg-white shadow rounded-lg p-4">

                    <p className="text-gray-500">Total Expenses</p>
                    <h2 className="text-2xl font-bold text-red-600">Ksh : {totalExpenses.toFixed(2)}</h2>

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