import React from 'react';
import './ListComponent.css';

const ListComponent = (props) => {

  const importantClass = props.important
              ? "font-weight-bold text-info"
              : "";
  const doneClass = props.done
              ? "done"
              : "";
  let resClass = `mr-auto todo-text ${importantClass} ${doneClass}`;
  return (
    <li className="list-group-item d-flex justify-content-end">
      <span className={resClass} onClick={ props.toogleDone } >
        {props.label}
      </span>
      <button type="button" className="btn btn-danger fa fa-trash-o mr-2" 
      onClick={props.deleteItem }>
      </button>
      <button type="button" className="btn btn-primary fa fa-exclamation" onClick={ props.toogleImportant }>
      </button>
    </li>
  )
}

export default ListComponent;