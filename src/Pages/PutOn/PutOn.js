import React from 'react';
import { FaAudible } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaWaveSquare } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";

const PutOn = () => {
    return (
        <div className='pt-10 shadow-2xl'>
            <div className='text-center py-6 '>
            <p className='text-4xl font-bold text-yellow-600 '>Put on Sunglasses,It's too Bright</p>
            <p className='text-1xl font-semibold text-yellow-600'>Time to get to work. Powered with a 5nm Octa-core processor, your Galaxy is built to handle heavy-duty multitasking. RAM Plus reads your usage patterns and provides extra virtual RAM for an additional boost.</p>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className="card w-96 bg-base-100 shadow-xl">
                 <div className="card-body">
                     <h2 className="card-title"><FaAudible size='3rem'/></h2>
                     <p className='text-2xl font-semibold'>1 Year Warranties</p>
                     <p>A written promise from our company to repair or replace</p>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
                 <div className="card-body">
                     <h2 className="card-title"><FaShippingFast size='3rem'/></h2>
                     <p className='text-2xl font-semibold'>Free Shipping</p>
                    <p>You don't need additional shipping charge during the checkout process</p>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
                 <div className="card-body">
                     <h2 className="card-title"><FaWaveSquare size='3rem'/></h2>
                     <p className='text-2xl font-semibold'>100% Quality Item</p>
                     <p>We are provide high-Quality products</p>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
                 <div className="card-body">
                     <h2 className="card-title"><FaRetweet size='3rem'/></h2>
                     <p className='text-2xl font-semibold'>30 Days Free-Return</p>
                     <p>you have the right to return it within 30 days and get all of your money back if it's faulty</p>
            </div>
        </div>
            </div>
        </div>
    );
};

export default PutOn;