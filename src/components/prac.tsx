import React from 'react';
import '../App.css';
import { ISstate as Props } from '../App';

interface IProps {
    test: Props['test'];
}

const prac: React.FC<IProps> = ({ test }) => {
    const renderList = (): JSX.Element[] => {
        return test.map((personInfo) => {
            return (
                <>
                    <li className="List">
                        <div className="List-header">
                            <img
                                className="List-img"
                                src={personInfo.img}
                                alt=""
                            />
                            <h2>{personInfo.name}</h2>
                        </div>
                        <p>{personInfo.age} years old</p>
                        <p className="List-note">
                            {personInfo.note}
                        </p>
                    </li>
                </>
            );
        });
    };

    return (
        <>
            <header>
                Welcome to React + typeScript + Recoil
            </header>
            <ul>
                <div>{renderList()}</div>
            </ul>
        </>
    );
};
export default prac;
