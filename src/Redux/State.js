
import {rerenderPage} from '../render';

let state = {
    profilePage: {
        postsData: [
            {
                id: 1,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sit. Porro deserunt nisi fugit eligendi autem mollitia quo.'
            },
            {
                id: 2,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sit. Porro deserunt nisi fugit eligendi autem mollitia quo quas ad cupiditate.'
            },
            {
                id: 3,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sit. Porro deserunt nisi fugit eligendi autem mollitia quo quas ad cupiditate.Porro deserunt nisi fugit eligendi autem mollitia quo quas ad cupiditate.'
            },
            {
                id: 4,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sit. Porro fugit eligendi autem mollitia quo quas ad cupiditate.'
            }
        ]
    },
    messagesPage: {
        messagesData: [
            {
                text: 'Hi :D'
            },
            {
                text: 'How are you?'
            },
            {
                text: 'Bye!'
            }
        ],  
        usersData: [
            {
                id: 1,
                name: "Johnny"
            },
            {
                id: 2,
                name: "David"
            },
            {
                id: 3,
                name: "Tom"
            },
            {
                id: 4,
                name: "Collin"
            }
        ],
    }

}

export let addPost = (postText) => {
    let newPost = {
        id: 1,
        text: postText
    };
    state.profilePage.postsData.push(newPost);
    rerenderPage(state);
}



export default state;