import React from 'react';
import BannerImg from '../../assets/bannerBok.png'

const Banner = () => {
    return (
        <div className='flex items-center gap-20 p-5 md:p-20 my-5 bg-gray-200 rounded-2xl'>
            <div>
                <h2 className='font-bold text-xl md:text-5xl'>Books to freshen up your bookshelf</h2>
                <button className="btn bg-[#23BE0A] rounded-xl text-white font-semibold mr-2 mt-5">View The List</button>
            </div>
            <div>
                <img className='w-[200px] md:w-[340px]' src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;