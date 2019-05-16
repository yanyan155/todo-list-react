import React from 'react';
import './AppHeader.css';

const AppHeader = (props) => {
  let done = props.todoData.filter(el => el.done).length;
  let todo = props.todoData.filter(el => !el.done).length;
  return (
    <div className="d-flex flex-row justify-content-between align-items-bottom">
      <h1>Todo App</h1>
      <p className="mr-4">{todo} more to do, {done} done</p>
    </div>
  )
}

export default AppHeader;