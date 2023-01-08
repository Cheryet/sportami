import "./app.scss";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
      </BrowserRouter>
    </>
  );
};

export default App;
