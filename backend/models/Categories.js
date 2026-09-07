import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: {type: String,required: true},
    type: {type: String,required: true, enum: ['income', 'expense']},
    icon: { type:String},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
},{
    timestamps: true
});