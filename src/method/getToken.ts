export const getToken = async (fqnd: string, grant_type: string, client_id: string, client_secret: string, redirect_uri: string, code: string) => {

    const data = {
        grant_type, client_id, client_secret, redirect_uri, code
    }

    const response = await fetch(fqnd + '/oauth/token',  {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    
    return response.json()
}