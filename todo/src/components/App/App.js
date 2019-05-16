import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import AppFilterButtons from '../AppFilterButtons/AppFilterButtons';
import AppAddItem from '../AppAddItem/AppAddItem';
import AppFilterSearch from '../AppFilterSearch/AppFilterSearch';
import AppList from '../AppList/AppList';

class App extends React.Component {
  constructor() {
    super();
    this.maxId = 100;
    this.state = {
      todoData: [
        { important:false, label:"task 1", id:1, done: false},
        { important:false, label:"task 2", id:2, done: false},
        { important:false, label:"task 3", id:3, done: false}
      ]
    };
    this.deleteItem = (id) => {
      this.setState((state) =>{
        let filtered = state.todoData.filter(el => el.id !== id);
        return {  todoData: filtered}
      });
    }
    this.addItem = () => {
      this.setState((state) =>{

        let text = document.querySelector(".addform input").value;
        document.querySelector(".addform input").value = "";

        let item = { important:false, label:text, id: this.maxId++, done: false};
        let addedState = [...state.todoData].concat(item);
        return {  todoData: addedState};
      });
    }
    this.toogleDone = (id) => {
      this.setState((state) =>{
        let index = state.todoData.findIndex(el => el.id === id);
        let elem = Object.assign({}, state.todoData[index]);
        elem.done = !elem.done;
        let addedState = [...state.todoData.slice( 0, index), 
                      elem, 
                      ...state.todoData.slice(index+1)]
        return {  todoData: addedState };
      });
    }
    this.toogleImportant = (id) => {
      this.setState((state) =>{
        let index = state.todoData.findIndex(el => el.id === id);
        let elem = Object.assign({}, state.todoData[index]);
        elem.important = !elem.important;
        let addedState = [...state.todoData.slice(0,index ), elem, ...state.todoData.slice(index+1)]
        return {  todoData: addedState };
      });
    }
  }
  render() {
    return (
      <div>
        <AppHeader />
        <div className="d-flex justify-content-between align-items-bottom mb-2">
          <AppFilterSearch />
          <AppAddItem 
            addItem={ this.addItem }
          />
          <AppFilterButtons />
        </div>
        <AppList 
          todoData={ this.state.todoData } 
          deleteItem={ this.deleteItem }
          toogleDone={ this.toogleDone }
          toogleImportant={ this.toogleImportant }
        />
      </div>
    );
  }
}

export default App;