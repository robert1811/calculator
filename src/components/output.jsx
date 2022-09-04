import React from "react";
import '../stylesheets/output.css'

const Output = (props) =>{
    return(
    <div id="display" onChange={props.handle} className="output">{props.children}</div>
    )
}

export default Output;