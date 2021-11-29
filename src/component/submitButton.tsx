import { useRecoilState } from 'recoil';
import { acfileState, textState, errorState } from '../atom/state';
import { scrollPos, transpose } from '../method/method4Submit';

const BIG_NUM: number = 9999

export const SubmitButton = () => {

    const [acfile] = useRecoilState(acfileState)
    const [text] = useRecoilState(textState)
    const [ , setError] = useRecoilState(errorState)

    const checkSubmitData = () => {
        const res: any[] = []
        res.push(checkFileSize())
        res.push(checkEmptyName())

        const posArray: number[] = []
        const errMesArray: any[] = []
        for (let i = 0; i < res.length; i++){
            posArray.push(res[i].pos)
            errMesArray.push(res[i].mes)
        }

        scrollPos(posArray)
        setError(transpose(errMesArray))
    }

    const checkFileSize = () => {
        let errorMes: any[] = []
        let position: number = BIG_NUM
        let flag = true

        for (let i = 0; i < acfile.length; i++){
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
            pos: position
        }
        return res
    }

    const checkEmptyName = () => {
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
            pos: position
        }
        return res
    }
    
    return (
        <div>
            {
                acfile.length > 0 ? <button onClick={checkSubmitData}>送信</button> : ''
            }
        </div>
    )
}