import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader/AppHeader';
import AppFilterButtons from './components/AppFilterButtons/AppFilterButtons';
import AppFilterSearch from './components/AppFilterSearch/AppFilterSearch';
import AppList from './components/AppList/AppList';

/*const App = () => {

  let todoData = [
    { important:false, label:"task 1", id:1},
    { important:true, label:"task 2", id:2},
    { important:false, label:"task 3", id:3}
  ]
  return (
    <div>
      <AppHeader />
      <div className="d-flex justify-content-between align-items-bottom mb-2">
        <AppFilterSearch />
        <AppFilterButtons />
      </div>
      <AppList 
        todoData={todoData} 
        deleted={(id) => {console.log(id)}}
      />
    </div>
  );
}*/

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

ReactDOM.render(<App />,
  document.querySelector('.container'));
