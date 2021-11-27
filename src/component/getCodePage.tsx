import msdata from '../mastdon.json'
import { tokenState, codeState } from '../atom/state';
import { getToken } from '../method/getToken'
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

export const GetCodePage = () => {

    const fqdn = msdata.fqdn
    const client_id = msdata.client_id
    const client_secret = msdata.client_secret
    const redirect_uri = msdata.redirect_uri
    const response_type = msdata.response_type
    const grant_type = msdata.grant_type

    const [code, setCode] = useRecoilState(codeState)
    const [token, setToken] = useRecoilState(tokenState)

    useEffect(() => {
        const param = window.location.search.substring(1)
        console.log(param)
        const params = param.split('&')
        for (let i = 0; i < params.length; i++) {
            const elem = params[i].split('=')
            if (elem[0] === 'code') {
                setCode(elem[1])
            }
        }

        if (code) {
            getToken(fqdn, grant_type, client_id, client_secret, redirect_uri, code)
                .then((data: any) => {
                    setToken(data.access_token)
                    console.log(data.access_token)
                })
        }
    }, [client_id, client_secret, code, fqdn, grant_type, redirect_uri, setCode,setToken])

    return (
        <div>
            <a href={fqdn + '/oauth/authorize?response_type=' + response_type + '&client_id=' + client_id + '&redirect_uri=' + redirect_uri}> click </a>
            <div>Code : {code}</div>
            <div>Token : {token}</div>
        </div>
    )
}