import { PRONADJI } from "../actions";


export default function (state=null,action)
{
    switch(action.type){ 
        case PRONADJI:{
            const obj=action.payload;
            const procenat=obj.procenat;
            const boja=obj.boja;
            const ipaapa=obj.ipaapa;
            fetch("http://localhost:3000/beers?procenat='procenat'&boja='boja'&ipaapa='ipaapa'")
            .then(response => response.json())
            .then(json => {
              return json;
            });


            //state=initialState;
           // const ime=action.payload;
           // const obj=Object.assign({},state.filter(car=>car.name.includes(ime) || car.model.includes(ime)));
            //return Object.assign([],obj);
         // return action.payload;
        }
        default:
          return state;
    }
    
}