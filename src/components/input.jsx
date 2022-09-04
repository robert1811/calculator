import React from "react";
import '../stylesheets/input.css';

const Input = (props) =>{
    return(
    <div id="input" className="input">{props.children}</div>
    )
}

export default Input