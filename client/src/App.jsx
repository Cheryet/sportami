import "./app.scss";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
import Register from "./pages/register/Register";
import ModeProvider from "./providers/ModeProvider";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={
            <ModeProvider>
              <Main />
            </ModeProvider>} />
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
