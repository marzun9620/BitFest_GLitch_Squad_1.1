import express from 'express';
import { addRecipe, getRecipes } from '../controllers/recipeController.js';

const router = express.Router();

router.post('/', addRecipe);
router.get('/', getRecipes);

export default router;
