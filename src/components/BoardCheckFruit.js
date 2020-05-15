import React from 'react'
import "./mainCheck.css"

function BoardCheckFruit(props){

const drop = event => {

    event.preventDefault();
    const card_id = event.dataTransfer.getData('card_id');
    const card = document.getElementById(card_id);
    card.style.display = 'block';
    event.target.appendChild(card);
    alert("good job!");
}


const dragOver = event => {
  event.preventDefault();
}

  return(
    <div id={props.id} onDrop={drop} onDragOver={dragOver} className = {props.className}>
      {props.children}
    </div>
  )
}

export default BoardCheckFruit;
