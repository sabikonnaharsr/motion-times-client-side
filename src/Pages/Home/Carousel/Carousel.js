import React from 'react';


const Carousel = () => {
    return (
    <div className='bg-slate-700'>
     <div className="carousel w-full mt-10 mb-8">
     <div id="slide1" className="carousel-item relative w-full">
     <img className='w-full' src= "https://occ-0-2568-38.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZCUt5x0533BRUcksK2zDqMhAaEVdFFMOGu0Leb6DzeGQKzZT-M9c1Fpy9MvHsCAfk_RSSWjeNWushLASxr-jL-kK_AP9yS5nT5V.jpg?r=52f" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src= "https://images2.vudu.com/background/5408-576a.jpg" className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.examples.com/wp-content/uploads/2019/04/wedding-facebook-cover.jpg?width=600" className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQ9n2D77UFlRlEKEvjg7FYxLQQd9i74UwsQ&usqp=CAU" className="w-full" alt=''/>
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