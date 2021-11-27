import { atom } from 'recoil';

export const keyState = atom<string>({
    key: 'stoneState',
    default: ''
});