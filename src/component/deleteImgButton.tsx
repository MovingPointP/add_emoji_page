import { useRecoilState } from 'recoil';
import { acfileState, imgState, textState, errorState } from '../atom/state';

export const DeleteImgButton = (props: any) => {
    const [acfile, setAcfile] = useRecoilState(acfileState)
    const [img, setImg] = useRecoilState(imgState)
    const [text, setText] = useRecoilState(textState)
    const [error, setError] = useRecoilState(errorState)

    const deleteImg = (index: number) => {
        const newAcfile = [...acfile]
        newAcfile.splice(index, 1)
        setAcfile(newAcfile)
        
        const newImg = [...img]
        newImg.splice(index, 1)
        setImg(newImg)

        const newText = [...text]
        newText.splice(index, 1)
        setText(newText)

        const newError = [...error]
        newError.splice(index, 1)
        setError(newError)
    }

    return (
        <button type="button" onClick={() => deleteImg(props.index)}> 削除 </ button>
    )
}

