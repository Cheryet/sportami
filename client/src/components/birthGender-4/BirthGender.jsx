import "./birthGender.scss";
import { ArrowBackIos } from "@material-ui/icons";

function BirthGender() {
  return (
    <div className="birth-gender">
      <ArrowBackIos />
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
      <button className="continue-button">Continue</button>
    </div>
  );
}

export default BirthGender;
