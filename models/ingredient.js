import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Ingredient', ingredientSchema);
