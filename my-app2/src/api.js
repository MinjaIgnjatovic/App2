export const fetchData= async () => {
    try{
        const response=await fetch ("http://localhost:3000/breweries");
        const data=await response.json();
        return data;
    }
    catch(e){
        console.log("NECE-",e);
    }
}
export const fetchComments= async () => {
    try{
        const response=await fetch ("http://localhost:3000/comments");
        const data=await response.json();
        return data;
    }
    catch(e){
        console.log("NECE-",e);
    }
}
export const fetchBeer= async () => {
    try{
        const procenat=document.getElementById("procenat").value;
        const boja=document.getElementById("boja").value;
        const ia=document.getElementById("ipaapa").value;
        const response=await fetch ("http://localhost:3000/beers?alcohol=" +procenat+"&color="+boja+"&ipa-apa="+ia);
        const data=await response.json()
        return data
    }
    catch(e){
        console.log("NECE-",e);
    }
}

export const addComment=async (payload)=> {
    try{
        console.log("Provera parametara",payload);
        const response= await fetch(`http://localhost:3000/comments/`, {
            method: 'POST',
            headers: {
                
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
           
            body: JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    catch(e){
        console.log("Greska pri dodavanju",e);
    }
}