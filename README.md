# See the Master branch



# Challenge 1 ::

file : kuet_preli_q1.ipnb






# API Documentation: Challenge:2 = Mofa’s Kitchen Buddy

This document provides detailed API documentation for the backend system of Mofa’s Kitchen Buddy. The system manages ingredients, stores recipes, and integrates a chatbot powered by an LLM (Large Language Model) to suggest recipes based on available ingredients and user preferences.

## 1. Ingredients Management APIs

### POST /ingredients
Adds a new ingredient to the database.

**Request Body:**
```json
{
    "name": "Sugar",
    "quantity": 2,
    "unit": "kg"
}
```

**Response:**
```json
{
    "id": "ingredient_id",
    "name": "Sugar",
    "quantity": 2,
    "unit": "kg",
    "updatedAt": "2024-12-21T10:00:00Z"
}
```

### PUT /ingredients/:id
Updates the quantity of an ingredient by ID.

**Request Body:**
```json
{
    "quantity": 5
}
```

**Response:**
```json
{
    "id": "ingredient_id",
    "name": "Sugar",
    "quantity": 5,
    "unit": "kg",
    "updatedAt": "2024-12-21T11:00:00Z"
}
```

### GET /ingredients
Retrieves all available ingredients.

**Response:**
```json
[
    {
        "id": "ingredient_id_1",
        "name": "Sugar",
        "quantity": 2,
        "unit": "kg",
        "updatedAt": "2024-12-21T10:00:00Z"
    },
    {
        "id": "ingredient_id_2",
        "name": "Flour",
        "quantity": 1,
        "unit": "kg",
        "updatedAt": "2024-12-21T09:00:00Z"
    }
]
```

## 2. Recipe Management APIs

### POST /recipes
Adds a new recipe to the database.

**Request Body:**
```json
{
    "name": "Chocolate Cake",
    "ingredients": [
        { "name": "Sugar", "quantity": 1, "unit": "kg" },
        { "name": "Flour", "quantity": 1, "unit": "kg" }
    ],
    "steps": ["Mix ingredients", "Bake at 180°C for 30 minutes"],
    "taste": "Sweet",
    "cuisine": "Dessert",
    "prepTime": 45
}
```

**Response:**
```json
{
    "id": "recipe_id",
    "name": "Chocolate Cake",
    "ingredients": [
        { "name": "Sugar", "quantity": 1, "unit": "kg" },
        { "name": "Flour", "quantity": 1, "unit": "kg" }
    ],
    "steps": ["Mix ingredients", "Bake at 180°C for 30 minutes"],
    "taste": "Sweet",
    "cuisine": "Dessert",
    "prepTime": 45,
    "createdAt": "2024-12-21T12:00:00Z"
}
```

### GET /recipes
Retrieves all recipes from the database.

**Response:**
```json
[
    {
        "id": "recipe_id",
        "name": "Chocolate Cake",
        "ingredients": [
            { "name": "Sugar", "quantity": 1, "unit": "kg" },
            { "name": "Flour", "quantity": 1, "unit": "kg" }
        ],
        "steps": ["Mix ingredients", "Bake at 180°C for 30 minutes"],
        "taste": "Sweet",
        "cuisine": "Dessert",
        "prepTime": 45,
        "createdAt": "2024-12-21T12:00:00Z"
    }
]
```

## 3. Chatbot API

### POST /chatbot
Suggests recipes based on user preferences and available ingredients.

**Request Body:**
```json
{
    "preferences": "I want something sweet",
    "availableIngredients": [
        { "name": "Sugar", "quantity": 2, "unit": "kg" },
        { "name": "Flour", "quantity": 1, "unit": "kg" }
    ]
}
```

**Response:**
```json
{
    "reply": "Based on your preferences and available ingredients, I recommend making Chocolate Cake."
}
```
