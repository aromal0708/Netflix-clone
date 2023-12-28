import React, { useEffect, useState } from "react";
import "./SingleMoviePage.css";
import { useParams } from "react-router-dom";
import { trending } from "../../Components/Urls"
import { ScaleLoader } from "react-spinners";
import { Navbar } from "../../Components/NavBar/Navbar";
import {Rowpost} from "../../Components/Rowpost/Rowpost";
import { useAxios } from "../../hooks/useAxios";


const API_KEY = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMAGE_URL;

const SingleMoviePage = () => {
    const { media, id } = useParams();
    const [data, setData] = useState({});

    const url = `/${media}/${id}?api_key=${API_KEY}&language=en-US`;
    const { response } = useAxios({ url: url });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        setData(response);
    }, [id, media,response]);

    if (loading) {
        return (
            <div className="loadingScreen">
                <ScaleLoader className="loader" color="#f80101" />
            </div>
        )
    }

    return (
            <div className="parent">
                <Navbar isSmall />
                <div
                    style={{
                        background: `url(${imageUrl + data?.backdrop_path})`,
                    }}
                    className="top"
                >
                    <div className="topLeft">
                        <img
                            className="topLeftImage"
                            src={imageUrl + data?.poster_path}
                            alt=""
                        />
                    </div>
                    <div className="topRight">
                        <div className="details">
                            <h1 className="details_title">{data?.name ? data?.name : data?.title}</h1>
                        </div>
                        <div className="buttons">
                            <button
                                onClick={() => {
                                    alert("Oops..! cant Play");
                                }}
                                className="playButton"
                            >
                                Play
                            </button>
                            <button
                                onClick={() => alert("Yet to Come")}
                                className="watchlist"
                            >
                                Add to MyList
                            </button>
                        </div>
                        <span className="desc">{data?.overview}</span>
                    </div>
                </div>
                <div className="bottom">
                    <Rowpost title="Similar" url={trending} isSmall />
                </div>
            </div>
    );
};

export default SingleMoviePage;