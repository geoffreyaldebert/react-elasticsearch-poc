import React from "react";
import ResultListItem from "./result_list_item";

const ResultList = props => {
  const resultItems = props.results.map((result, index) => {
    return (
      <ResultListItem
        onResultSelect={props.onResultSelect}
        key={index}
        result={result}
      />
    );
  });

  return <ul>{resultItems}</ul>;
};

export default ResultList;
