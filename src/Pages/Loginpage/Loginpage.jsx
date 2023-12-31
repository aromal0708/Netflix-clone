import React, { useState } from "react";
import "./Loginpage.css";
import { Link } from "react-router-dom";
import { Auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navbar } from "../../Components/Navbar/Navbar";


const Loginpage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(Auth, email, password);
        } catch (error) {
            console.log(error.message);
        }
        navigate("/");
    };

    return (
        <>
            <div className="LoginParent">
                <Navbar loginPage />
                <div className="form">
                    <form action="">
                        <span className="Signin">Log In</span>
                        <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Email or Phone number"
                        />
                        <input
                            type="text"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="Password"
                        />
                        <button onClick={handleSignin} className="loginbutton">
                            Sign In
                        </button>
                        <span className="logintext">
                            New to Netflix?{" "}
                            <Link className="link" to="/signup">
                                Sign Up Now
                            </Link>
                        </span>
                        <span className="desclaimer">
                            Use the Email :"test@gmail.com" and Password:"test@12"
                        </span>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Loginpage;