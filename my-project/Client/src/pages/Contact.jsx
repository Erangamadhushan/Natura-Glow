import ContactForm from './ContactForm'
import useScrollReveal from '../hooks/scrollReveal.js';

function App() {
  useScrollReveal();
  // useScrollReveal is a custom hook that applies scroll reveal animations to the component
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='scroll-up'>
            <h1 className="text-5xl text-pink-500 font-bold text-center mb-6">Contact Us</h1>
            <p className="text-center text-xl mb-4">We'd love to hear from you!</p>
            <p className='text-center text-2xl md:text-5xl font-bold text-pink-500 mb-4 p-4'>If you have any questions, feedback, or inquiries, please fill out the form below.</p>
            <p className="text-center mb-4">Our team will get back to you as soon as possible.</p>
            <p className="text-center my-4 text-sm text-gray-500">© 2023 Natura Glow Company. All rights reserved.</p>
        </div>
        <div className='scroll-up'>
            <ContactForm />
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center py-5 my-10 gap-10'>
        <div className='w-[350px] mx-auto p-5 shadow-md scroll-up'>
            <h2 className='text-pink-500 text-xl'>Email/Phone Contact</h2>
            <h3 className='text-pink-500 text-md'>Get in Touch Directly:</h3>
            <p>Email: naturaglow@beautycosmetics.com</p>
            <p>Customer Service Phone: (555) 123 456 789</p>
            <p>Hours: Monday-Friday, 9AM-6PM EST</p>
        </div>
        <div className='w-[350px] mx-auto p-5 shadow-md scroll-up'>
            <h2 className='text-pink-500 text-xl'>Physical Address</h2>
            <h3 className='text-pink-500 text-md'>Main Office & Flagship Store:</h3>
            <p>Beauty Cosmetics, Inc.</p>
            <p>123 Glow Avenue, Suite 200</p>
            <p>Los Angeles, CA 90001</p>
            <p>United States</p>
        </div>
        <div className='w-[350px] mx-auto p-5 shadow-md scroll-up'>
            <h3 className='text-pink-500 text-md'>Production Facility:</h3>
            <p>(By appointment only)</p>
            <p>456 Radiance Blvd</p>
            <p>Los Angeles, CA 90012</p>
        </div>
        <div className='w-[350px] mx-auto p-5 shadow-md scroll-up'>
            <h2 className='text-pink-500 text-xl'>Business Hours</h2>
            <h3 className='text-pink-500 text-md'>Customer Service:</h3>
            <p>Monday-Friday: 9AM-6PM EST</p>
            <p>Saturday: 10AM-4PM EST</p>
            <p>Sunday: Closed</p>
        </div>
        <div className='w-[350px] mx-auto p-5 shadow-md scroll-up'>
            <h3 className='text-pink-500 text-md'>Retail Store Hours:</h3>
            <p>Monday-Saturday: 10AM-8PM PST</p>
            <p>Sunday: 12PM-6PM PST</p>
        </div>
        <div className='w-[350px] mx-auto p-5 shadow-md scroll-up'>
            <h3 className='text-pink-500 text-md'>Holiday Hours:</h3>
            <p>Our hours may vary during major holidays. Please check our social media for the most current information.</p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center items-center py-5 my-10 gap-10'>
        <div className='scroll-up'>
          <h2 className='text-pink-500 text-2xl md:text-[3em] font-bold py-3'>FAQ Section</h2>
          <p className='text-[2em] '>Shipping & Delivery</p>
          <div className='my-4'>
            <h4 className='text-pink-500 text-md py-3'>Q: How long will it take to receive my order?</h4>
            <p>A: Domestic orders typically arrive within 3-5 business days. International shipping can take 7-14 business days depending on your location.</p>
          </div>
          <div className='my-4'>
            <h4 className='text-pink-500 text-md py-3'>Q: Do you offer free shipping?</h4>
            <p>A: Yes, we offer free shipping on orders over $50.</p>
          </div>

          <p className='text-[2em] '>Products & Ingredients</p>
          <div className='my-4'>
            <h4 className='text-pink-500 text-md py-3'>Q: Are your products cruelty-free?</h4>
            <p>A: Absolutely! We're proudly certified cruelty-free and never test on animals.</p>
          </div>
          <div className='my-4'>
            <h4 className='text-pink-500 text-md py-3'>Q: Do your products contain parabens or sulfates?</h4>
            <p>A: No. All our formulations are paraben-free, sulfate-free, and made with clean ingredients.</p>
          </div>

          <p className='text-[2em] '>Orders & Payments</p>
          <div className='my-4'>
            <h4 className='text-pink-500 text-md py-3'>Q: Can I modify or cancel my order?</h4>
            <p>A: Please contact us within 2 hours of placing your order if you need to make changes.</p>
          </div>
          <div className='my-4'>
            <h4 className='text-pink-500 text-md py-3'>Q: What payment methods do you accept?</h4>
            <p>A: We accept all major credit cards, PayPal, Apple Pay, and Google Pay.</p>
          </div>
        </div>
      </div>

      <div className='w-[95%] mx-auto max-w-[1000px] p-5 shadow-md scroll-up'>
        <h2 className='text-pink-500 text-[1.75em] md:text-[2.5em] '> Return Policy </h2>
        <p className='text-[1.5em] md:text-[1.75em]'>Our Promise</p>
        <p>We want you to love your purchase! If you're not completely satisfied, we're happy to help.</p>
      </div>
      <div className='flex flex-wrap items-center py-5 my-10 scroll-up'>
        <div className='w-[500px] mx-auto p-5 shadow-md'>
          <h2 className='text-xl py-3'>Return Guidelines:</h2>
          <ul>
            <li>- Returns accepted within 30 days of purchase</li>
            <li>- Item must be unused, in original packaging</li>
            <li>- Proof of purchase required (order number or receipt)</li>
            <li>- Return shipping is the responsibility of the customer except for damaged items</li>
          </ul>
        </div>
        <div className='w-[500px] mx-auto p-5 shadow-md'>
          <h2 className='text-xl py-3'>How to Return:</h2>
          <ul>
            <li>- Email <a >returns@naturaglow.com</a> with your order number</li>
            <li>- Our team will send you a return authorization and instructions</li>
            <li>- Ship items back in protective packaging</li>
            <li>- Refunds are processed within 5-7 business days of receiving your return</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App