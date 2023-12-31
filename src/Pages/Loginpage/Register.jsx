import React, { useState } from "react";
import "./Loginpage.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {Navbar} from "../../Components/Navbar/Navbar";

const Register = () => {
  const navigate = useNavigate();

  //   UseState Functions
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  //SignUp Function
  const handleSignUp = async (e) => {
    e.preventDefault();
    const res = await createUserWithEmailAndPassword(Auth, email, password);

    await updateProfile(res.user, {
      displayName: name,
      phone,
    });

    navigate("/");
  };

  return (
    <>
      <div className="LoginParent">
        <Navbar loginPage />
        <div className="form">
          <form action="">
            <span className="Signin">Sign Up</span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Full Name"
            />
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone Number"
            />
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <button onClick={handleSignUp} className="loginbutton">
              Sign Up
            </button>
            <span className="logintext">
              Already have An Account?{" "}
              <Link className="link" to="/login">
                Log In Now
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
