import React, { Component } from "react";

class SearchResults extends Component {
  render() {
    const results = this.props.results;

    return (
      <div className="search_results">
        <hr />
        <ul>
          {results.map(result => {
            return (
              <li key={result._id}>
                {result._source.plugins.av.clamav.result}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
