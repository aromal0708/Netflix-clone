import React, { useContext,useState,useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Loginpage from "./Pages/Loginpage/Loginpage";
import Register from "./Pages/Loginpage/Register"
import SingleMoviePage from "./Pages/SingleMoviePage/SingleMoviePage";
import { AuthContext } from "./Contexts/AuthContext";
import { ScaleLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return (
      <div className="loadingScreen">
        <ScaleLoader className="loader" color="#f80101" />
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={!currentUser ? <Loginpage /> : <Homepage />}
            />
            <Route path="signup" element={<Register />} />
            <Route path="login" element={<Loginpage />} />
            <Route path="/:media/:id" element={<SingleMoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
