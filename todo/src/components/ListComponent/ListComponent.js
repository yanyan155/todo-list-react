import React from 'react';
import './ListComponent.css';

const ListComponent = (props) => {
  const style = props.important 
                ? {"color":"tomato"} 
                : {"color":"black"};
  return (
    <li className="list-group-item d-flex justify-content-end" style={style}>
      <div className="mr-auto">
        {props.label}
      </div>
      <button type="button" className="btn btn-danger fa fa-trash-o mr-2">
      </button>
      <button type="button" className="btn btn-primary fa fa-exclamation">
      </button>
    </li>
  )
}

export default ListComponent;