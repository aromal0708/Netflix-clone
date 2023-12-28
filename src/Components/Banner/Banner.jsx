import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
import { useAxios } from "../../hooks/useAxios";

export const Banner = () => {
    const [bannerMovie, setBannerMovie] = useState();

    const API_KEY = import.meta.env.VITE_API_KEY;
    const imageUrl = import.meta.env.VITE_IMAGE_URL;
    
    const getRandomObject = (DATA) => {
        const randomObject = DATA[Math.floor(Math.random() * DATA.length)];
        return randomObject;
    };

    const apiUrl = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
    const { response, error } = useAxios({ url: apiUrl });

    const navigate = useNavigate();

    useEffect(() => {
        const DATA = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ];
        setBannerMovie(response?.results[getRandomObject(DATA)]);
    }, [response]);

    
    const handleClick = () => {
        navigate(`/${bannerMovie.media_type}/${bannerMovie.id}`);
    };

    if (error) {
        return (
            <div className="loadingScreen">
                <ScaleLoader className="loader" color="#f80101" />
            </div>
        )
    }
    return (
        <div
            style={{
                backgroundImage: `url(${bannerMovie ? imageUrl + bannerMovie.backdrop_path : ""
                    }`,
            }}
            className="Banner"
        >
            <div className="content">
                <h1 className="titles">
                    {bannerMovie ? bannerMovie.title || bannerMovie.name : ""}
                </h1>
                <div className="BannerButtons">
                    <button onClick={handleClick} className="button">
                        Play
                    </button>
                    <button className="button">My List</button>
                </div>

                <h1 className="Description">
                    {bannerMovie ? bannerMovie.overview : ""}
                </h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    );
};
