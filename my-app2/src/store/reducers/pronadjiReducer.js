import { PRONADJI } from "../actions";

export default function (state={},action)
{

    switch(action.type){ 
        case PRONADJI:{

           /* const obj=action.payload;
            const procenat=obj.procenat;
            const boja=obj.boja;
            const ipaapa=obj.ipaapa;

            initialState.filter(data=> data.alcohol==procenat && data.color==boja )
            .then(res=>console.log(res));

         
            fetch("http://localhost:3000/beers?alcohol=" +procenat+"&color="+boja+"&ipa-apa="+ipaapa)
            .then(response=>{
                const res=response.json()
                .then(res=>{              
                       console.log(res);
                       return res;        
                })
            })   */ 
            console.log(action.payload[0].name);
            const obj={
                name: action.payload[0].name,
                company: action.payload[0].company,
                alcohol: action.payload[0].alcohol,
               // ipaapa:  action.payload[0].ipa-apa,
                color:  action.payload[0].color,

            }
            return obj;
        }
        default:
        return state;
    }
}

        

