
import style from './messages.module.css';
import MessageUser from './MessageUser/MessageUser';
import MessageItem from './MessageItem/MessageItem';

const Messages = (props) => {

    return (

        <>
            <div className={style.messagesMain}>

                <div className={style.userItems}>
                    {props.data.usersData.map((item, index) =>
                        < MessageUser name={item.name} id={item.id} key={index} />
                    )}
                </div>
                <div className={style.messagesItems}>
                    {props.data.messagesData.map((item, index) =>
                        <MessageItem text={item.text} key={index} />
                    )}
                </div>         
            </div>
        </>

    )

}
export default Messages;