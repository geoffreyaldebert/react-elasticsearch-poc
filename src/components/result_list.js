import React from "react";
import ResultListItem from "./result_list_item";

const ResultList = props => {
  const resultItems = props.results.map(result => {
    return (
      <ResultListItem
        onResultSelect={props.onResultSelect}
        key={result.etag}
        result={result}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {resultItems}
    </ul>
  );
};

export default ResultList;
