import React from "react";

const ResultDetail = ({ result }) => {
  if (!result) {
    return <div>Loading...</div>;
  }

  const playName = result._source.play_name;
  const speechNumber = result._source.speech_number;
  const lineNumber = result._source.line_number;
  const speaker = result._source.speaker;

  return (
    <div className="result-detail col-md-4">
      <div className="details">
        <div><b>Play Name: </b>{playName}</div>
        <div><b>Speech Number: </b>{speechNumber}</div>
        <div><b>Line Number: </b>{lineNumber}</div>
        <div><b>Speaker: </b>{speaker}</div>
      </div>
    </div>
  );
};

export default ResultDetail;
