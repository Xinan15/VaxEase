import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const linkstyle = {
  textDecoration: "none",
};

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div>
      <h1>Recipes</h1>

      <>
      <div className="body">
        <div className="body-left">
          <img
            src="https://cdn.discordapp.com/attachments/752888354076360706/818724911807594536/logowb.png"
            alt="main-img"
            className="pic"
          />
        </div>
        <div className="body-right">
          <h1 className="head">
            COVID-19 <br /> VACCINE BOOKING PLATFORM
          </h1>
          <Link to="/register" style={linkstyle}>
            <button className="register">REGISTER YOURS</button>
          </Link>
        </div>
      </div>
    </>
    </div>
  );
};
