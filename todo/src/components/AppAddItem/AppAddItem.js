import React from 'react';

/*const AppAddItem = (props) => {
  let label = '';
  let submitFuction = (event) => {
    event.preventDefault();
    props.addItem();
    label = '';
  }
  let changeInput = (event) => {
    label = event.target.value;
    console.log(label);
  }
  let placeholder = 'type here to add item'
  return (
    <form className="form-inline addform" onSubmit={submitFuction}> 
      <input type="text" className="form-control mr-2" placeholder={placeholder} onChange={changeInput} value={label} />
      <button type="submit" className="btn btn-primary" >Add task</button>
    </form>
  )
};*/


/*let text = document.querySelector(".addform input").value;
document.querySelector(".addform input").value = "";*/

class AppAddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      label: ''
    };

    this.submitFuction = (event) => {
      event.preventDefault();
      this.props.addItem(this.state.label);
      this.setState(/*(state) =>{ 
        return {  label: ''};
      }
      }*/
      {'label': ''});
    };

    this.changeInput = (event) => {
      this.setState(/*(state) =>{
        return {  label: event.target.value};
      }*/
      {'label': event.target.value});
      
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
