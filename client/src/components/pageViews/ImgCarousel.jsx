import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const ImgCarousel = (props) => {
  const items = () => {
    let images = [];
    for (let i = 1; i <= 3; i++) {
      let path = `img${i}`;
      if (props.src[path]) {
        images.push({
          src: props.src[path]
        })
      }
    }
    return images;
  }

  return (
    <UncontrolledCarousel items={items(props)} autoPlay={false} />
  );
}

export default ImgCarousel;