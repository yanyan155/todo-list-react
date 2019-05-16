import React from 'react';
import './AppFilterButtons.css';

class AppFilterButtons extends React.Component {

  render() {
    return (
      <div className="btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-info">All</button>
        <button type="button" className="btn btn-white">Done</button>
        <button type="button" className="btn btn-white">Actual</button>
      </div>
    );
  }
}

/*const AppFilterButtons = () => {
  return (
    <div className="btn-group" role="group" aria-label="First group">
      <button type="button" className="btn btn-info">All</button>
      <button type="button" className="btn btn-white">Done</button>
      <button type="button" className="btn btn-white">Actual</button>
    </div>
  );
}*/

export default AppFilterButtons;