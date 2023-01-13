import React, { useState } from "react";
import "./accordion.scss";

// Categories and options for filter
const categories = [
  {
    category: "Sport",
    options: ["Golf", "Tennis", "Bowling", "Squash", "Ping Pong", "Pickleball"],
  },
  {
    category: "Gender",
    options: ["Male", "Female", "Other"],
  },
  {
    category: "Location",
    options: ["Lethbridge", "Oakville", "Vancouver"],
  },
  {
    category: "Skill",
    options: ["Casual", "Intermediate", "Advanced"],
  },
  {
    category: "Age",
    options: ["18-25", "25-30", "30-35", "35-40", "40+"],
  },
];

function Accordion({ setShowAccordion, showAccordion }) {
  const [openCategory, setOpenCategory] = useState(null);

  function toggleCategory(index) {
    if (openCategory === index) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
    }
  }

  return (
    <>
      <div className="container">
        <h1>Filter your opponents</h1>
        <div className="accordion__faq">
          <form>
            {categories.map((item, index) => (
              <div key={index}>
                <div
                  className="accordion__faq-heading"
                  onClick={() => toggleCategory(index)}
                >
                  <h3>{item.category}</h3>
                  <div>
                    {openCategory === index ? (
                      <span className="verticle">-</span>
                    ) : (
                      <span className="horizontal">+</span>
                    )}
                  </div>
                </div>
                <div className={openCategory === index ? "active" : "inactive"}>
                  {item.options.map((option, index) => (
                    <div key={option}>
                      <input
                        type="checkbox"
                        id={option}
                        name={option}
                        value={option}
                      ></input>
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </form>
          <button
            className="apply-button"
            onClick={() => setShowAccordion(!showAccordion)}
          >
            APPLY
          </button>
        </div>
      </div>
    </>
  );
}

export default Accordion;
