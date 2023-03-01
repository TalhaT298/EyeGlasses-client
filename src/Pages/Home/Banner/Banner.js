import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import './Banner.css'
import { FaShoppingCart } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className="carousel w-full py-12">
  <div id="slide1" className="carousel-item relative w-full">
    <div className='carousel-imgaege'>
        <img src={img1} alt='' className="w-full" />
    </div>
   
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
        {/* <h1 className='text-6xl font-bold text-white'>
            BE SAFE IN <br/>
            EVERY STYLE
        </h1> */}
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-1/2 ">
    <p className='text-5xl font-bold text-white'>
            BE SAFE IN
             <br/>
            
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Every', 'Style']}
            loop={10}
            cursor
            cursorStyle='🎉'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4 ">
    <Link to='shopmore'><button className="btn btn-outline text-orange-200" data-aos-duration="1000">Shop Sunglass<FaShoppingCart size='2rem'/></button></Link>
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
        {/* <h1 className='text-6xl font-bold text-white'>
            BE SAFE IN <br/>
            EVERY STYLE
        </h1> */}
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-1/2 ">
    <p className='text-5xl font-bold text-white'>
            BE SAFE IN
             <br/>
            
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Every', 'Style']}
            loop={10}
            cursor
            cursorStyle='🎉'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4 ">
    <Link to='shopmore'><button className="btn btn-outline text-orange-200" data-aos-duration="1000">Shop Sunglass<FaShoppingCart size='2rem'/></button></Link>
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
        {/* <h1 className='text-6xl font-bold text-white'>
            BE SAFE IN <br/>
            EVERY STYLE
        </h1> */}
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-1/2 ">
    <p className='text-5xl font-bold text-white'>
            BE SAFE IN
             <br/>
            
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Every', 'Style']}
            loop={10}
            cursor
            cursorStyle='🎉'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4 ">
    <Link to='shopmore'><button className="btn btn-outline text-orange-200" data-aos-duration="1000">Shop Sunglass<FaShoppingCart size='2rem'/></button></Link>
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
        {/* <h1 className='text-6xl font-bold text-white'>
            BE SAFE IN <br/>
            EVERY STYLE
        </h1> */}
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-1/2 ">
    <p className='text-5xl font-bold text-white'>
            BE SAFE IN
             <br/>
            
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Every', 'Style']}
            loop={10}
            cursor
            cursorStyle='🎉'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4 ">
    <Link to='shopmore'><button className="btn btn-outline text-orange-200" data-aos-duration="1000">Shop Sunglass<FaShoppingCart size='2rem'/></button></Link>
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