import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
    const clickRouter = () => {
        console.log('come in to recoil');
    };

    return (
        <>
            <h1>여기는 Main</h1>
            {/* <Link to="/">
                <button type="button" onClick={clickRouter}>
                    Main
                </button>
            </Link> */}
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}
            >
                <Link to="/todos">
                    <button type="button">
                        Typescript Todos
                    </button>
                </Link>
                <Link to="/recoil">
                    <button
                        type="button"
                        onClick={clickRouter}
                    >
                        React Recoil
                    </button>
                </Link>
                <Link to="/netflix">
                    <button type="button">Netflix</button>
                </Link>
            </div>
        </>
    );
};

export default Main;
