
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

const Header = () => {

    return(
        <>
            <header>
                <ul className={style.headerMain}>
                    <li>
                        <NavLink to='/' className={navItem => navItem.isActive ? style.activeLink : style.itemLink} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' className={navItem => navItem.isActive ? style.activeLink : style.itemLink} >Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/messages' className={navItem => navItem.isActive ? style.activeLink : style.itemLink} >Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={navItem => navItem.isActive ? style.activeLink : style.itemLink} >Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/settings' className={navItem => navItem.isActive ? style.activeLink : style.itemLink} >Settings</NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header;