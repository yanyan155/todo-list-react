import React from 'react';
import './ListComponent.css';

class ListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    };
    this.spanClick = () => {
      this.setState((state) =>{
        return {  done: !state.done}
      });
    }
    this.importantClick = () => {
      this.setState((state) =>{
        return {  important: !state.important}
      });
    }
  }
  render() {
    let props = this.props;
    const importantClass = this.state.important
                ? "font-weight-bold text-info"
                : "";
    const doneClass = this.state.done
                ? "done"
                : "";
    let resClass = `mr-auto todo-text ${importantClass} ${doneClass}`;
    return (
      <li className="list-group-item d-flex justify-content-end">
        <span className={resClass} onClick={ this.spanClick } >
          {props.label}
        </span>
        <button type="button" className="btn btn-danger fa fa-trash-o mr-2" 
        onClick={this.props.deleted }>
        </button>
        <button type="button" className="btn btn-primary fa fa-exclamation" onClick={ this.importantClick }>
        </button>
      </li>
    )
  }
}

export default ListComponent;