import React from "react";

import "./search-panel.css";

class SearchPanel extends React.Component {
  state = {
    term: "",
  };

  handleUpdateSearch = (e) => {
    const term = e.target.value.trim();
    this.setState({ term: term });
    this.props.onSearch(term);
  };

  render() {
    const { term } = this.state;
    return (
      <input
        className="form-control search-input"
        type="text"
        value={term}
        placeholder="Найти сотрудника"
        onChange={this.handleUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
