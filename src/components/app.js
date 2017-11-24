import React, {Component} from 'react';
import elasticsearch from "elasticsearch";
import SearchResults from './search_bar';
let client = new elasticsearch.Client({host: "localhost:9200", log: "trace"});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  handleChange(event) {
    const search_query = event.target.value;

    client.search({q: search_query}).then(function(body) {
      this.setState({results: body.hits.hits});
    }.bind(this), function(error) {
      console.trace(error.message);
    });
  }

  render() {
    return (
    <div className="container">
        <input type="text" onChange={this.handleChange} />
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}
