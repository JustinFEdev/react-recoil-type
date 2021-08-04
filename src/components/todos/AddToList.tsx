import React, { useState } from 'react';
import { ISstate as Props } from './Todos';

interface IProps {
    test: Props['test'];
    setTest: React.Dispatch<
        React.SetStateAction<Props['test']>
    >;
}

const AddToList: React.FC<IProps> = ({ test, setTest }) => {
    console.log('test');
    console.log(test);

    const [input, setInput] = useState({
        name: '',
        age: '',
        note: '',
        img: '',
    });
    console.log('input');
    console.log(input);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >,
    ): void => {
        console.log('get work!');
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        console.log(input);
    };

    const handleClick = (): void => {
        console.log('click');
        if (!input.name || !input.age || !input.img) return;

        setTest([
            ...test,
            {
                name: input.name,
                age: parseInt(input.age, 10),
                img: input.img,
                note: input.note,
            },
        ]);
        setInput({ name: '', age: '', note: '', img: '' });
    };

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-Input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="number"
                placeholder="Age"
                className="AddToList-Input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <input
                className="AddToList-Input"
                name="img"
                type="text"
                value={input.img}
                onChange={handleChange}
                placeholder="Image Url"
            />
            <textarea
                placeholder="Notes"
                className="AddToList-Input"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button
                type="button"
                className="AddTolist-List"
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    );
};

export default AddToList;
