import React from 'react';

class AppAddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      label: ''
    };

    this.submitFuction = (event) => {
      event.preventDefault();
      this.props.addItem(this.state.label);
      this.setState({'label': ''});
    };

    this.changeInput = (event) => {
      this.setState( {'label': event.target.value});
    };

    this.placeholder = 'type here to add item';
  }

  render() {
    return (
      <form className="form-inline addform" onSubmit={this.submitFuction}> 
        <input type="text" className="form-control mr-2" placeholder={this.placeholder} onChange={this.changeInput} value={this.state.label} />
        <button type="submit" className="btn btn-primary" >Add task</button>
      </form>
    );
  }
}

export default AppAddItem;
