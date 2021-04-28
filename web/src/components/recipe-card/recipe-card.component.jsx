import React from "react";
import image from "../../assets/images/1.jpg";
import "./recipe-card.styles.scss";

const RecipeCard = ({ ...otherRecipeProps }) => {
  return (
    <div className="card">
      <img src={image} alt="" style={{ width: "100%" }} />
      <h1>{otherRecipeProps.title.toUpperCase()}</h1>
      <span className="price">{otherRecipeProps.description}</span>
      <p>Brew Method : {otherRecipeProps.brew_method}</p>
      <p>Bean Type : {otherRecipeProps.bean_type}</p>
      <p>Brew Time (mins) : {otherRecipeProps.brew_time}</p>
      <p>Taste Notes : {otherRecipeProps.taste_notes}</p>
    </div>
  );
};

export default RecipeCard;