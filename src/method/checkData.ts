const BIG_NUM: number = 9999

export const checkFileSize = (acfile: any[]) => {
    let errorMes: any[] = []
    let position: number = BIG_NUM
    let flag = true

    for (let i = 0; i < acfile.length; i++) {
        if (acfile[i].size > 50 * 1024) {
            if (flag) {
                const target = document.getElementsByClassName("file_list_" + i)[0]
                const top = target.getBoundingClientRect().top
                position = position > top ? top : position
                flag = false
            }

            errorMes.push(['ファイルサイズを50KB以下にしてください'])
        } else {
            errorMes.push([''])
        }
    }
    const res = {
        mes: errorMes,
        pos: position,
        bool: flag
    }
    return res
}

export const checkEmptyName = (text: string[]) => {
    let errorMes: any[] = []
    let position: number = BIG_NUM
    let flag = true

    for (let i = 0; i < text.length; i++) {
        if (!text[i]) {
            if (flag) {
                const target = document.getElementsByClassName("file_list_" + i)[0]
                const top = target.getBoundingClientRect().top
                position = position > top ? top : position
                flag = false
            }
            errorMes.push(['画像名が空白です'])
        } else {
            errorMes.push([''])
        }
    }

    const res = {
        mes: errorMes,
        pos: position,
        bool: flag
    }
    return res
}

export const checkArrayLength = (acfile: any[], text: string[]) => {
    return acfile.length === text.length
}