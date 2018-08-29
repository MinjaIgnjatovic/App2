export const FETCH_POSTS='FETCH_POSTS';
export const SET_COMMENTS='SET_POSTS'
export const NEW_POST='NEW_POST'
export const UPDATE_COMMENTS='COMMENTS/UPDATE'
export const FIND_BEER='PRONADJI'
export const SET_BEER="BEER/SET"
export const FETCH_BREWERIES='BREWERIES/FETCH'
export const FETCH_FAILED='BREWERIES/FETCH_FAILED'
export const SET_BREWERIES='BREWERIES/SET'
export const SELECT_BREWERY="SELECT_BREWERY"

export function fetchPosts(){    
    return {
        type: FETCH_POSTS
        
    }
}
export function setPosts(data){
    return{
        type:SET_COMMENTS,
        payload:data
    }
}

export function addPost(post){
    return{
        type:NEW_POST,
        payload:post
    }
}
export function updateComments(data){
    return{
        type:UPDATE_COMMENTS,
        payload:data
    }
}

export function findBeer(){
    return{
        type:FIND_BEER,
    }
}
export function setBeer(data){
    return{
        type:SET_BEER,
        payload:data
    }
}

export function fetchBreweries (){
    return{
        type:FETCH_BREWERIES,
       
    }
}
export function fetchFailed (){
    return{
        type:FETCH_FAILED,
        payload:false
    }
}

export function setBreweries (data){
    return{
        type:SET_BREWERIES,
        payload:data
    }
}

export function selectBrewery(brewery){
    return{
        type:SELECT_BREWERY,
        payload:brewery
    }
}

