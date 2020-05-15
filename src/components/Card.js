import React from 'react'
import "./main.css"

function Card(props){

const dragStart = event => {

  const target = event.target;
  event.dataTransfer.setData('card_id',target.id);
  setTimeout(()=> {target.style.display = "none";}, 0);

}

const dragOver = event => {
  event.stopPropagation();
}
  return(
    <div id = {props.id} onDragStart={dragStart} onDragOver={dragOver} className={props.className} draggable={props.draggable}>
    {props.children}
    </div>
  )
}

export default Card;
