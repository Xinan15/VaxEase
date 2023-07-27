import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import bookingcss from './bookingCSS.module.css';

export const Booking = () => {

  const [cookies] = useCookies(["access_token"]);

  return (
    <>
      {cookies.access_token ? 
      <div className="booking"><BookingForm /></div> : <Alert />}
    </>
  );
};

export const Alert = () => {
  const navigate = useNavigate();
  return (
    <div className={bookingcss.alert}>
      <h1>Please Login to Book</h1>
      <button onClick={() => navigate("/auth")}>Login</button>
    </div>
  );
};

export const BookingForm = () => {
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

  const today = new Date();

  const dateString = today.toISOString().split("T")[0];

  return (
    <div className="bookingContainer">
      <h2>Vaccine Booking</h2>
      <h3>Enter Your Details</h3>
      <h4>About you</h4>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">

        <label htmlFor="title" className="form-label">Title</label>
        <select className="select form-select" id="title">
          <option disabled="" selected="" value="null"></option>
          <option>Mr</option>
          <option>Mrs</option>
          <option>Ms</option>
          <option>Miss</option>
          <option>Dr</option>
        </select>
        </div>

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
            <label htmlFor="lastName">Last Name</label>
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

        <h4>About you</h4>

        <label htmlFor="firstName">Phone Number</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={recipe.firstName}
          onChange={handleChange}
        />
        <label htmlFor="firstName">Email</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={recipe.firstName}
          onChange={handleChange}
        />

        <label htmlFor="firstName">City</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={recipe.firstName}
          onChange={handleChange}
        />
        <label htmlFor="firstName">Postcode</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={recipe.firstName}
          onChange={handleChange}
        />

        <label htmlFor="firstName">Address line 1</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={recipe.firstName}
          onChange={handleChange}
        />
        <label htmlFor="firstName">Address line 2</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={recipe.firstName}
          onChange={handleChange}
        />

        <h4>I would like an appointment for:</h4>

        <label htmlFor="title">Type</label>
        <select className="select" id="title">
          <option disabled="" selected="" value="null"></option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <label htmlFor="dob">Date</label>
        <input
          type="date"
          id="dob"
          name="dob"
          className="date-field"
          min={dateString}
        ></input>

        <label htmlFor="title">Slot</label>
        <select className="select" id="title">
          <option disabled="" selected="" value="null"></option>
          <option value="Mr">09:00 To 09:30</option>
          <option value="Mrs">10:30 To 11:00</option>
          <option value="Ms">12:00 To 12:30</option>
          <option value="Miss">13:30 To 14:00</option>
          <option value="Dr">15:00 To 15:30</option>
          <option value="Dr">16:30 To 17:00</option>
        </select>

        <label htmlFor="ingredients">
          Do you have any concerns or information you would like to share with
          us?
        </label>
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
          Add Information
        </button>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};
