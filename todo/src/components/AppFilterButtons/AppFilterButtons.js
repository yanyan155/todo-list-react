import React from 'react';
import './AppFilterButtons.css';

const AppFilterButtons = () => {
  let placeholder = 'type here to search'
  return (
      <div className="btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-info">All</button>
        <button type="button" className="btn btn-white">Done</button>
        <button type="button" className="btn btn-white">Actual</button>
      </div>
    );
}

export default AppFilterButtons;