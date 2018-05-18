import { FETCH_POSTS, NEW_POST } from "../actions";


const initialState=[
    {
        username: "Ana",
        email:"email1@gmail.com",
        comment: "The service is great!" 
      },
       {
        username: "Maja",
        email:"email2@gmail.com",
        comment: "Great place!" 
      },
       {
        username: "Aleksa",
        email:"email3@gmail.com",
        comment: "It is awesome" 
      }
];
export default function(state=initialState,action)
{
    switch(action.type){
        case FETCH_POSTS:
            return action.payload;
        case NEW_POST:
        {
            var jsonstr=state;
            var obj=JSON.parse(jsonstr);
            obj[''].push(action.payload);
            jsonstr=JSON.stringify(obj);


        }
              
    }
    return state;
   
}