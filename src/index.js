import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDLFRa0CP5q4cNZrfgy7Y0A7PeU_VL94Eo'



// Runs on localhost:8080
// Create a new component. This component should produce some HTML

const App = () => {
  return (
    <div>
        <SearchBar />
    </div>
    );
}

// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));