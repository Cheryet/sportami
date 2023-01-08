import React from "react";
import "./sports.scss";
import { ArrowBackIos } from "@material-ui/icons";
import { useState } from "react";

const sports = [
  "Golf",
  "Tennis",
  "Bowling",
  "Ping Pong",
  "Squash",
  "Pickleball",
];

function Sports({ setCurrent }) {
  const [skillsList, setSkillsList] = useState([{ sport: "", skill: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...skillsList];
    data[index][event.target.name] = event.target.value;
    // TODO: When implementing error handling:
    // add a error popup when someone tries to select a sport they already selected
    setSkillsList(data);
  };

  // event.target.name === returns name of the category
  // event.target.value === returns the selected option

  // const submit = (e) => {
  //   e.preventDefault();
  //   console.log(skillsList);
  // };

  const addFields = () => {
    let object = {
      sport: "",
      skill: "",
    };

    setSkillsList([...skillsList, object]);
  };

  const removeFields = (index) => {
    let data = [...skillsList];
    data.splice(index, 1);
    setSkillsList(data);
  };

  const handleContinue = () => {
    setCurrent("Bio");
  };

  const handleBack = () => {
    setCurrent("ProfilePhoto");
  };

  return (
    <div className="sports">
      <ArrowBackIos onClick={handleBack} />
      <h4>My preferred sports and skills are</h4>
      <form>
        {skillsList.map((form, index) => {
          return (
            <div className="sport-skill" key={index}>
              <select
                required
                name="sport"
                className="select-sport"
                onChange={(event) => handleFormChange(event, index)}
                value={form.sport}
              >
                <option value="" selected disabled>
                  Select a sport
                </option>
                {sports.map((sport) => {
                  if (skillsList.find((e) => e.sport === sport)) {
                    return (
                      <option key={sport} value={sport} selected disabled>
                        {sport}
                      </option>
                    );
                  } else {
                    return (
                      <option key={sport} value={sport}>
                        {sport}
                      </option>
                    );
                  }
                })}
              </select>
              <select
                required
                name="skill"
                onChange={(event) => handleFormChange(event, index)}
                value={form.skill}
              >
                <option value="" selected disabled>
                  Select a skill
                </option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              {skillsList.length === 1 ? (
                <></>
              ) : (
                <button
                  className="remove-button"
                  onClick={() => removeFields(index)}
                >
                  x
                </button>
              )}
            </div>
          );
        })}
      </form>
      {skillsList.length < 3 ? (
        <button className="add-button" onClick={addFields}>
          +
        </button>
      ) : (
        <></>
      )}
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default Sports;
