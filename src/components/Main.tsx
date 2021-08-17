import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import justinImg from '../resource/images/Justin.jpg';
import recoilImg from '../resource/images/recoil_logo.png';
import netflixImg from '../resource/images/Netflix_Logo_RGB.png';
import tsImg from '../resource/images/TypeScript_logo.png';

const Main: React.FC = () => {
    const clickRouter = () => {
        console.log('come in to recoil');
    };
    const [infos, setInfos] = useState({});
    const imgData = [
        {
            img: recoilImg,
            name: 'recoil',
            route: '/recoil',
            btnName: 'Typescript Todos',
        },
        {
            img: justinImg,
            name: 'justin',
            route: '/netflix',
            btnName: 'React Recoil',
        },
        {
            img: tsImg,
            name: 'ts',
            route: '/todos',
            btnName: 'Netflix',
        },
    ];

    useEffect(() => {
        console.log('imgData');
        imgData.map((info) => {
            console.log(info);
            return setInfos(info);
        });
    }, []);

    return (
        <>
            <h1>여기는 Main</h1>
            {/* <Link to="/">
                <button type="button" onClick={clickRouter}>
                    Main
                </button>
            </Link> */}
            <div>
                <img style={{ width: 150 }} src={justinImg} alt="justin" />
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}
            >
                <div>
                    <img src={tsImg} style={{ width: 150 }} alt="justin" />
                    <Link to="/todos">
                        <button type="button">Typescript Todos</button>
                    </Link>
                </div>

                <div>
                    <img src={recoilImg} style={{ width: 150 }} alt="justin" />

                    <Link to="/recoil">
                        <button type="button" onClick={clickRouter}>
                            React Recoil
                        </button>
                    </Link>
                </div>
                <div>
                    <img src={netflixImg} style={{ width: 150 }} alt="justin" />

                    <Link to="/netflix">
                        <button type="button">Netflix</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Main;
