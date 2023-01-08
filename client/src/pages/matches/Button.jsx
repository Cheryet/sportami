import React from "react";
import classNames from "classnames";
import "./button.scss";

export default function Button(props) {
  const buttonClass = classNames("button", {
    "button--accept": props.accept,
    "button--decline":props.decline,
    "button--cancel":props.cancel,
    "button--confirmedCancel":props.confirmedCancel,
    "button--email":props.email
  });

   return (
    <button 
      className={buttonClass}
    >
      {props.children}
    </button>
   );
}