import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>
              <img
                src="https://fontmeme.com/permalink/200628/b92d49e7175ccc482a7d6ce1783e714c.png"
                alt="pokémon-text"
                style={{ maxHeight: "40px" }}
              ></img>
            </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              style={{ fontWeight: 900, fontSize: "1.2rem" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
