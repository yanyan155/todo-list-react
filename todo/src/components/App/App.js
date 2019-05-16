import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import AppFilterButtons from '../AppFilterButtons/AppFilterButtons';
import AppFilterSearch from '../AppFilterSearch/AppFilterSearch';
import AppList from '../AppList/AppList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        { important:false, label:"task 1", id:1},
        { important:true, label:"task 2", id:2},
        { important:false, label:"task 3", id:3}
      ]
    };
    this.deleteItem = (id) => {
      this.setState((state) =>{
        let filtered = state.todoData.filter(el => el.id !== id);
        return {  todoData: filtered}
      });
    }
  }
  render() {
    return (
      <div>
        <AppHeader />
        <div className="d-flex justify-content-between align-items-bottom mb-2">
          <AppFilterSearch />
          <AppFilterButtons />
        </div>
        <AppList 
          todoData={ this.state.todoData } 
          deleted={ this.deleteItem }
        />
      </div>
    );
  }
}

export default App;