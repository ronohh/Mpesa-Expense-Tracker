import Category from "../models/CategoriesModel.js";

const addCategory = async (req,res) => {
    try {
        const { name, type, icon } = req.body;

        if( !name || !type) {
            return res.status(400).json({ message: "Name and type are required"});
        }

        const existingCategory = await Category.findOne({ name,type,user: req.user._id});
        if(existingCategory) {
            return res.status(400).json({ message: "Category already exists"});
         }

         const category = await Category.create({name,type,icon,user: req.user._id });
         res.status(201).json({ message: "Category added successfully", category });

    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error", error });
    }
};

const getCategories = async (req,res) => {
    try{
        const categories = await Category.find();
        return res.status(200).json({success: true, categories});
    }catch(error){
        console.error('Error fetching categories:', error);
        return res.status(500).json({ success: false, message: 'server error'})
    }
}

export { addCategory, getCategories };