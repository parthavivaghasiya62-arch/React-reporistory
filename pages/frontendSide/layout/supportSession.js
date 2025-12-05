import Head from 'next/head'
import React from 'react'

const SupportSession = () => {
    return (
        <div>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <div className="container mx-auto">
                <div className="support mb-20 py-20 border-t-2 border-gray-100">
                    <div className="flex flex-wrap">
                        <div className="w-full xsm:w-1/2 sm:w-1/3 md:w-1/4 mb-5 md:mb-0 text-center">
                            <div className="border rounded-full border-yellow-600 w-12 h-12 mx-auto">
                                <span className="flex items-center justify-center h-full"><i
                                    className="fa-solid fa-cart-shopping text-green-1"></i></span>
                            </div>
                            <h5 className="text-lg text-black font-medium mt-3">All India</h5>
                            <a href="#" className="text-base text-[#555555]">Shipping</a>
                        </div>
                        <div className="w-full xsm:w-1/2 sm:w-1/3 md:w-1/4 mb-5 md:mb-0 text-center">
                            <div className="border rounded-full border-yellow-600 w-12 h-12 mx-auto">
                                <span className="flex items-center justify-center h-full"><i
                                    className="fa-solid fa-phone text-green-1"></i></span>
                            </div>
                            <h5 className="text-lg text-black font-medium mt-3">Helpline</h5>
                            <a href="#" className="text-base text-[#555555]">+91 93138 47237</a>
                        </div>
                        <div className="w-full xsm:w-1/2 sm:w-1/3 md:w-1/4 mb-5 md:mb-0 text-center">
                            <div className="border rounded-full border-yellow-600 w-12 h-12 mx-auto">
                                <span className="flex items-center justify-center h-full"><i
                                    className="fa-solid fa-headset text-green-1"></i></span>
                            </div>
                            <h5 className="text-lg text-black font-medium mt-3">24x7 Extensive</h5>
                            <a href="#" className="text-base text-[#555555]">Customer Support</a>
                        </div>
                        <div className="w-full xsm:w-1/2 sm:w-1/3 md:w-1/4 mb-5 md:mb-0 text-center">
                            <div className="border rounded-full border-yellow-600 w-12 h-12 mx-auto">
                                <span className="flex items-center justify-center h-full"><i
                                    className="fa-solid fa-arrow-right-arrow-left text-green-1"></i></span>
                            </div>
                            <h5 className="text-lg text-black font-medium mt-3">Exchanges</h5>
                            <a href="#" className="text-base text-[#555555]">Easy Returns</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportSession