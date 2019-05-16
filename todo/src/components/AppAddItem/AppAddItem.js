import React from 'react';

const AppAddItem = (props) => {
  let placeholder = 'type here to add item'
  /*
  let addItemSubmit = (event) => {
    let text = document.querySelector(".addform input").value;
    document.querySelector(".addform input").value = "";
    event.preventDefault();
  }
  */
  return (
    <div className="form-inline addform">
      <input type="text" className="form-control mr-2" placeholder={placeholder} />
      <button type="button" className="btn btn-primary" onClick={props.addItem}>Add task</button>
    </div>
  )
};

/* сделать событие при клике на кнопку */

export default AppAddItem;
