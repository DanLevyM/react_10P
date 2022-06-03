import React, { useState } from "react";
import "./SubForm.css";

export default function DietForm(props) {
  const preventFunc = (e) => e.preventDefault();

  const [formData, setFormData] = useState({
    dietForm: "nodiet",
  });

  const handleRadio = (e) => {
    setFormData({
      dietForm: e.target.value,
    });
  };

  console.log(formData);

  return (
    <form onSubmit={preventFunc} className="diet-form">
      <p>Quel est ton régime alimentaire ?</p>

      <label htmlFor="nodiet"> Pas de régime en particulier</label>
      <input
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="nodiet"
        value="nodiet"
      />

      <label htmlFor="homnivorous"> Homnivore</label>
      <input
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="homnivorous"
        value="homnivorous"
      />

      <label htmlFor="vegetarian"> Végétarien</label>
      <input
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="vegetarian"
        value="vegetarian"
      />

      <label htmlFor="vegan"> Vegan</label>
      <input
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="vegan"
        value="vegan"
      />

      <button onClick={() => props.modifyIndex(3, formData)}>Valider</button>
    </form>
  );
}
