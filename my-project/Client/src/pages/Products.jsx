import {Link} from 'react-router-dom';
import products from '../Components/Products/allProducts'
const Products = () => {
    return (
        <div className="products">
            <h1 className='text-center text-2xl md:text-3xl lg:text-5xl py-10 text-pink-500 font-bold'>Products</h1>
            <p className='text-center text-xl pb-3 font-semibold text-black'>List of products will be displayed here.</p>
            <div className='w-full flex flex-wrap justify-center items-center gap-1 gap-y-5 py-5'>
                {
                    products.map((product) => {
                        return (
                            <div className='w-[95%] relative mx-auto p-3 max-w-[330px] min-h-[450px] border border-pink-500 rounded-xl'>
                                <div>
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="product w-[95%] mx-auto p-3 max-w-[330px] py-10" key={product.id}>
                                    <h2 className='text-pink-600 py-4 text-center text-[1.5em]'>{product.title}</h2>
                                    <p className='text-center pb-5'>{product.desc}</p>
                                    <p className=' py-3 pl-5 font-semibold text-lg'>Price: ${product.price}</p>
                                    <div className='absolute bottom-[20px] flex justify-center gap-10'>
                                        <button className='border border-pink-500 px-3 rounded-md hover:bg-pink-500 hover:text-white'>View Details</button>
                                        <Link to="/cartItem" className='bg-pink-500 text-white px-4 py-2 rounded'>Add to Cart</Link>
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