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
        { important:false, label:"value 1", id:1, done: false},
        { important:false, label:"mark 2", id:2, done: false},
        { important:false, label:"score 3", id:3, done: false}
      ],
      searchString: '',
      searchButtonID: 'all-find'
    };

    this.deleteItem = (id) => {
      this.setState((state) =>{
        let filtered = state.todoData.filter(el => el.id !== id);
        return {  todoData: filtered}
      });
    };

    this.addItem = (text) => {
      this.setState((state) =>{
        let item = { important:false, label:text, id: this.maxId++, done: false};
        let addedState = [...state.todoData].concat(item);
        return {  todoData: addedState};
      });
    };

    this.toogleDone = (id) => {
      this.setState((state) =>{
        return this.toogleProperty(state.todoData, id, 'done');
      });
    };

    this.toogleImportant = (id) => {
      this.setState((state) =>{
        return this.toogleProperty(state.todoData, id, 'important');
      });
    }

    this.toogleProperty = (arr, id, property) => {

      let index = arr.findIndex(el => el.id === id);
      let elem = Object.assign({}, arr[index]);
      elem[property] = !elem[property];
      let addedState = [...arr.slice(0,index ), elem, ...arr.slice(index+1)]
      return {  todoData: addedState };
    }

    this.updateSearchString = (string = 'all-find') => {
      this.setState({'searchString': string});
    }
    this.updateSearchButton = (id = '') => {
      this.setState({'searchButtonID': id});
    }

    this.searchFilter = () => {
      let arr = this.state.todoData.filter(el => el.label.toLowerCase().match(this.state.searchString.toLowerCase()));

      if(this.state.searchButtonID === 'active-find') {
        arr = arr.filter(el => el.done);
      } else if(this.state.searchButtonID === 'done-find') {
        arr = arr.filter(el => !el.done);
      }
      return arr;
    }
  }

  render() {
    return (
      <div>
        <AppHeader 
          todoData={ this.state.todoData }
        />
        <div className="d-flex justify-content-between align-items-bottom mb-2">
          <AppFilterSearch 
            updateSearchString={ this.updateSearchString }
          />
          <AppAddItem 
            addItem={ this.addItem }
          />
          <AppFilterButtons 
            updateSearchButton={ this.updateSearchButton }
            searchButtonID={ this.state.searchButtonID }
          />
        </div>
        <AppList 
          todoData={ this.searchFilter() }
          deleteItem={ this.deleteItem }
          toogleDone={ this.toogleDone }
          toogleImportant={ this.toogleImportant }
        />
      </div>
    );
  }
}

export default App;
