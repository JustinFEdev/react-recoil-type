/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from '../axios';
import './netflix.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movieData, setMovieData] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        console.log('click movie!');
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || '')
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                    console.log(urlParams);
                })
                .catch((err) => console.log(err));
        }
    };

    useEffect(() => {
        console.log('Netflix rendering');
        async function fetchData() {
            console.log('rendering inside');
            const req = await axios.get(fetchUrl);
            console.log('req');
            console.log(req);
            setMovieData(req.data.results);
            return req;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <>
            <div className="img-container">
                <h2>{title}</h2>
                <div className="img-wrapper">
                    {movieData.map((info) => (
                        <>
                            <img
                                key={info.id}
                                onClick={() => handleClick(info)}
                                // onKeyDown={() => handleClick(info)}
                                className={`img-layout ${isLargeRow && 'img-row-larger'}`}
                                src={`${baseUrl}${
                                    isLargeRow ? info.poster_path : info.backdrop_path
                                }`}
                                alt={`${info.name}`}
                            />
                        </>
                    ))}
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </>
    );
};

export default Row;
