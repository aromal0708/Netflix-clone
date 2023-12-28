import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";

const imageUrl = import.meta.env.VITE_IMAGE_URL;

export const Rowpost = ({ url, title, isSmall, mediaType }) => {
    const [movies, setMovies] = useState([]);
    const { response } = useAxios({ url: url });

    const navigate = useNavigate();

    // OnClick Function Which navigates to Single Movie Page
    const handleClick = (id, poster_path) => {
        try {
            navigate(`/${mediaType ? mediaType : "movie"}/${id}`);
            window.location.reload();
        } catch (error) {
            console.log(error?.message);
        }
    };


    useEffect(() => {
        setMovies(response?.results);
    }, [response])

    return (
        <div className="row">
            <h2 className="title">{title}</h2>
            <div className="posters">
                {movies?.map((obj) => (
                    <img
                        key={obj.id}
                        onClick={() => handleClick(obj.id, obj.poster_path)}
                        className={isSmall ? "smallPoster" : "poster"}
                        alt="poster"
                        src={`${imageUrl + obj.poster_path}`}
                    />
                ))}
            </div>
        </div>
    );
};
