import style from './MessageItem.module.css';

const MessageItem = (props) => {

    return (

        <div className={style.message}>
            - {props.text}
        </div>

    )
} 
export default MessageItem;