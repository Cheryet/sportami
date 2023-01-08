import "./app.scss";

import Home from "./pages/home/Home";
import Credentials from "./components/credentials-1/Credentials";
import EmailName from "./components/emailName-2/EmailName";
import Location from "./components/location-3/Location";
import BirthGender from "./components/birthGender-4/BirthGender";
import ProfilePhoto from "./components/profilePhoto-5/ProfilePhoto";
import Sports from "./components/sports-6/Sports";
import Bio from "./components/bio-7/Bio";

import userAppData from "./hooks/userAppData";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Credentials />,
  },
  {
    path: "/register/2",
    element: <EmailName />,
  },
  {
    path: "/register/3",
    element: <Location />,
  },
  {
    path: "/register/4",
    element: <BirthGender />,
  },
  {
    path: "/register/5",
    element: <ProfilePhoto />,
  },
  {
    path: "/register/6",
    element: <Sports />,
  },
  {
    path: "/register/7",
    element: <Bio />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
