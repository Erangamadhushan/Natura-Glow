import useScrollReveal from '../hooks/scrollReveal.js';
import React from 'react';

const About = () => {
  useScrollReveal();
    return (
      <>
        <div className="about-container max-w-[1000px] mx-auto flex flex-col py-10 scroll-up p-3">
            <h2 className=" text-[2.5em] md:text-[4.5em] text-center md:text-justify text-green-500 font-semibold">Welcome to Natura Glow ,</h2>
            <p className="py-5">At Natura Glow, we believe that true beauty starts with healthy, high-quality skincare. Our passion is to bring you cosmetic products that not only enhance your natural glow but also nourish and protect your skin. We carefully select and introduce only the best, safest ingredients to create cosmetics you can trust.</p>
            <p className="py-5">With a focus on wellness and quality, Natura Glow is your destination for clean, effective beauty solutions designed to make you look and feel radiant every day. Discover the glow that comes from nature-and from confidence.</p>
        </div>
        <div className="about-container max-w-[1000px] mx-auto flex flex-col py-10 scroll-up p-3">
            <h2 className="text-[2.5em]  font-bold">Natura Glow <span className="text-green-500">Brand Story</span></h2>
            <p className="py-5">Natura Glow was founded with a simple, powerful belief: everyone deserves healthy, high-quality cosmetics that nurture both skin and self-confidence. In a world where beauty products are often filled with harsh chemicals and empty promises, we set out to create a new standard—one where wellness, transparency, and real results come first.</p>
            <p className="py-5">Our journey began with a passion for clean beauty and a commitment to sourcing only the finest ingredients. Every product at Natura Glow is carefully formulated to be gentle, effective, and safe for all skin types. We believe that beauty should never come at the expense of your health, which is why we are dedicated to introducing and selling cosmetics that you can trust.</p>
            <p className="py-5">At Natura Glow, our focus is on more than just looking good—we want you to feel good about what you put on your skin. From nourishing serums to vibrant color cosmetics, each item is a reflection of our core values: quality, integrity, and care. Our promise is simple: healthy, radiant beauty for everyone.</p>
            <p className="py-5">Join us on our mission to redefine beauty standards and empower you to glow naturally, inside and out.</p>
        </div>
        <div className="about-container max-w-[1000px] grid grid-cols-1 md:grid-cols-2 mx-auto  py-10">
            <div className="p-5 border-l-2 border-r-2 border-green-500 scroll-up">
              <h2 className="text-[2.5em]  font-bold">Our <span className="text-green-500">Mission</span></h2>
              <p className="py-5">At Natura Glow, our mission is to empower individuals to embrace their natural beauty through high-quality, clean cosmetics. We are dedicated to providing products that not only enhance your appearance but also nourish and protect your skin.</p>
              <p className="py-5">We believe in the power of nature and the importance of wellness, which is why we carefully select and introduce only the best ingredients into our formulations. Our goal is to create a community where everyone can feel confident and radiant in their own skin.</p>
              <p className="py-5">We are committed to transparency, sustainability, and ethical practices in everything we do. From sourcing ingredients to packaging, we strive to minimize our impact on the environment while maximizing the benefits for our customers.</p>
            </div>
            <div className="p-5 border-l-2 border-r-2 border-green-500 scroll-up">
              <h2 className="text-[2.5em]  font-bold">Our <span className="text-green-500">Vision</span></h2>
              <p className="py-5">Our vision at Natura Glow is to be a leader in the clean beauty industry, setting new standards for quality, safety, and effectiveness. We envision a world where everyone has access to cosmetics that are not only beautiful but also beneficial for their skin and overall well-being.</p>
              <p className="py-5">We aim to inspire a movement towards healthier beauty choices, encouraging individuals to prioritize their skin health and embrace their unique beauty. By fostering a community of like-minded individuals, we hope to create a positive impact on the beauty industry and the world.</p>
              <p className="py-5">Through innovation, education, and a commitment to excellence, we strive to make clean beauty accessible and desirable for all. Our vision is to empower individuals to feel confident, radiant, and beautiful in their own skin, every day.</p>

            </div>
        </div>
      </>
    )
  };
  
  export default About;