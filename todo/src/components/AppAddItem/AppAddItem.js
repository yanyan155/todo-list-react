import React from 'react';

const AppAddItem = (props) => {
  
  let placeholder = 'type here to add item'
  return (
    <div className="form-inline addform">
      <input type="text" className="form-control mr-2" placeholder={placeholder} />
      <button type="button" className="btn btn-primary" onClick={props.addItem}>Add task</button>
    </div>
  )
};

export default AppAddItem;
