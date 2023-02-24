import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero mb-20  pb-28 ">
  <div className="hero-content flex-col lg:flex-row">
    <div className='relative w-1/2'>
    <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
    <img src={parts}  alt="" className="absolute right-5 top-3/4 w-3/5 border-8 rounded-lg shadow-2xl" />
    </div>
    <div className='w-1/2'>
        <p className='text-2xl font-bold text-orange-700'>About Us</p>
      <h1 className=" my-5 text-5xl font-bold">Our Lens makes <br />life look happier</h1>
      <p className="py-6">Sunglasses by photographers.Tens drench your world in rich,warm tones-no matter where you are.</p>
      <button className="btn btn-outline">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;