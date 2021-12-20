import React from "react";

function TodoItem(props){
    return(
        <li>
            <span>{props.text}</span>
            <p>Estado: {props.completed?"Completado":"Pendiente"}</p>
            {/* <p>{props.completed.toString()}</p> */}
            {/* <span>{props.completed}</span> */}
        </li>
    );
}

export {TodoItem}