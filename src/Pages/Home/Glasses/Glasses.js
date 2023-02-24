import React, { useEffect, useState } from 'react';
import GlassCard from './GlassCard';

const Glasses = () => {
    const [glasses,setglasses]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data =>setglasses(data))
    },[])
    return (
        <div>
            <div className='text-center mb-6'>
                <p className='text-2xl font-bold text-orange-800 mb-6'>Glasses</p>
                <h2 className='text-5xl font-semibold mb-4'>Our Glasses</h2>
                <p>Give your eyes the stylish protection they deserve at affordable prices.Don't miss this opportunity.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    glasses.map(glass=><GlassCard
                        key={glass._id}
                        glass={glass}
                    >
                       
                    </GlassCard>)
                }
            </div>
        </div>
    );
};

export default Glasses;