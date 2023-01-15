import React from "react";
import "./app.scss";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
import Register from "./pages/register/Register";
import Accordion from "./components/filter/Accordion";
import About from "./pages/about/About";
import useToken from "./hooks/useToken";
import ModeProvider from "./providers/ModeProvider";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const { token, setToken } = useToken();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !token ? (
                <ModeProvider>
                  <Home setToken={setToken} />
                </ModeProvider>
              ) : (
                <Navigate to="/main" />
              )
            }
          />
          <Route
            path="/register"
            element={
              !token ? (
                <ModeProvider>
                  <Register setToken={setToken} />
                </ModeProvider>
              ) : (
                <Navigate to="/main" />
              )
            }
          />
          <Route
            path="/main"
            element={
              !token ? (
                <Navigate to="/" />
              ) : (
                <ModeProvider>
                  <Main token={token} />
                </ModeProvider>
              )
            }
          />
          <Route path="/filter" element={<Accordion />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
