
import cat from '../../../assets/images/cat.jpg';
import catBg from '../../../assets/images/catBg.jpg';
import style from './profileInfo.module.css';

const ProfileInfo = () => {

    return (

        <div className={style.ProfileInfoMain}>
            <div className={style.ProfileBg} style={{backgroundImage: `url(${catBg})`}}>
                <div className={style.profilePicContainer}>
                    <img src={cat} alt="cat" className={style.profilePic} />
                </div>
            </div>
            <div className={style.ProfileInfoContent}>
                <h2>Pisik Pisikyan</h2>
                <p><b>Date of Birth: </b> 14.04.1998</p>
                <p><b>Sex:</b> Male</p>
                <p><b>About Pisik: </b>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sit. Porro deserunt
                    nisi fugit eligendi autem mollitia quo quas ad cupiditate. Sed corporis hic ad atque
                    possimus dolorum tempora vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, sit. Porro deserunt nisi fugit eligendi autem mollitia quo quas ad cupiditate.
                    Sed corporis hic ad atque possimus dolorum tempora vitae! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Magnam, sit. Porro deserunt nisi fugit eligendi autem
                    mollitia quo quas ad cupiditate. Sed corporis hic ad atque possimus dolorum tempora vitae!
                </p>
            </div>
        </div>

    )
}

export default ProfileInfo;