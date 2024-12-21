import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: [{ name: String, quantity: Number, unit: String }],
    steps: [String],
    taste: String,
    cuisine: String,
    prepTime: Number,
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Recipe', recipeSchema);
