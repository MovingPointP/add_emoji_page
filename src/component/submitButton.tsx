import { useRecoilState } from 'recoil';
import { acfileState, textState, errorState, tokenState } from '../atom/state';
import { scrollPos, transpose,  submitData } from '../method/method4Submit';

import { checkFileSize, checkEmptyName, checkArrayLength } from '../method/checkData'

export const SubmitButton = () => {

    const [acfile] = useRecoilState(acfileState)
    const [text] = useRecoilState(textState)
    const [, setError] = useRecoilState(errorState)
    const [token] = useRecoilState(tokenState)

    const checkSubmitData = () => {

        if (checkArrayLength(acfile, text)) {
            const res: any[] = []
            res.push(checkFileSize(acfile))
            res.push(checkEmptyName(text))

            const posArray: number[] = []
            const boolArray: boolean[] = []
            const errMesArray: any[] = []
            for (let i = 0; i < res.length; i++) {
                posArray.push(res[i].pos)
                boolArray.push(res[i].bool)
                errMesArray.push(res[i].mes)
            }

            if (boolArray.includes(false)) {
                scrollPos(posArray)
                setError(transpose(errMesArray))
            } else {
                setError(transpose(errMesArray))
                console.log(boolArray)
                submitData(acfile, text, token)
                    .then((res: any) => {
                        if (res.status === '200') {

                            console.log(res.json())
                        } else {
                            console.log('error')
                            console.log(res.json())
                        }
                    })
            }
        }
    }
    
    return (
        <div>
            {
                acfile.length > 0 ? <button onClick={checkSubmitData}>送信</button> : ''
            }
        </div>
    )
}