import "./profilePhoto.scss";
import { ArrowBackIos } from "@material-ui/icons";
import { useState } from "react";

function ProfilePhoto() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="profile-photo">
      <ArrowBackIos />
      <form className="information">
        <h4>Add a profile photo</h4>
        {selectedImage && (
          <div className="photo">
            <img
              alt="not found"
              width={"200px"}
              height={"200px"}
              src={URL.createObjectURL(selectedImage)}
            />
          </div>
        )}
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </form>
      <button className="continue-button">Continue</button>
    </div>
  );
}

export default ProfilePhoto;
