import { FETCH_POSTS, NEW_POST } from "../actions";
	  
   /* const initialState = null;
  
 function componentDidMount(){
    fetch('https://localhost:3000/comments')
      .then(response => response.json())
      .then(json => {
        this.setState({ initialState: json });
      });
  }
  */
 
  export default function(state={},action)
{
  
    switch(action.type){
        case FETCH_POSTS:
            return action.payload;
        case NEW_POST:
        /* {
           const pos=action.payload;
           const obj={username: pos.username, email: pos.email, comment:pos.comment};
           state.push(obj);
           return state;

         }*/
         return action.payload;
        
    }
    return state;
   
}