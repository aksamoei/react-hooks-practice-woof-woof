import React from "react";

function DogoName({name, id, onNameClick}){
    return(
        <>
            <span onClick={()=>{return onNameClick(id)}}>{name}</span>
        </>
    )
}

export default DogoName;