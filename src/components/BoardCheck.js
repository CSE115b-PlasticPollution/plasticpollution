import React from 'react'
import "./mainCheck.css"

function BoardCheck(props){

const drop = event => {

    event.preventDefault();
    const card_id = event.dataTransfer.getData('card_id');
    const card = document.getElementById(card_id);
    card.style.display = 'block';
    alert("Try again!! You can recycle cans, plastic bottles, old bananas, containers, metals, and even cardboard. Theres many things you can recycle, and it is easy!");
    event.target.appendChild(card);
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

export default BoardCheck;
