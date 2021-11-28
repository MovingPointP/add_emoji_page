import { atom } from 'recoil';

export const tokenState = atom<string>({
    key: 'tokenState',
    default: ''
});

export const codeState = atom<string>({
    key: 'codeState',
    default: ''
});

export const imgState = atom<string[]>({
    key: 'imgState',
    default: []
})

export const acfileState = atom<any[]>({
    key: 'acfileState',
    default: []
})

export const textState = atom<string[]>({
    key: 'textState',
    default: []
})