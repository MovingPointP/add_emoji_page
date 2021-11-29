import { useRecoilState } from 'recoil';
import { textState } from '../atom/state';

export const ChangeText = (props: any) => {

    const [text, setText] = useRecoilState(textState)

    const changeText = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = [...text]
        newText[index] = e.target.value
        setText(newText)
    }

    return (
        <div>
            <input value={text[props.index] || ''} onChange={(e) => changeText(props.index, e)} type="text" required spellCheck="false" />
        </div>
    )
}