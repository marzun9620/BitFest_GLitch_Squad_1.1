import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const HF_API_URL = 'https://api-inference.huggingface.co/models/gpt2';
const HF_API_KEY = process.env.HF_API_KEY; // Use your Hugging Face API key from the environment variables

const extractRelevantRecipe = (text) => {
    if (!text) {
        return "The response did not contain any valid text.";
    }

    const match = text.match(/Here is a suggested recipe:(.*)/i);
    if (match && match[1]) {
        return match[1].trim(); // Extract the recipe after the phrase
    }
    return text.trim(); // Fallback to return the full response text
};

const suggestRecipe = async (req, res) => {
    try {
        const { preferences, availableIngredients } = req.body;

        // Validate request body
        if (!preferences || !availableIngredients || !Array.isArray(availableIngredients)) {
            return res.status(400).json({ error: "Invalid input. Please provide preferences and availableIngredients." });
        }

        // Create input for the Hugging Face model
        const inputText = `User preferences: ${preferences}. Available ingredients: ${JSON.stringify(
            availableIngredients
        )}. Suggest a concise recipe based on these preferences and ingredients.`;

        // Call Hugging Face Inference API
        const response = await axios.post(
            HF_API_URL,
            {
                inputs: inputText,
                parameters: {
                    max_length: 200,
                    temperature: 0.7,
                    top_k: 50,
                    top_p: 0.9,
                },
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${HF_API_KEY}`,
                },
            }
        );

        // Debugging: log the API response
        console.log("API Response:", response.data);

        // Safely access the generated text
        const rawText = response.data?.generated_text || "No text generated.";
        const recipeSuggestion = extractRelevantRecipe(rawText);

        res.json({ reply: recipeSuggestion });
    } catch (error) {
        console.error("Error:", error);
        const statusCode = error.response?.status || 500;
        const errorMessage = error.response?.data?.error || error.message || "Internal Server Error";
        res.status(statusCode).json({ error: errorMessage });
    }
};

export default suggestRecipe;
