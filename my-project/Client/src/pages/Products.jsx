import {Link} from 'react-router-dom';
import products from '../Components/Products/allProducts'
import useScrollReveal from '../hooks/scrollReveal.js';
const Products = () => {
    useScrollReveal();
    // useScrollReveal is a custom hook that applies scroll reveal animations to the component
    // It is used to add scroll reveal animations to the component when it is rendered
    return (
        <div className="products">
            <h1 className='text-center text-2xl md:text-3xl lg:text-5xl py-10 text-green-500 font-bold'>Products</h1>
            <p className='text-center text-xl pb-3 font-semibold text-black'>List of products will be displayed here.</p>
            <div className='w-full flex flex-wrap justify-center items-center gap-1 gap-y-5 py-5'>
                {
                    products.map((product) => {
                        return (
                            <div className='w-[95%] relative mx-auto p-3 max-w-[330px] min-h-[450px] border border-green-500 rounded-xl scroll-up'>
                                <div className='overflow-hidden'>
                                    <img src={product.img} className='w-full h-auto object-cover rounded-md hover:scale-[1.05] duration-100' alt={product.title} />
                                </div>
                                <div className="product w-[95%] mx-auto p-3 max-w-[330px] py-10" key={product.id}>
                                    <h2 className='text-green-600 py-4 text-center text-[1.1em]'>{product.title}</h2>
                                    <p className='text-center pb-5'>{product.desc}</p>
                                    <p className=' py-3 pl-5 font-semibold text-lg'>Price: ${product.price}</p>
                                    <div className='absolute bottom-[20px] flex justify-center gap-10'>
                                        <button className='border border-green-500 px-3 rounded-md hover:bg-green-500 hover:text-white'>View Details</button>
                                        <Link to="/cartItem" className='bg-green-500 text-white px-4 py-2 rounded'>Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );

}

export default Products;