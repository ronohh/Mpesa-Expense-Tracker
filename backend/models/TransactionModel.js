import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    description: {type: String, required: true, trim: true},
    amount: {type: Number, required: true, min: 0},
    type: {type: String, enum: ["income", "expense"], required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true, default: null},
    categoryName: {type: String, default: "Other"},
    transactionId: {type: String, default: null, trim: true},
    balance: {type: Number, default: null},
    source: {type: String, enum: ["manual", "mpesa_import"], default: "manual"},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    date: { type: Date, required: true }
}, {timestamps: true});

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);

export default Transaction;