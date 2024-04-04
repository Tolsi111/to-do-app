import React, { useState } from 'react';
import './Card.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function Card(props) {
    const [isEditMode, setIsEditMode] = useState(props.inputForm);
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);

    function handleEdit() {
        setIsEditMode(true);
    }

    function handleDelete() {
        props.onDelete(props.id);
    }

    function handleConfirm() {
        setIsEditMode(false);
        props.onSave({
            id: props.id,
            title: title,
            text: text,
            date: new Date()
        });
    }

    return(
        <div className="card-wrapper">
            {!isEditMode && <h3 className='card-title'>{title}</h3>}
            {isEditMode && 
                <input name={'title'} className='card-title'
                        defaultValue={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                }
            {!isEditMode && <div className='card-text'>{text}</div>}
            {isEditMode && 
                <textarea name={'text'} className='card-text'
                        defaultValue={text}
                        onChange={(e) => setText(e.target.value)}/>
            }
            <div className='card-toolbox'>
                {!isEditMode && <div className='card-button-edit' onClick={handleEdit}><EditIcon/></div>}
                {isEditMode && <div className='card-button-confirm' onClick={handleConfirm}><CheckIcon/></div>}
                <div className='card-button-delete' onClick={handleDelete}><DeleteIcon/></div>
            </div>
        </div>
    )
}

export default Card;