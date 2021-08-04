import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './netflix.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movieData, setMovieData] = useState([]);

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
                                className={`img-layout ${isLargeRow && 'img-row-larger'}`}
                                src={`${baseUrl}${isLargeRow ? info.poster_path : info.backdrop_path}`}
                                alt={`${info.name}`}
                            />
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Row;
