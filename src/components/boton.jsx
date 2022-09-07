import React from "react";
import '../stylesheets/boton.css'

const Boton = (props) =>{
    
    return(
            <button disabled={props.disable} className={props.clase} id={props.num} 
            onClick={()=> props.event(props.children)}>{props.children}</button>
    )
}

export default Boton