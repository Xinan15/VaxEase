import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

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
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              <button className="button"
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
              </button>
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};




<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vaccination Appointment</title>
  <link rel='stylesheet' id='main-css'
    href='https://www.england.nhs.uk/coronavirus/wp-content/themes/nhsengland/static/main-cbc51e6ed911fce3e0d9136bf195993453a68625.min.css?ver=6.2.2'
    type='text/css' media='screen' />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/css/index.css">
  <style type="text/css">

    .header.nhs-e {
      background: hsl(197, 77%, 45%);
    }

    .nhs-e.top-nav-container {
      background: hsl(197, 75%, 30%);
    }

    .nhs-e.navigation li>a:hover,
    .nhs-e.navigation li>a.open,
    .nhs-e.navigation li.current-menu-item>a,
    .nhs-e.navigation li.current-menu-parent>a,
    .nhs-e.navigation li.current_page_item>a,
    .nhs-e.navigation li.current-page-ancestor>a {
      /* background: #0072ce; */
      background: hsl(197, 77%, 45%);
    }
  </style>
  <style type="text/css">
    .recentcomments a {
      display: inline !important;
      padding: 0 !important;
      margin: 0 !important;
    }
  </style>
</head>

<body
  class="page-template page-template-page-components page-template-page-components-php page page-id-5345 page-parent group">
  <div class="skip-link">
    <a href="#main-content" tabindex="1">Skip to main content</a>
  </div>
  <div class="nhs-e top-nav-container group">
    <div class="row group">
      <nav class="secondary-navigation" role="navigation">
        <ul id="menu-top-header" class="nav-menu">
          <li id="menu-item-16992" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16992"><a
              href="">Home</a></li>
          <li id="menu-item-16993" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16993"><a
              href="">My Profile</a></li>
          <li id="menu-item-16998" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-16998"><a
              href="">Contact us</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <main class="main group" role="main">
    <div id="chat" class="intelecomchat">
    </div>
    <section class="components" id="main-content">
      <header class="page-title-header">
        <div class="row">
          <h1>Vaccination Appointment</h1>
        </div>
      </header>

      <div class="article-component-container" style="background-color: #e8edee;">
        <div class="row">
          <article class="article-component has-zero-width-image has-left-aligned-image">
            <div class="article-content">

              <h2>COVID-19 vaccination is safe and effective. It gives you the best protection against COVID-19.</h2>

              <div class="rich-text content ">
                <p>You may be able to get different doses of the COVID-19 vaccine depending on your age and if you're at
                  increased risk from COVID-19.</p>
                <p>Some people are only offered certain vaccines, for example:</p>
                <ul>
                  <li>if you're pregnant</li>
                  <li>if you're under 18 years</li>
                  <li>if you're aged 75 or over and getting a seasonal booster dose</li>
                  <li>in very rare cases if you’ve had a severe allergic reaction to 1 of the common vaccines you may be
                    referred to a specialist clinic for an alternative COVID-19 vaccine</li>
                </ul>
              </div>

            </div>

          </article>
        </div>
      </div>

      <div class="row">
        <ul class="component-our-priorities">
          <li class="priority js-equalheight ">
            <a href="">
              <span>
                About COVID-19 vaccination<br><br><br><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                  class="arrow">
                  <path fill="#ffffff"
                    d="M14.9 8.4c.1-.2.1-.5 0-.7 0 0 0-.1-.1-.1 0-.1 0-.1-.1-.2l-5-6c-.4-.4-1-.5-1.4-.1-.4.4-.5 1-.1 1.4L11.9 7H2c-.6 0-1 .4-1 1s.4 1 1 1h9.9l-3.6 4.4c-.4.4-.3 1.1.1 1.4.1.1.4.2.6.2.3 0 .6-.1.8-.4l5-6s.1-.1.1-.2z" />
                </svg>
              </span>
            </a>
          </li>
          <li class="priority js-equalheight ">
            <a
              href="">
              <span>
                Fill in your personal information<br><br><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="arrow">
                  <path fill="#ffffff"
                    d="M14.9 8.4c.1-.2.1-.5 0-.7 0 0 0-.1-.1-.1 0-.1 0-.1-.1-.2l-5-6c-.4-.4-1-.5-1.4-.1-.4.4-.5 1-.1 1.4L11.9 7H2c-.6 0-1 .4-1 1s.4 1 1 1h9.9l-3.6 4.4c-.4.4-.3 1.1.1 1.4.1.1.4.2.6.2.3 0 .6-.1.8-.4l5-6s.1-.1.1-.2z" />
                </svg>
              </span>
            </a>
          </li>
          <li class="priority js-equalheight ">
            <a href="/appoint">
              <span>
                Book for an appointment<br><br><br> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                  class="arrow">
                  <path fill="#ffffff"
                    d="M14.9 8.4c.1-.2.1-.5 0-.7 0 0 0-.1-.1-.1 0-.1 0-.1-.1-.2l-5-6c-.4-.4-1-.5-1.4-.1-.4.4-.5 1-.1 1.4L11.9 7H2c-.6 0-1 .4-1 1s.4 1 1 1h9.9l-3.6 4.4c-.4.4-.3 1.1.1 1.4.1.1.4.2.6.2.3 0 .6-.1.8-.4l5-6s.1-.1.1-.2z" />
                </svg>
              </span>
            </a>
          </li>

        </ul>
      </div>

    </section>

  </main>

  
</body>

</html>