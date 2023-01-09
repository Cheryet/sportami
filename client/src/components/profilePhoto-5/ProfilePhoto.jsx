import "./profilePhoto.scss";
import { ArrowBackIos } from "@material-ui/icons";
import React, { useState } from "react";

function ProfilePhoto({ setCurrent, profilePhoto, setProfilePhoto }) {
  const [selectedImage, setSelectedImage] = useState(
    profilePhoto["profile_pic"]
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleContinue = () => {
    setProfilePhoto({
      profile_pic: selectedImage,
    });
    setCurrent("Sports");
  };

  const handleBack = () => {
    setCurrent("BirthGender");
  };

  return (
    <div className="profile-photo">
      <ArrowBackIos onClick={handleBack} />
      <form className="information">
        <h4>Add a profile photo</h4>
        {selectedImage && (
          <div className="photo">
            <img
              alt="not found"
              width={"200px"}
              height={"200px"}
              src={selectedImage}
            />
          </div>
        )}
        <input type="file" name="myImage" onChange={handleFileChange} />
      </form>
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default ProfilePhoto;
