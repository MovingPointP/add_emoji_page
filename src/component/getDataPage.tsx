import { ConfirmPage } from './confirmPage';
import { AddEmojiPage } from './addEmojiPage';
import { tokenState, codeState } from '../atom/state';
import { getToken, getCode } from '../method/getData'
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

export const GetDataPage = () => {

    const [code, setCode] = useRecoilState(codeState)
    const [token, setToken] = useRecoilState(tokenState)

    useEffect(() => {
        const res = getCode()
        if (res) setCode(res)

        if (code) {
            getToken(code)
                .then((data: any) => {
                    setToken(data.access_token)
                })
        }
    }, [ code, setCode, setToken])

    return (
        <div>
            {
                code && token ?
                    <AddEmojiPage />
                    :
                    <ConfirmPage />
            }
        </div>
    )
}