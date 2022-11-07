import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../assets/images/about_us/person.jpg';
import image2 from '../../../assets/images/about_us/parts.jpg';

const AboutSection = () => {
    return (
        <div className='lg:flex justify-between relative my-36'>
            <div >
                <img className='w-8/12 h-96 object-cover object-left-top border-4 border-slate-300 rounded-lg' src={image1} alt="" />
                <img className='absolute top-52 left-52 w-60 h-60 object-cover border-4 border-slate-50 rounded-lg' src={image2} alt="" />
            </div>
            <div className='w-2/3 text-gray-700'>
                <h6 className='text-xl font-bold text-red-600'>About Us</h6>
                <h2 className='text-5xl font-bold my-3'>We are qualified & <br /> of experience in this <br /> field</h2>
                <p className='mt-6 w-4/5'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <p className='my-3 w-4/5'>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <Link className="btn border-red-600 bg-red-600 hover:border-red-600 mt-8">Get More Info</Link>
            </div>
        </div>
    );
};

export default AboutSection;