import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CountState, CountTypeState, CountLabelState } from '../../atoms';

const Counter = () => {
    const [, setCount] = useRecoilState(CountState);
    const [, setCountType] = useRecoilState(CountTypeState);
    const countLabel = useRecoilValue(CountLabelState);

    return (
        <>
            <p>counter state: {countLabel}</p>
            <button
                type="button"
                onClick={() => {
                    setCountType('decrement');
                    setCount((prevState) => prevState - 1);
                }}
            >
                -
            </button>
            <button
                type="button"
                onClick={() => {
                    setCountType('increment');
                    setCount((prevState) => prevState + 1);
                }}
            >
                +
            </button>
        </>
    );
};

export default Counter;
