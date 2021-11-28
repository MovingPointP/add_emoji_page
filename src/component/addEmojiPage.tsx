import { DropZone } from './dropZone';
import { useRecoilState } from 'recoil';
import { acfileState, imgState } from '../atom/state';
import { DeleteImgButton } from './deleteImgButton';
import { ChangeText } from './changeText';
import '../css/dropZone.css'

export const AddEmojiPage = () => {

    const [acfile] = useRecoilState(acfileState)
    const [img] = useRecoilState(imgState)
    
    const files = acfile.map((file, index) => (
            <li key={index}>
                
                <div>
                    <div className="imgdata">{file.name}</div>
                    <div className="imgdata">
                        {Math.floor(file.size / 1024 * 10) / 10} KB
                    </div>
                    {file.size > 50 * 1024 ? <div className="imgdata">ファイルサイズを50KB以下にしてください</div> : ''}
                </div>
                <ChangeText index={index} />
                <img src={img[index]} alt="" className="viewimg" />
                <DeleteImgButton index={index} />
            </li>
    ))

    return (
        <div>
            <DropZone />
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </div>
    )
}