import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
const EyeglassCustomers = () => {
    return (
        <div className='py-6'>
            <div className='text-center py-6'>
            <p className='text-4xl font-bold text-yellow-600 '>EyeGlass Customers</p>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  
  <div className="card-body w-1/2 pr-8">
    <h1 className="card-title text-5xl">What Our Customer Says,</h1>
    <h1 className="card-title text-5xl">About Our Products</h1>
    <div className='pt-8'>
    <p><FaLocationArrow size='1rem'/>1.Good Service and a great product.(Anna Forcella)</p>
    <p>2.Customer Service has been amazing and great support.(Alison Astey)</p>
    <p>3.Quick responses.(Germaine Ramiah)</p>
    </div>
  </div>

  <div className='w-1/2 pl-12'>
  {/* <img src="https://i.ibb.co/Dk7dxD2/Screenshot-164.png" alt="Album"/> */}
  <div className="h-96 w-auto carousel carousel-vertical rounded-lg">
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/V9WsrK0/Untitled-design-57.png" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/kgRCzgh/Untitled-design-58.png" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/mX7Xqvk/Untitled-design-59.png" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/7gXGjyf/Untitled-design-60.png" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/6wdtQB2/Untitled-design-61.png" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/Tm66tQx/Untitled-design-62.png" />
  </div> 
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/6r9R0jM/Untitled-design-63.png" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/wpkKJpQ/Untitled-design-64.png" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/WcvHp7G/Untitled-design-65.png" />
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default EyeglassCustomers;