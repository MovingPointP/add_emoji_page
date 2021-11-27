import { atom } from 'recoil';

export const tokenState = atom<string>({
    key: 'tokenState',
    default: ''
});

export const codeState = atom<string>({
    key: 'codeState',
    default: ''
});