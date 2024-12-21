import express from 'express';
import dotenv from 'dotenv';
import connection from './connection.js';
import ingredientRoutes from './routes/ingredients.js';
import recipeRoutes from './routes/recipes.js';
import  suggestRecipe  from './services/chatbot.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/ingredients', ingredientRoutes);
app.use('/recipes', recipeRoutes);
app.post('/chatbot', suggestRecipe);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
