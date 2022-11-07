import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Carousel = () => {
    return (
        <>
            <div className="carousel w-full carousel-height rounded-lg ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full object-cover " alt='' />
                    <div className="text-gray-100 absolute left-24 top-1/4">
                        <h1 className='text-gray-100 text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='w-3/5 py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <Link className="btn border-red-600 bg-red-600 hover:border-red-600">Discover More</Link>
                            <Link className="btn btn-outline border-red-600 hover:bg-red-600 hover:border-red-600 text-gray-200 mx-3">Latest Project</Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle hover:bg-red-600 border-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                        <a href="#slide2" className="btn btn-circle mx-3 border-none hover:bg-red-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full object-cover" alt='' />
                    <div className="text-gray-100 absolute left-24 top-1/4">
                        <h1 className='text-gray-100 text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='w-3/5 py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <Link className="btn border-red-600 bg-red-600 hover:border-red-600">Discover More</Link>
                            <Link className="btn btn-outline border-red-600 hover:bg-red-600 hover:border-red-600 text-gray-200 mx-3">Latest Project</Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle hover:bg-red-600 border-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                        <a href="#slide3" className="btn btn-circle mx-3 border-none hover:bg-red-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full object-cover" alt='' />
                    <div className="text-gray-100 absolute left-24 top-1/4">
                        <h1 className='text-gray-100 text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='w-3/5 py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <Link className="btn border-red-600 bg-red-600 hover:border-red-600">Discover More</Link>
                            <Link className="btn btn-outline border-red-600 hover:bg-red-600 hover:border-red-600 text-gray-200 mx-3">Latest Project</Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle hover:bg-red-600 border-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                        <a href="#slide4" className="btn btn-circle mx-3 border-none hover:bg-red-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full object-cover" alt='' />
                    <div className="text-gray-100 absolute left-24 top-1/4">
                        <h1 className='text-gray-100 text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='w-3/5 py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <Link className="btn border-red-600 bg-red-600 hover:border-red-600">Discover More</Link>
                            <Link className="btn btn-outline border-red-600 hover:bg-red-600 hover:border-red-600 text-gray-200 mx-3">Latest Project</Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle hover:bg-red-600 border-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                        <a href="#slide5" className="btn btn-circle mx-3 border-none hover:bg-red-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full object-cover" alt='' />
                    <div className="text-gray-100 absolute left-24 top-1/4">
                        <h1 className='text-gray-100 text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='w-3/5 py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <Link className="btn border-red-600 bg-red-600 hover:border-red-600">Discover More</Link>
                            <Link className="btn btn-outline border-red-600 hover:bg-red-600 hover:border-red-600 text-gray-200 mx-3">Latest Project</Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle hover:bg-red-600 border-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                        <a href="#slide6" className="btn btn-circle mx-3 border-none hover:bg-red-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full object-cover" alt='' />
                    <div className="text-gray-100 absolute left-24 top-1/4">
                        <h1 className='text-gray-100 text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='w-3/5 py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <Link className="btn border-red-600 bg-red-600 hover:border-red-600">Discover More</Link>
                            <Link className="btn btn-outline border-red-600 hover:bg-red-600 hover:border-red-600 text-gray-200 mx-3">Latest Project</Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle hover:bg-red-600 border-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                        <a href="#slide1" className="btn btn-circle mx-3 border-none hover:bg-red-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;