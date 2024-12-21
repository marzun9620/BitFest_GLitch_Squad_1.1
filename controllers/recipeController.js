import Recipe from '../models/recipe.js';

export const addRecipe = async (req, res) => {
    try {
        const { name, ingredients, steps, taste, cuisine, prepTime } = req.body;
        const recipe = new Recipe({ name, ingredients, steps, taste, cuisine, prepTime });
        await recipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
