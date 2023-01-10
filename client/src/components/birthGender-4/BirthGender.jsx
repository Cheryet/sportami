import "./birthGender.scss";
import { ArrowBackIos } from "@material-ui/icons";
import React, { useState } from "react";

const genders = ["Male", "Female", "Other"];

function BirthGender({ setCurrent, birthGender, setBirthGender }) {
  const [age, setAge] = useState(birthGender["age"]);
  const [gender, setGender] = useState(birthGender["gender"]);

  const handleContinue = () => {
    setBirthGender({
      age: age,
      gender: gender,
    });
    setCurrent("ProfilePhoto");
  };

  const handleBack = () => {
    setCurrent("Location");
  };

  return (
    <div className="birth-gender">
      <ArrowBackIos onClick={handleBack} />
      <form className="information">
        <h4>My age and gender are</h4>
        <input
          className="age"
          type="age"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select
          required
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" selected disabled>
            Select gender
          </option>
          {genders.map((gender) => {
            return (
              <option key={gender} value={gender}>
                {gender}
              </option>
            );
          })}
        </select>
      </form>
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default BirthGender;
