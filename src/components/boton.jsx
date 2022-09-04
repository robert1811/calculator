import React from "react";
import '../stylesheets/boton.css'

const Boton = (props) =>{

    return(
            <button className="button" id={props.num} onKeyDown={()=> props.event(props.children)} onClick={()=> props.event(props.children)}>{props.children}</button>
    )
}

export default Boton