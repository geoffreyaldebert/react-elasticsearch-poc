import React from "react";

const ResultListItem = ({ result, onResultSelect }) => {
  const resource_id = result._source.resource_id;
  const dataset_id = result._source.dataset_id;
  const dataset_title = result._source.dataset_title;
  const title = result._source.title;
  const listHeaders = result._source.header.map(function(item){ return <span>{item} - </span>});

  console.log(listHeaders);
  return (
    <li onClick={() => onResultSelect(result)} className="list-group-item">
      <div className="result-list media">
        <div className="media-body">
          <div className="media-heading">
            <h5 className={"mt-0"}>{dataset_title} - {title}</h5>
            Dataset ID : {dataset_id}<br></br>
            Resource ID : {resource_id}<br></br>
            <br></br> 
            Headers :<br></br>{listHeaders}
            <br></br><br></br>
            <a href={"http://data.gouv.fr/datasets/" + dataset_id} target="_blank">http://data.gouv.fr/datasets/{dataset_id}</a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ResultListItem;
