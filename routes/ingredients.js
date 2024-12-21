import express from 'express';
import { addIngredient, updateIngredient, getIngredients } from '../controllers/ingredientController.js';

const router = express.Router();

router.post('/', addIngredient);
router.put('/:id', updateIngredient);
router.get('/', getIngredients);

export default router;
