import Transaction from "../models/TransactionModel";
import category from "../models/CategoriesModel";

const AddTransaction = async (req, res) => {
    try{
        const { description, amount, category, date} = req.body;

        if (!description || !amount || !category ) {
            return res.status(400).json({ success: false, message: "Please fill all the fields"});
        }

        const categoriesExist = await Category.findOne({ _id: category, user: req.user_id});
        if (!categoriesExist){
            return res.status(404).json({ success: false, message: "Category not found"});
        }

        const transaction = await Transaction.create({
            description,
            amount,
            category,
            user:  req.user._id,
            date: date || new Date()
        });

        const populatedTransaction = await transaction.populate("category", "name type icon");
        return res.status(201).json({ success: true, message: "Transaction created succesfully", transaction: populatedTransaction });
    } catch (error) {
        console.error("Error creating transaction:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export { AddTransaction };