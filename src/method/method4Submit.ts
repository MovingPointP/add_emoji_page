const compare = (a: number, b: number) => {
    return a - b
}

export const scrollPos = (posArray: number[]) => {
    posArray.sort(compare)
    if (posArray[0] !== 999999) {
        window.scrollBy(0, posArray[0])
    }
}

export const transpose = (a: any[]) => a[0].map((_: any, c: any) => a.map(r => r[c]));