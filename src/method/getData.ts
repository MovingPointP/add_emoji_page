import msdata from '../mastdon.json'

export const getCode = () => {
    const param = window.location.search.substring(1)
    const params = param.split('&')
    for (let i = 0; i < params.length; i++) {
        const elem = params[i].split('=')
        if (elem[0] === 'code') {
            return elem[1]
        }
    }
}

export const getToken = async (code: string) => {

    const fqdn = msdata.fqdn
    const client_id = msdata.client_id
    const client_secret = msdata.client_secret
    const redirect_uri = msdata.redirect_uri
    const grant_type = msdata.grant_type

    const data = {
        grant_type, client_id, client_secret, redirect_uri, code
    }

    const response = await fetch(fqdn + '/oauth/token',  {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    
    return response.json()
}
