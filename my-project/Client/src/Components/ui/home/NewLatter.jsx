import React from 'react'

export const NewLetter = () => {
  return (
    <div>
        <div className='my-20'>
            <div className="grid py-5 w-[95%] mx-auto max-w-[1000px] bg-gradient-to-l from-green-600 rounded-[1.25em] to-green-800">
                <div className=" p-5" >
                    <h4 className=" text-3xl font-bold pl-5 text-white"><span className='text-green-100'>Subscribe</span> to our newsletter</h4>
                    <p className=" text-xl pl-5 text-white"> Stay up-to-date with the latest news, trends, and product launches from Natura Glow. </p>
                </div>
                <div className="p-5" >
                    <div>
                        <form action="" onsubmit="newslatterSubscription" method="post" autocomplete="off" className="d-flex justify-content-center align-items-center">
                            <input type="email" className="w-[90%] p-4 ml-5 border border-green-400 rounded-2xl" placeholder="Enter your email" aria-label="Recipient's username" required/>
                            <div>
                                <button className=" m-5 p-5 px-10 border border-white rounded-3xl text-white hover:bg-green-300 hover:text-black duration-300" type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
