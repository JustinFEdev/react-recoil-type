import { atom, selector } from 'recoil';

export const CountState = atom({
    key: 'CountState',
    default: 0,
});

export const CountTypeState = atom({
    key: 'CountTypeState',
    default: 'normal',
});

export const CountLabelState = selector({
    key: 'CountLabelState',
    get: ({ get }) => {
        const count = get(CountState);
        const countType = get(CountTypeState);
        switch (countType) {
            case 'increment':
                return `증가 => ${count}`;
            case 'decrement':
                return `감소 => ${count}`;
            default:
                return `${count}`;
        }
    },
});
