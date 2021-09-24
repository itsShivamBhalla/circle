import React from "react";

const Video = (props) => {
  const image = {
    width: "343px",
    height: "150px",
    borderRadius: "8px",
  };
  const card = {
    margin: "16px",
  };
  const heading = {
    fontSize: "18px",
    color: "#343434",
    fontFamily: "Helvetica, Helvetica Neue",
    fontWeight: "medium",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  const description = {
    fontSize: "16px",
    color: "#85898D",
    fontFamily: "Helvetica, Helvetica Neue",
    margin: "7px 0 8px 0",
  };
  const views = {
    fontSize: "14px",
    color: "#CECECE",
    fontFamily: "Helvetica, Helvetica Neue",
  };

  return (
    <div style={card}>
      <img src="https://source.unsplash.com/death " alt="img" style={image} />
      <h1 style={heading}>Venom 2 Trailer </h1>
      <p style={description}>
      Let there be CARNAGE!!
      </p>
      <p style={views}>10M • 1 month ago</p>
    </div>
  );
};

export default Video;
