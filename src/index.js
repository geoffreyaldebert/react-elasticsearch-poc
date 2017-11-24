import _ from "lodash";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import elasticsearch from "elasticsearch";
import SearchBar from "./components/search_bar";

let client = new elasticsearch.Client({host: "localhost:9200", log: "trace"});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      selectedResult: null
    };

    this.eSearch("shake");
  }

  eSearch(term) {
    client.search({q: term}).then(function(body) {
      this.setState({results: body.hits.hits});
    }.bind(this), function(error) {
      console.trace(error.message);
    });
  }

  render() {
    const eSearch = _.debounce(term => {
      this.eSearch(term);
    }, 300);

    return (<div>
      <SearchBar onSearchTermChange={eSearch}/>
      <ResultList onResultSelect={selectedResult => this.setState({selectedResult})} results={this.state.results}/>
    </div>);
  }
}

ReactDOM.render(<App/>, document.querySelector(".container"));
