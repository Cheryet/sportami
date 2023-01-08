import "./profilePhoto.scss";
import { ArrowBackIos } from "@material-ui/icons";
import { useState } from "react";

function ProfilePhoto({ setCurrent, profilePhoto, setProfilePhoto }) {
  const [selectedImage, setSelectedImage] = useState("");
  const [fileUrl, setFileUrl] = useState("");

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
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default ProfilePhoto;
