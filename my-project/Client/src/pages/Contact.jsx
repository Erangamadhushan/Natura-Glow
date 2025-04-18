import ContactForm from './ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
            <h1 className="text-5xl text-pink-500 font-bold text-center mb-6">Contact Us</h1>
            <p className="text-center text-xl mb-4">We'd love to hear from you!</p>
            <p className='text-center text-2xl md:text-5xl font-bold text-pink-500 mb-4 p-4'>If you have any questions, feedback, or inquiries, please fill out the form below.</p>
            <p className="text-center mb-4">Our team will get back to you as soon as possible.</p>
            <p className="text-center mt-4 text-sm text-gray-500">© 2023 Your Company. All rights reserved.</p>
        </div>
        <div>
            <ContactForm />
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center py-5 my-10 gap-10'>
        <div className='w-[350px] mx-auto p-5 shadow-md'>
            <h2 className='text-pink-500 text-xl'>Email/Phone Contact</h2>
            <h3 className='text-pink-500 text-md'>Get in Touch Directly:</h3>
            <p>Email: hello@naturaglowbeautycosmetics.com</p>
            <p>Customer Service Phone: (555) 123 456 789</p>
            <p>Hours: Monday-Friday, 9AM-6PM EST</p>
        </div>
        <div className='w-[350px] mx-auto p-5 shadow-md'>
            <h2 className='text-pink-500 text-xl'>Physical Address</h2>
            <h3 className='text-pink-500 text-md'>Main Office & Flagship Store:</h3>
            <p>Beauty Cosmetics, Inc.</p>
            <p>123 Glow Avenue, Suite 200</p>
            <p>Los Angeles, CA 90001</p>
            <p>United States</p>
        </div>
        <div className='w-[350px] mx-auto p-5 shadow-md'>
            <h2 className='text-pink-500 text-xl'>Physical Address</h2>
            <h3 className='text-pink-500 text-md'>Main Office & Flagship Store:</h3>
            <p>Beauty Cosmetics, Inc.</p>
            <p>123 Glow Avenue, Suite 200</p>
            <p>Los Angeles, CA 90001</p>
            <p>United States</p>
        </div>
        <div className='w-[350px] mx-auto p-5 shadow-md'>
            <h3 className='text-pink-500 text-md'>Production Facility:</h3>
            <p>(By appointment only)</p>
            <p>456 Radiance Blvd</p>
            <p>Los Angeles, CA 90012</p>
        </div>
        <div className='w-[350px] mx-auto p-5 shadow-md'>
            <h2 className='text-pink-500 text-xl'>Business Hours</h2>
            <h3 className='text-pink-500 text-md'>Customer Service:</h3>
            <p>Monday-Friday: 9AM-6PM EST</p>
            <p>Saturday: 10AM-4PM EST</p>
            <p>Sunday: Closed</p>
        </div>
        <div className='w-[350px] mx-auto p-5 shadow-md'>
            <h3 className='text-pink-500 text-md'>Retail Store Hours:</h3>
            <p>Monday-Saturday: 10AM-8PM PST</p>
            <p>Sunday: 12PM-6PM PST</p>
        </div>
        <div className='w-[350px] mx-auto p-5 shadow-md'>
            <h3 className='text-pink-500 text-md'>Holiday Hours:</h3>
            <p>Our hours may vary during major holidays. Please check our social media for the most current information.</p>
        </div>
      </div>
    </div>
  )
}

export default App