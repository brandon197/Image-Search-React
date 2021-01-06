import React from "react";
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  console.log(props.images);
  const imagList = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}></ImageCard>;
  });
  return <div className="image-list">{imagList}</div>;
};

export default ImageList;
