import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' } // create the state
  }

  render() {
    // always manipulate your state with this.setState
    // this.state.term = event.target.value = BAD!!!!!
    return (
      <div>
        <input 
          value = { this.state.term }
          onChange={e => this.setState({ term: e.target.value })} /> 
      </div>
    );
  }
}

export default SearchBar;