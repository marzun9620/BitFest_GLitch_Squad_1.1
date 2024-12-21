import Ingredient from '../models/ingredient.js';

export const addIngredient = async (req, res) => {
    try {
        const { name, quantity, unit } = req.body;
        const ingredient = new Ingredient({ name, quantity, unit });
        await ingredient.save();
        res.status(201).json(ingredient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        const ingredient = await Ingredient.findByIdAndUpdate(
            id,
            { quantity, updatedAt: Date.now() },
            { new: true }
        );
        if (!ingredient) return res.status(404).json({ message: 'Ingredient not found' });
        res.json(ingredient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find();
        res.json(ingredients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
