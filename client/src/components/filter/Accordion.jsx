import React, { useState, useEffect } from "react";
import "./accordion.scss";

function Accordion({
  setShowAccordion,
  showAccordion,
  setSelectedOptions,
  selectedOptions,
  setIsGet,
  userSport,
}) {
  const [openCategory, setOpenCategory] = useState(null);

  // Categories and options for filter
  const categories = [
    {
      category: "Sport",
      options: userSport,
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
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      category: "Age",
      options: ["18-25", "25-30", "30-35", "35-40", "40+"],
    },
  ];

  function toggleCategory(index) {
    if (openCategory === index) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
    }
  }

  const handleSelectedOptions = (event) => {
    const { name, value, checked } = event.target;
    if (checked) {
      setSelectedOptions({
        ...selectedOptions,
        [name]: [...selectedOptions[name], value],
      });
    } else {
      setSelectedOptions({
        ...selectedOptions,
        [name]: selectedOptions[name].filter((item) => item !== value),
      });
    }
  };

  const handleApply = () => {
    setShowAccordion(!showAccordion);
    setIsGet(true);
  };

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
                        checked={
                          selectedOptions[item.category].includes(option)
                            ? true
                            : false
                        }
                        type="checkbox"
                        id={option}
                        name={item.category}
                        value={option}
                        onChange={handleSelectedOptions}
                      ></input>
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </form>
          <button className="apply-button" onClick={handleApply}>
            APPLY
          </button>
        </div>
      </div>
    </>
  );
}

export default Accordion;
