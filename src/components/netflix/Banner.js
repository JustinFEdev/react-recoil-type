import React, { useEffect, useState } from 'react';
import axios from '../axios';
import request from './request';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(request.fetchNetflixOriginals);
            setMovie(
                req.data.results[Math.floor(Math.random() * req.data.results.length)],
            );
            return req;
        }
        fetchData();
    }, []);
    console.log(movie);
    // function truncate(str, n) {
    //     return str.length > n ? `${str.substr(0, n - 1)}...` : str;
    // }

    return (
        <header
            className="banner-container"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${baseUrl}/${movie?.backdrop_path})`,
                backgroundPosition: 'center center',
            }}
        >
            <div className="banner-contents">
                <div style={{ marginLeft: 30 }}>
                    <h1 className="banner-title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div>
                        <button className="banner_btn" type="button">
                            play
                        </button>
                        <button className="banner_btn" type="button">
                            my list
                        </button>
                    </div>
                    <h1 className="banner_description">{movie?.overview}</h1>
                </div>
                <div className="banner-fadebottom" />
            </div>
        </header>
    );
};

export default Banner;
