import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const ImgCarousel = (props) => {
  console.log(props.src.img1);
  const items = [
    {
      src: props.src.img1
    },
    {
      src: props.src.img2
    },
    {
      src: props.src.img3
    }
  ];

  return (
      <UncontrolledCarousel items={items} />
  );
}

export default ImgCarousel;