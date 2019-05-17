import React from 'react';
import ListComponent from '../ListComponent/ListComponent';

const AppList = (props) => {
  let components = props.todoData.map(el => {
    return <ListComponent
      label={el.label}
      important={el.important}
      done={el.done}
      key={el.id}
      deleteItem={() => props.deleteItem(el.id)}
      toogleDone={() => props.toogleDone(el.id)}
      toogleImportant={() => props.toogleImportant(el.id)}
    />
  })
  return (
    <ul className="list-group">
      {components}
    </ul>
  );
}

export default AppList;