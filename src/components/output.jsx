import React from "react";
import '../stylesheets/output.css'

const Output = (props) =>{
    return(
    <div id="display" className="output">{props.children}</div>
    )
}

export default Output;