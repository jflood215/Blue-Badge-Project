import React, { useState, useEffect } from "react";
import { Navbar } from "reactstrap";
import Sitebar from "./home/Navbar";
import Auth from "./auth/Auth";
import AppIndex from "./AppIndex/AppIndex";
import { BrowserRouter as Router } from "react-router-dom";
import MacroCreate from "./MacroIndex/MacroCreate";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <AppIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div>
      <Router>
        <Sitebar token={sessionToken} clickLogout={clearToken} />
        {protectedViews()}
      </Router>
    </div>
  );
}

export default App;
