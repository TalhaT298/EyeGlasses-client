import React from 'react';

const Top = () => {
    return (
        <div>
            
            <div className='text-center py-6 '>
            <p className='text-4xl font-bold text-orange-200 ' data-aos="flip-left">Top sunglass brands are here</p>
            <p className='text-1xl font-semibold text-orange-100'>Grab Fast!</p>
            </div>
        <div>
            <div className="carousel w-full pb-8">
                <div id="slide1" className="carousel-item relative w-full">
                     <img src="https://i.ibb.co/h2QZZLt/Untitled-design-2.gif" className="w-full" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Top;