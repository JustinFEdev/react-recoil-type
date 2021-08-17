import React from 'react';
import { useRecoilValue } from 'recoil';
import Counter from './Counter';
import { CountLabelState } from '../../atoms';

const Recoil = () => {
    const countLabel = useRecoilValue(CountLabelState);
    return (
        <>
            <a href="/">
                <button type="button">뒤로가기</button>
            </a>
            <div>recoil counter state : {countLabel}</div>
            <Counter />
        </>
    );
};

export default Recoil;
