import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/scrollReveal.js';
//import style from '../App.css';
//import {anime} from 'animejs';
import { testimonials } from '../Components/Home/testimonials.js';
import { mainImage, cosmeticsImage, cosmeticsDetails, popularItems } from '../assets/assets.js'
// import { useEffect, useRef } from 'react';

const Home = () => {
    useScrollReveal();

    const cosmeticsStyles = {
        backgroundColor: 'white',
        minHeight:'200px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
    }
    
    return (
        <>
            <div className="grid ld:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 min-h-[70vh] " >
                <div className='flex justify-center items-center flex-col text-black scroll-left'>
                    <h1 className="text-4xl font-bold text-black p-5 ">Flat 20% Off</h1>
                    <h2 className=" text-3xl md:text-6xl text-center font-bold text-black p-5" >Discover Your Natural Radiance with Natura Glow</h2>
                    <p className='py-10 text-lg'>Premium cosmetics crafted with natural ingredients to enhance your beauty, not mask it.</p>
                    <Link to="/product" className="bg-pink-600 p-4 rounded-lg px-10 text-xl text-white">Shop Now</Link>
                </div>
                <div className="flex justify-center items-center h-screen" >
                    <div className="timeline-container" style={{backgroundImage:`url(${mainImage})`,backgroundPosition:'center',objectFit:'cover',backgroundRepeat:'no-repeat',width:'100%'}}>
                        <img src={mainImage} alt="Main Image" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div className='py-5 flex flex-col justify-center items-center min-h-[50vh]'>
                <div className='py-5'>
                    <h1 className=' text-2xl md:text-5xl font-bold text-black text-center'>Our <span className='text-pink-500'>Best</span> <span className='text-black xl:text-white'>Sellers</span></h1>
                    <p className='text-lg text-center '>Explore our top-rated produ<span className='text-white'></span><span className='text-black xl:text-white'>cts loved by our customers.</span></p>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-10'>
                    {
                        popularItems.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col justify-center items-center p-5 w-[350px] duration-300 hover:scale(1.5) scroll-up" style={cosmeticsStyles}>
                                    <img src={item.image} alt={item.name} className="w-[250px] h-[250px]"/>
                                    <p className='text-center py-3 text-xl font-bold'>{item.title}</p>
                                    <p className='text-center'>{item.desc}</p>
                                    <p className='p-5 text-left text-lg font-bold'>${item.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='my-10'>
                    <Link to="/product" className="bg-pink-600 p-4 rounded-lg px-10 text-xl text-white">View All Products</Link>
                </div>
            </div>
            <div className='py-10 flex flex-col justify-center items-center gap-4 min-h-[50vh]'>
                <div>
                    <h2 className='text-center text-2xl md:text-5xl font-bold'>Our Products Are</h2>
                </div>
                <div className='flex flex-wrap flex-row justify-center items-center gap-5 my-10'>
                    {
                        cosmeticsDetails.map((item, index) => {
                            return (
                                <div key={index} style={cosmeticsStyles} className='flex flex-col p-4 m-5 justify-center items-center scroll-items-200 w-[200px]'>
                                    <img src={item.image} className='w-10 h-10' alt={item.name}/>
                                    <h2 className='text-lg font-semibold py-5'>{item.name}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='min-h-[55vh]'>
                <div className='grid grid-cols-1 md:grid-cols-2 py-5 min-h-[50vh]'>
                    <div className='p-5'>
                        <h2 className='text-2xl md:text-5xl font-semibold text-center'>Your Beauty and Skin Success starts here</h2>
                        <p className='text-xl py-5 text-center'>Welcome to Natura Glow, where your journey to radiant skin and timeless beauty begins. We believe that beautiful skin isn't just about appearances—it's about confidence, self-care, and embracing your natural glow.</p>
                    </div>
                    <div>
                        <h2 className='text-2xl md:text-5xl font-semibold text-center'>Our Promise to You</h2>
                        <p className='text-xl p-10 text-center'>At Natura Glow, we are committed to providing you with the highest quality skincare products that are not only effective but also safe for your skin and the environment. Our formulations are free from harmful chemicals, parabens, and artificial fragrances, ensuring that you can indulge in self-care without compromise.</p>
                    </div>
                </div>
                <div>
                    <a href='/about' className='flex justify-center items-center'>
                        <button className='border border-pink-500 text-pink-500 p-2 rounded-lg px-5 text-xl hover:text-white hover:bg-pink-500'>Learn More</button>
                    </a>
                </div>
            </div>

            <div className='py-10 flex flex-col justify-center items-center gap-4 min-h-[50vh]'>
                {/* Customer review section */}
                <div>
                    <h2 className='text-center text-2xl md:text-5xl font-bold'>What Our Customers Say</h2>
                </div>
                <div className='flex flex-wrap flex-row justify-center items-center gap-5 my-10'>
                    {
                        testimonials.map((item, index) => {
                            return (
                                <div key={index} style={cosmeticsStyles} className='flex flex-col p-4 m-5 justify-center items-center scroll-items-200 w-[300px]'>
                                    <div>
                                        <h2 className='text-lg font-semibold py-5'>{item.name}</h2>
                                    </div>
                                    <div>
                                        <p className='text-center'>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-10 scroll-up'>
                    <img src={cosmeticsImage} className='w-full' alt='main cosmetics images'/>
                </div>
                <div className='p-10 scroll-up'>
                    <h2 className='text-center text-2xl md:text-4xl lg:text-6xl font-semibold py-5'>Explore <span className='text-pink-500'>Our Skin Care</span> Product</h2>
                    <p className='text-center text-lg p-10'>Embark on a skincare journey with Natura Glow's Explorer Collection. Crafted for the modern woman who refuses to compromise, this premium line combines cutting-edge skincare science with nature's most powerful ingredients. Each product in this collection is designed to work in harmony with your skin's natural processes, delivering visible results without harsh chemicals or artificial additives.</p>
                    <a href='/product' className='flex justify-center items-center'>
                        <button className='border border-pink-500 text-pink-500 p-2 rounded-lg px-5 text-xl hover:text-white hover:bg-pink-500'>Shop Now</button>
                    </a>
                </div>
            </div>

            <div>
                <div className="grid py-5">
                    <div className=" p-5" >
                        <h4 className=" text-3xl font-bold pl-5"><span className='text-pink-500'>Subscribe</span> to our newsletter</h4>
                        <p className=" text-xl pl-5"> Stay up-to-date with the latest news, trends, and product launches from Natura Glow. </p>
                    </div>
                    <div className="p-5" >
                        <div>
                            <form action="" onsubmit="newslatterSubscription" mathod="post" autocomplete="off" className="d-flex justify-content-center align-items-center">
                                <input type="email" className="w-[90%] p-4 ml-5 border border-pink-400" placeholder="Enter your email" aria-label="Recipient's username" required/>
                                <div>
                                    <button className=" m-5 p-5 px-10 bg-pink-500 rounded-md text-white" type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div> 
                <div>
                    <div className="flex justify-center items-center py-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-center">Follow Us on Social Media</h2>
                    </div>
                </div>
                <div className='social-media flex justify-center items-center gap-5 py-10'>
                    <a href="https://www.instagram.com/" className='bg-pink-800 p-2 px-4 text-white rounded hover:scale-[1.1] duration-300' target="_blank" rel="noopener noreferrer">Instagram Page</a>
                    <a href="https://www.facebook.com/" className='bg-blue-800 p-2 px-4 text-white rounded hover:scale-[1.1] duration-300' target="_blank" rel="noopener noreferrer">Facebook Page</a>
                    <a href="https://www.twitter.com/" className='bg-black p-2 px-4 text-white rounded hover:scale-[1.1] duration-300' target="_blank" rel="noopener noreferrer">X page</a>
                </div>
            </div>
        </>
    )
  };
  
export default Home;