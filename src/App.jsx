import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Success from "./Pages/Success/Success";
import Landing from "./Pages/Landing";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    localStorage.setItem("auth", String(auth));
  }, [auth]);

  return (
    <div>
      {JSON.parse(localStorage.getItem("auth")) ? (
        <Landing />
      ) : (
        <Routes>
          <Route
            path={auth ? "/login" : "*"}
            element={<Login setAuth={setAuth} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
