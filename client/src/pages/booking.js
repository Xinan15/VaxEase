import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Booking = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/recipes",
        { ...recipe },
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert("Recipe Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="booking">
      <h2>Vaccine Booking</h2>
      <h3>Enter Your Details</h3>
      <h4>About you</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <select className="select" id="title">
          <option disabled="" selected="" value="null"></option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <div className="name-container">
          <div className="name-input">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={recipe.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="name-input">
            <label htmlFor="lastName">Surname</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={recipe.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" class="date-field"></input>

        <label htmlFor="gender">Gender Identity</label>
        <select className="select" id="gender">
          <option disabled="" selected="" value="null"></option>
          <option value="Mr">Male(including trans man)</option>
          <option value="Mrs">Female(including trans woman)</option>
          <option value="Ms">Non-binary</option>
          <option value="Miss">Other</option>
          <option value="Dr">Prefer not to say</option>
        </select>

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={recipe.description}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
          />
        ))}
        <button type="button" className="button" onClick={handleAddIngredient}>
          Add Ingredient
        </button>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={recipe.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={handleChange}
        />
        <button type="submit" className="button">
          Create Recipe
        </button>
      </form>
    </div>
  );
};
