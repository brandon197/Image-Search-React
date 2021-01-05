import React from "react";

const ImageList = (props) => {
  console.log(props.images);
  const imagList = props.images.map(({ description, id, urls }) => {
    return <img key={id} alt={description} src={urls.regular}></img>;
  });
  return <div>{imagList}</div>;
};

export default ImageList;
