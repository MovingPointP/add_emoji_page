import msdata from '../mastdon.json'

const BIG_NUM: number = 9999

const compare = (a: number, b: number) => {
    return a - b
}

export const scrollPos = (posArray: number[]) => {
    posArray.sort(compare)
    if (posArray[0] !== BIG_NUM) {
        window.scrollBy(0, posArray[0])
    }
}

export const transpose = (a: any[]) => a[0].map((_: any, c: any) => a.map(r => r[c]));

export const submitData = async (acfile: any[], text: string[], token: string) => {

    const fqdn = msdata.fqdn
    const formData = new FormData() 

    for (let i = 0; i < acfile.length; i++){
        formData.append('shortcode', text[i])
        formData.append('image', acfile[i])
        formData.append('visible_in_picker', 'true')
    }

    const headers: {
        'Content-Type'?: string
        'Authorization': string
    } = {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
    }

    delete headers['Content-Type']

    const response = await fetch(fqdn + '/api/v1/custom_emojis', {
        method: 'POST',
        body: formData,
        headers: headers
    })

    return response
}