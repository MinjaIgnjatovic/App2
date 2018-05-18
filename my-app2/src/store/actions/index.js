export const FETCH_POSTS='FETCH_POSTS';
export const NEW_POST='NEW_POST';

export function fetchPosts(posts){
    
    return { //vraca akciju kao objekat
        type: FETCH_POSTS,
        payload: posts
    }
}

export function addPost(post) //akcija
{
    return{
        type:NEW_POST,
        payload:post
    }
}