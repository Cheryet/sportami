import "./location.scss";
import { ArrowBackIos } from "@material-ui/icons";

function Location() {
  return (
    <div className="location">
      <ArrowBackIos />
      <h4>My nearest location to play is</h4>
      <select required name="cities" id="cities">
        <option value="" selected disabled>
          Select an option
        </option>
        <option value="one">City 1</option>
        <option value="two">City 2</option>
        <option value="three">City 3</option>
      </select>
      <button className="continue-button">Continue</button>
    </div>
  );
}

export default Location;
