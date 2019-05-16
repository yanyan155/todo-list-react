import React from 'react';
import ListComponent from '../ListComponent/ListComponent';

const AppList = (props) => {
  let components = props.todoData.map(el => {
    return <ListComponent 
      label={el.label}
      important={el.important}
      key={el.id}
    />
  })
  return (
    <ul className="list-group">
      {components}
    </ul>
  );
}

export default AppList;