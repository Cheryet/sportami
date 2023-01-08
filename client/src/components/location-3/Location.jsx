import "./location.scss";
import { ArrowBackIos } from "@material-ui/icons";

function Location({ setCurrent }) {
  const handleContinue = () => {
    setCurrent("BirthGender");
  };

  const handleBack = () => {
    setCurrent("EmailName");
  };
  return (
    <div className="location">
      <ArrowBackIos onClick={handleBack} />
      <h4>My nearest location to play is</h4>
      <select required name="cities">
        <option value="" selected disabled>
          Select an option
        </option>
        <option value="one">City 1</option>
        <option value="two">City 2</option>
        <option value="three">City 3</option>
      </select>
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default Location;

/** Simple dropdown useState
 * import { useState } from 'react';

function Dropdown() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <select value={value} onChange={handleChange}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  );
}
 */
