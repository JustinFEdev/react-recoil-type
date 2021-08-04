import React, { useState, useEffect } from 'react';
import '../../App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';

const Netflix = () => {
    return (
        <>
            <div className="netflix-main">
                <Nav />

                {/* nav bar */}
                <Banner />
                {/* banner */}
                <Row
                    title="NETFLIX ORIGINALS"
                    fetchUrl={request.fetchNetflixOriginals}
                    isLargeRow
                />
                <Row title="Treding Now" fetchUrl={request.fetchTrending} />
                <Row title="TopRated" fetchUrl={request.fetchTopRated} />
                <Row title="ActionMovies" fetchUrl={request.fetchActionMovies} />
                <Row title="ComedtMovies" fetchUrl={request.fetchComedtMovies} />
                <Row title="HorrorMovies" fetchUrl={request.fetchHorrorMovies} />
            </div>
        </>
    );
};

export default Netflix;
