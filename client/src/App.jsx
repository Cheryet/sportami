import React from "react";
import "./app.scss";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
import Register from "./pages/register/Register";
import useToken from "./hooks/useToken";
import ModeProvider from "./providers/ModeProvider";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const { token, setToken } = useToken();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!token ? <Home setToken={setToken} /> : <Main />}
          />
          <Route
            path="/register"
            element={!token ? <Home setToken={setToken} /> : <Register />}
          />
          <Route
            path="/main"
            element={
              !token ? (
                <ModeProvider>
                  <Home setToken={setToken} />
                </ModeProvider>
              ) : (
                <ModeProvider>
                  <Main token={token} />
                </ModeProvider>
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
