import style from './MessageUser.module.css';
import { NavLink } from 'react-router-dom';

const MessageUser = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={style.userItem}>
            <NavLink className={navItem => navItem.isActive ? style.activeLink : style.itemLink} to={path}>{props.name}</NavLink>
        </div>
    )
}
export default MessageUser;