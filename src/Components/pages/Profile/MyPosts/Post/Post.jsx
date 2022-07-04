import style from './post.module.css';

const Post = (props) => {
    return (
        <div className={style.postItem}>
            <p>{props.text}</p>
        </div>
    )
}

export default Post;