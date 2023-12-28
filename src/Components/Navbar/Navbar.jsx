import React from "react";
import "./Navbar.css";
import { signOut } from "firebase/auth"
import { Auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ isSmall, loginPage }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        try {
            navigate("/login")
            window.location.reload();
            signOut(Auth)
        } catch (err) {
            console.log(err?.message)
        }
    }
    return (
        <div className="navbar">
            <img
                className={isSmall ? "smallLogo" : "logo"}
                onClick={()=>{navigate("/")}}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="NETFLIX"
            />
            {
                loginPage ?
                    null
                    :
                    <button onClick={handleClick} className={isSmall ? "smallLogOut" : "logOut"}>
                        Log Out
                    </button>

            }
        </div>
    );
}
