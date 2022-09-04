import React from "react";
import '../stylesheets/input.css'

const Input = (props) =>{
    return(
    <div id={props.id} className="input">{props.children}</div>
    )
}

export default Input;