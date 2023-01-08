import "./app.scss";

import Home from "./pages/home/Home";
import Credentials from "./pages/register/credentials-1/Credentials";
import EmailName from "./pages/register/emailName-2/EmailName";
import Location from "./pages/register/location-3/Location";
import BirthGender from "./pages/register/birthGender-4/BirthGender";
import ProfilePhoto from "./pages/register/profilePhoto-5/ProfilePhoto";
import Bio from "./pages/register/bio-6/Bio";

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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
