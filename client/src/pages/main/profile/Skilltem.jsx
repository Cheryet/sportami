import React from "react";
import "./skillItem.scss";

const SkillItem = (props) => {
  return (
    <>
      <li className="skill-level-item">{props.skillLevel}</li>
    </>
  );
};

export default SkillItem;
