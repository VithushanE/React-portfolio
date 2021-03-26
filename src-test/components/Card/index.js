import React from "react"


function Card(props) {
return (

    <div>
        <h3>Title: {props.title}</h3> 
        <h4>Name: {props.name}</h4>
    </div>
);

}

export default Card; 
