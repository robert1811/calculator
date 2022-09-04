import React from "react";
import '../stylesheets/boton.css'

const Boton = (props) =>{

    return(
            <button className="button" id={props.num} onClick={()=> props.event(props.children)}>{props.children}</button>
    )
}

export default Boton