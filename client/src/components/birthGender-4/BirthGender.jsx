import "./birthGender.scss";
import { ArrowBackIos } from "@material-ui/icons";

function BirthGender({ setCurrent }) {
  const handleContinue = () => {
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
        <input className="age" type="age" placeholder="Enter Age" />
        <select required name="gender">
          <option value="" selected disabled>
            Select gender
          </option>
          <option value="one">Male</option>
          <option value="two">Female</option>
          <option value="three">Other</option>
        </select>
      </form>
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default BirthGender;
