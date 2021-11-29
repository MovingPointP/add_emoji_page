import { DropZone } from './dropZone';
import { useRecoilState } from 'recoil';
import { acfileState, imgState, errorState } from '../atom/state';
import { DeleteImgButton } from './deleteImgButton';
import { ChangeText } from './changeText';
import '../css/dropZone.css'
import { SubmitButton } from './submitButton';
import classNames from 'classnames';

export const AddEmojiPage = () => {

    const [acfile] = useRecoilState(acfileState)
    const [img] = useRecoilState(imgState)
    const [error] = useRecoilState(errorState)
    
    const files = acfile.map((file, index) => (
       
        <li key={index} className={classNames(`file_list_${index}`, 'filelist')}>
            <div>
                <div className="imgdata">{file.name}</div>
                <div className="imgdata">
                    {Math.floor(file.size / 1024 * 10) / 10} KB
                </div>
            </div>
            <ul>
                {
                    error[index] ? error[index].map((mes: any, index: number) => (
                        <li key={index}>
                            {mes}
                        </li>
                    )) : ''
                }
            </ul >
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
            <SubmitButton />
        </div>
    )
}