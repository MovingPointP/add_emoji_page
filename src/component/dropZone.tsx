import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRecoilState } from 'recoil';
import { acfileState, imgState, textState } from '../atom/state';

const style = {
    width: 250,
    height: 50,
    border: "1px dotted #888"
}

export const DropZone = () => {

    const accept = 'image/*'
    const noClick = true
    const [acfile, setAcfile] = useRecoilState(acfileState)
    const [img, setImg] = useRecoilState(imgState)
    const [text, setText] = useRecoilState(textState)

    const onDrop = useCallback((acceptedFiles) => {
        const newAcfile = [...acfile, ...acceptedFiles]
        setAcfile(newAcfile)

        const createObjectURL = (window.URL || window.webkitURL).createObjectURL
        const newImg = [...img]
        const newText = [...text]
        for (let i = 0; i < acceptedFiles.length; i++){
            newImg.push(createObjectURL(acceptedFiles[i]))
            newText.push('')
        }
        setImg(newImg)
        setText(newText)

    }, [acfile, img, text, setAcfile, setImg, setText])

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        accept, noClick, onDrop
    })

    return (
        <div>
            <div {...getRootProps()} style={style}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here</p>
                }
               
            </div>
            <button type="button" onClick={open}>Select files</button>
        </div>
    )
}