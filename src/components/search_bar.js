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
      <div className="search-bar">
        <input 
          value = { this.state.term }
          onChange={e => this.onInputChange(e.target.value)} /> 
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;