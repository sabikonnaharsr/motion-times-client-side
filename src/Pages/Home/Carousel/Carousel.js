import React from 'react';


const Carousel = () => {
    return (
    <div>
     <div className="carousel w-full mt-10 mb-8">
     <div id="slide1" className="carousel-item relative w-full">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cvX-k6hb28JFiMwq7ZM5INrg2qIoINk9bQ&usqp=CAU" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
 );
};

export default Carousel;