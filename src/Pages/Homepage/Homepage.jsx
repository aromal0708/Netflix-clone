import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { Navbar } from "../../Components/NavBar/Navbar";
import { Banner } from "../../Components/Banner/Banner";
import { Rowpost } from "../../Components/Rowpost/Rowpost"
import {
  action,
  comedy,
  originals,
  romance,
  trending,
} from "../../Components/Urls";

import { ScaleLoader } from "react-spinners";

const Homepage = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState();

  const isSmall = true;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading || err) {
    return (
      <div className="loadingScreen">
        <ScaleLoader className="loader" color="#f80101" />
      </div>
    )
  }

  return (

    <>
      <Navbar isSmall={isSmall} />
      <Banner setErr={setErr} />
      <Rowpost
        setErr={setErr}
        mediaType="tv"
        url={originals}
        title="Netflix Originals"
      />
      <Rowpost setErr={setErr} url={trending} title="Trending" />
      <Rowpost
        setErr={setErr}
        url={comedy}
        title="Comedy"
        isSmall={isSmall}
      />
      <Rowpost
        setErr={setErr}
        url={action}
        title="Action"
        isSmall={isSmall}
      />
      <Rowpost
        setErr={setErr}
        url={romance}
        title="Romance"
        isSmall={isSmall}
      />
    </>
  );
};

export default Homepage;