import React from "react";

const ResultListItem = ({ result, onResultSelect }) => {
  // const imageUrl = result.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onResultSelect(result)} className="list-group-item">
      <div className="result-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{result.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default ResultListItem;
