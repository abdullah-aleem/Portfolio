import React from 'react'
import Slider from 'react-slick'


function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cards = [
    { id: 1, content: 'Portfolio',img:"image",description:"" },
    { id: 2, content: 'Card 2p' },
    { id: 3, content: 'Card 3' },
    { id: 4, content: 'Card 4' },
    { id: 5, content: 'Card 5' },
  ];

  return (
    <div className='bg-gray-600 '>
      <div className="container mx-auto mt-8 ">
     
    </div>
    </div>
  )
}

export default Projects