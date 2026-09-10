import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    description: {type: String, required: true},
    amount: {type: Number, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    date: { type: Date, required: true }
}, {timestamps: true});

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);

export default Transaction;