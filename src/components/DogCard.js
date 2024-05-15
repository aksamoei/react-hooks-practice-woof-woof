import React from "react";


function DogCard({oneDog, setOneDog}){

    // console.log(oneDog.image);
    function handleTextChange(id){
        fetch(`http://localhost:3001/pups/${id}`,{
            method: "PATCH",
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({isGoodDog  : !oneDog.isGoodDog})
        })
        .then((re)=>re.json())
        .then((patchedData)=>setOneDog(patchedData))
        
    }

    return (
        <>
            <img src={oneDog.image} alt={oneDog.name} />
            <h2>{oneDog.name}</h2>
            <button onClick={()=>handleTextChange(oneDog.id)}>{oneDog.isGoodDog ? 'Good' : 'Bad'} Dog!</button>

        </>
    );
}


export default DogCard;