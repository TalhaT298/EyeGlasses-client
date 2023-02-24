import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full py-12">
  <div id="slide1" className="carousel-item relative w-full">
    <div className='carousel-imgaege'>
        <img src={img1} alt='' className="w-full" />
    </div>
   
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
        <h1 className='text-6xl font-bold text-white'>
            BE SAFE IN <br/>
            EVERY STYLE
        </h1>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-1/2 ">
        <p className='text-xl text-white'>Best Sunglasses is here <br/>@Dhaka,Bangladesh</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4 ">
    <button className="btn btn-outline">Shop Sunglass</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 pt-12">
      <a href="#slide4" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <div className='carousel-imgaege'>
        <img src={img2} alt='' className="w-full" />
    </div>
   
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
        <h1 className='text-6xl font-bold text-white'>
            Affordable <br/>
            Price for car <br/>
            Servicing
        </h1>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-1/2 ">
        <p className='text-xl text-white'> wwww</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4 ">
    <button className="btn btn-outline">Button</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 pt-12">
      <a href="#slide1" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <div className='carousel-imgaege'>
        <img src={img3} alt='' className="w-full" />
    </div>
   
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
        <h1 className='text-6xl font-bold text-white'>
            Affordable <br/>
            Price for car <br/>
            Servicing
        </h1>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-1/2 ">
        <p className='text-xl text-white'> wwww</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4 ">
    <button className="btn btn-outline">Button</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 pt-12">
      <a href="#slide2" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <div className='carousel-imgaege'>
        <img src={img4} alt='' className="w-full" />
    </div>
   
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
        <h1 className='text-6xl font-bold text-white'>
            Affordable <br/>
            Price for car <br/>
            Servicing
        </h1>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-1/2 ">
        <p className='text-xl text-white'> wwww</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4 ">
    <button className="btn btn-outline">Button</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 pt-12">
      <a href="#slide3" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;