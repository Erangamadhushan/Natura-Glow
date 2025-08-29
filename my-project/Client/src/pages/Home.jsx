import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/scrollReveal.js';
import { testimonials } from '../Components/data/home/testimonials.js';
import { mainImage, cosmeticsImage, cosmeticsDetails, popularItems, reviewImage, cosmeticsMainImage } from '../assets/assets.js'


// import home page component
import Hero from '../Components/ui/home/Hero.jsx';
import BestSelling from '../Components/ui/home/BestSelling.jsx';
import { NewLetter } from '../Components/ui/home/NewLatter.jsx';

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
            <Hero/>

            <BestSelling/>

            <div className='py-10 flex flex-col justify-center items-center gap-4 min-h-[50vh]'>
                <div>
                    <h2 className='text-center text-2xl md:text-5xl font-bold'>Our Products Are</h2>
                </div>
                <div className='flex flex-wrap flex-row justify-center items-center gap-5 my-10'>
                    {
                        cosmeticsDetails.map((item, index) => {
                            return (
                                <div key={index} style={cosmeticsStyles} className='flex flex-col p-4 m-5 justify-center items-center scroll-items-200 w-[200px]'>
                                    <img src={item.image} className='w-10 h-10 text-green-600' alt={item.name}/>
                                    <h2 className='text-lg font-semibold text-green-600 py-5'>{item.name}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='min-h-[55vh]'>
                <div className='grid grid-cols-1 md:grid-cols-2 py-5 min-h-[50vh]'>
                    <div className='p-5 md:p-5 my-10'>
                        <h2 className='text-2xl md:text-5xl font-semibold text-center text-green-600'>Your Beauty and Skin Success starts here</h2>
                        <p className='text-xl py-5 text-center'>Welcome to Natura Glow, where your journey to radiant skin and timeless beauty begins. We believe that beautiful skin isn't just about appearances—it's about confidence, self-care, and embracing your natural glow.</p>
                    </div>
                    <div className='p-5 md:p-5 my-10'>
                        <h2 className='text-2xl md:text-5xl font-semibold text-center text-green-600'>Our Promise to You</h2>
                        <p className='text-xl p-10 text-center'>At Natura Glow, we are committed to providing you with the highest quality skincare products that are not only effective but also safe for your skin and the environment. Our formulations are free from harmful chemicals, parabens, and artificial fragrances, ensuring that you can indulge in self-care without compromise.</p>
                    </div>
                </div>
                <div>
                    <a href='/about' className='flex justify-center items-center'>
                        <button className='border border-green-500 text-green-500 p-2 rounded-lg px-5 text-xl hover:text-white hover:bg-green-500 duration-300'>Learn More</button>
                    </a>
                </div>
            </div>

            <div className='py-2 my-10 flex flex-col justify-center items-center bg-green-100 min-h-[50vh]' >
                {/* Customer review section */}
                <div className="mt-10">
                    <h2 className='text-center text-2xl md:text-5xl font-bold text-green-500'>What Our Customers Say</h2>
                </div>
                <div className='flex flex-wrap flex-row justify-center items-center  gap-5 min-h-[70vh]'>
                    {
                        testimonials.map((item, index) => {
                            return (
                                <div key={index} style={cosmeticsStyles} className='flex flex-col p-4 m-5 rounded-lg justify-center items-center scroll-items-200 w-[300px]'>
                                    
                                    <div>
                                        <p className='text-center'>{item.description}</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <div>
                                            <img src={item.image} alt={item.name} className='w-[50px] h-[50px] object-cover rounded-full'/>
                                        </div>
                                        <div>
                                            <h2 className='text-lg font-semibold py-5'>{item.name}</h2>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-10 scroll-up'>
                    {/* <img src={cosmeticsImage} className='w-3/4' alt='main cosmetics images'/> */}
                </div>
                <div className='p-10 scroll-up'>
                    <h2 className='text-center text-2xl md:text-4xl lg:text-6xl font-semibold py-5'>Explore <span className='text-green-500'>Our Skin Care</span> Product</h2>
                    <p className='text-center text-lg p-10'>Embark on a skincare journey with Natura Glow's Explorer Collection. Crafted for the modern woman who refuses to compromise, this premium line combines cutting-edge skincare science with nature's most powerful ingredients. Each product in this collection is designed to work in harmony with your skin's natural processes, delivering visible results without harsh chemicals or artificial additives.</p>
                    <a href='/product' className='flex justify-center items-center'>
                        <button className='border border-green-500 text-green-500 p-2 rounded-lg px-5 text-xl hover:text-white hover:bg-green-500'>Shop Now</button>
                    </a>
                </div>
            </div>

            <NewLetter />
        </>
    )
  };
  
export default Home;