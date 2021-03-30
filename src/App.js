import React, { useState, useEffect } from "react";
import Sitebar from "./home/Navbar";
import Auth from "./auth/Auth";
import AppIndex from "./AppIndex/AppIndex";
import { BrowserRouter as Router } from "react-router-dom";
import MacroCreate from "./MacroIndex/MacroCreate";
import WeightIndex from "./WeightIndex/WeightIndex";
import RecipeIndex from "./RecipeAPI/RecipeIndex";
import { Route, Switch } from "react-router-dom";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);
  console.log(sessionToken);

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
    return (sessionToken === localStorage.getItem("token") ? 
      <AppIndex token={sessionToken} /> : <Auth updateToken={updateToken} />
    );
  };

  const showWeights = () => {
    return (sessionToken === localStorage.getItem("token") ? 
      <WeightIndex token={sessionToken} /> : <Auth updateToken={updateToken} />
    );
  };

  const showMacros = () => {
    return (sessionToken === localStorage.getItem("token") ? 
      <MacroCreate token={sessionToken} /> : <Auth updateToken={updateToken} />
    );
  };

  const showRecipes = () => {
    return (sessionToken === localStorage.getItem("token") ? 
      <RecipeIndex token={sessionToken} /> : <Auth updateToken={updateToken} />
    );
  };

  return (
    <div>
      <Router>
        <Sitebar token={sessionToken} clickLogout={clearToken} />
        {/* {protectedViews()} */}

        <Switch>
        <Route exact path="/">
            {showMacros()}
          </Route>
          <Route exact path="/macros">
            {showMacros()}
          </Route>
          <Route exact path="/recipes">
            {showRecipes()}
          </Route>
          <Route exact path="/weights">
            {showWeights()}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
