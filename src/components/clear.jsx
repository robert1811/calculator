import React from "react";
import '../stylesheets/clear.css'

const ClearBtn = (props) =>{
    return(
        <button id={props.id} className="clear" onClick={props.event}>AC</button>
    )
}

export default ClearBtn