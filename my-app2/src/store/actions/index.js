export const FETCH_POSTS='FETCH_POSTS';
export const NEW_POST='NEW_POST';
export const PRONADJI='PRONADJI';

export function fetchPosts(posts){
    
    return {
        type: FETCH_POSTS,
        payload: posts
    }
}

export function addPost(post)
{
    return{
        type:NEW_POST,
        payload:post
    }
}

export function pronadji(izbor)
{
    return{
        type:PRONADJI,
        payload:izbor
    }
}