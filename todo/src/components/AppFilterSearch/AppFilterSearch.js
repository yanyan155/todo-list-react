import React from 'react';
import './AppFilterSearch.css';

const AppFilterSearch = (props) => {

  const findString = (event) => {
    props.updateSearchString(event.target.value);
  }
  let placeholder = 'type here to search'
  return <input placeholder={placeholder} onChange={findString} />;
}

export default AppFilterSearch;