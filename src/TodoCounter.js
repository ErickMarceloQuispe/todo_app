import React from "react";
import "./TodoCounter.css";

function TodoCounter(props){
    return(
        <h2 className="TodoCounter">Has Completado {props.done} de {props.all} TODOs</h2>
    );
}

export {TodoCounter}