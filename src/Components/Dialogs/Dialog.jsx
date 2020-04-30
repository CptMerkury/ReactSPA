import React from "react";
import s from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Max'},
        {id: 4, name: 'Vova'},
        {id: 5, name: 'Andrew'},
        {id: 6, name: 'Vika'},
        {id: 7, name: 'Max'},
        {id: 8, name: 'Vova'},
        {id: 9, name: 'Andrew'},
        {id: 10, name: 'Vika'},
        {id: 11, name: 'Max'},
        {id: 12, name: 'Vova'},
        {id: 13, name: 'Andrew'},
        {id: 14, name: 'Vika'},
        {id: 15, name: 'Max'},
        {id: 16, name: 'Vova'},
        {id: 17, name: 'Andrew'},
        {id: 18, name: 'Vika'},
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What`s Up'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Hi'},
        {id: 7, message: 'What`s Up'},
        {id: 8, message: 'How are you'},
        {id: 9, message: 'Hello'},
        {id: 10, message: 'Yo'},
        {id: 11, message: 'Hi'},
        {id: 12, message: 'What`s Up'},
        {id: 13, message: 'How are you'},
        {id: 14, message: 'Hello'},
        {id: 15, message: 'Yo'},
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
};

export default Dialogs