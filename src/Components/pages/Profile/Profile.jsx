
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo  from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return(

        <>
            <ProfileInfo />
            <MyPosts postsData={props.data.postsData} />
        </>

    )

}
export default Profile;