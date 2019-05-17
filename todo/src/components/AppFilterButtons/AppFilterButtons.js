import React from 'react';
import './AppFilterButtons.css';

class AppFilterButtons extends React.Component {

  constructor() {
    super();
    this.spyClick = (event) => {
      if(event.target.tagName === 'BUTTON' 
         && !event.target.classList.contains('active')) {

        let id = event.target.id;
        this.props.updateSearchButton(id);
      }
    };
    this.setClasses = (id) => {

      if(id === this.props.searchButtonID) {
        return "btn btn-info active";
      } else {
        return "btn btn-white";
      }
    }
  }

  render() {
    return (
      <div className="btn-group filter-buttons" role="group" aria-label="First group" onClick={this.spyClick}>
        <button id="all-find" type="button" className={this.setClasses('all-find')} >All</button>
        <button id="active-find" type="button" className={this.setClasses('active-find')} >Done</button>
        <button id="done-find" type="button" className={this.setClasses('done-find')} >Actual</button>
      </div>
    );
  }
}

export default AppFilterButtons;