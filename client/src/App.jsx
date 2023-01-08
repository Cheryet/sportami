import "./app.scss";
import Home from "./pages/home/Home";
import Credentials from "./pages/register/credentials-1/Credentials";
import EmailName from "./pages/register/emailName-2/EmailName";
import Location from "./pages/register/location-3/Location";
import BirthGender from "./pages/register/birthGender-4/BirthGender";
import ProfilePhoto from "./pages/register/profilePhoto-5/ProfilePhoto";
import Bio from "./pages/register/bio-6/Bio";
import Opponents from "./pages/opponents/Opponents";

import userAppData from "./hooks/userAppData";

const App = () => {
  return <Opponents />;
};

export default App;
