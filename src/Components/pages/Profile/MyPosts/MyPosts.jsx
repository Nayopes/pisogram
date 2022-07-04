import React from 'react';
import style from './myPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postText = React.createRef();

    const addPost = (e) => {
        e.preventDefault()
        let text = postText.current.value;
        props.addPost(text)
        postText.current.value = '';
    }

    return (
        <>
            <form className={style.addPostForm}>
                <div>
                    <textarea ref={postText} type="text" placeholder="Create New Post" className={style.inputPost} autoFocus=" " ></textarea>
                </div>
                <div className={style.postBtnParent}>
                    <button className={style.postBtn} onClick={addPost} >Post Now</button>
                </div>
            </form>
            <div className={style.postsMain}>
                {props.postsData.map((item, index) =>
                    <Post 
                        text={item.text}
                        key={index}
                    />
                )}
            </div>
        </>
    )
}

export default MyPosts;