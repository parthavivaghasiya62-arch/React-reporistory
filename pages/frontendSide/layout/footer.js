import React from 'react'
import Image from 'next/image'
import logoImg from "../../assets/img/logo 1.png"
// import logoImg from "../assets/img/logo 1.png"

const Footer = () => {
    return (
        <div>
            <footer className="foooter bg-sazerac pt-20 ">
                <div className="container mx-auto">
                    <div className="flex pb-10 flex-wrap">
                        <div className="w-full md:w-1/3 xl:w-1/4 mb-4 md:mb-0">
                            <a href="#"><Image src={logoImg} className="h-20" alt='LogoImage' /></a>
                            <p className="text-lg color__grey font-light my-3 md:my-5">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry simply dummy text of the printing.</p>
                            <span className="space-x-5">
                                <i className="fa-brands fa-instagram text-yellow-600"></i>
                                <i className="fa-brands fa-facebook text-yellow-600"></i>
                                <i className="fa-brands fa-twitter text-yellow-600"></i>
                                <i className="fa-brands fa-youtube text-yellow-600"></i>
                            </span>
                        </div>
                        <div className="w-full md:w-2/3 xl:w-3/4 px-0 md:px-3">
                            <div className="flex flex-wrap">
                                <div className="sm:w-1/3 xsm:w-1/2 w-full">
                                    <h5 className="text-lg mb-3 lg:mb-5 mt-4 md:mt-0">Company</h5>
                                    <ul>
                                        <li className="py-1 lg:py-2 font-light text-[#555555]"><a href="#"> About Us</a>
                                        </li>
                                        <li className="py-1 lg:py-2 font-light text-[#555555]"><a href="#"> Shop</a></li>
                                        <li className="py-1 lg:py-2 font-light text-[#555555]"><a href="#">
                                            Deliveries</a></li>
                                        <li className="py-1 lg:py-2 font-light text-[#555555]"><a href="#"> Refund
                                            Requests</a></li>
                                        <li className="py-1 lg:py-2 font-light text-[#555555]"><a href="#"> Contact
                                            Us</a></li>
                                    </ul>
                                </div>
                                <div className="sm:w-1/3 xsm:w-1/2 w-full">
                                    <h5 className="text-lg mb-3 lg:mb-5 mt-4 md:mt-0">Help</h5>
                                    <ul>
                                        <li className="py-1 lg:py-2 font-light text-[#555555]"><a href="#"> Privacy
                                            Policy</a></li>
                                        <li className="py-1 lg:py-2 font-light text-[#555555]"><a href="#"> Shipping
                                            Details</a></li>
                                        <li className="py-1 lg:py-2 font-light text-[#555555]"><a href="#"> Terms and
                                            Conditions</a></li>
                                        <li className="py-1 lg:py-2 font-light text-[#555555]"><a href="#"> Refund
                                            Returnss</a></li>
                                        <li className="py-1 lg:py-2 font-light text-[#555555]"><a href="#"> FAQ &
                                            Help</a></li>
                                    </ul>
                                </div>
                                <div className="sm:w-1/3 xsm:w-1/2 w-full">
                                    <h5 className="text-lg mb-3 lg:mb-5 mt-4 md:mt-0">Address</h5>
                                    <div className="py-1 lg:py-2 font-light text-[#555555] flex">
                                        <p><i className="fa-solid fa-location-dot text-green-1 mr-2"></i></p>
                                        <p>110-111 Apple Square NR, Lajamni Chowk, Surat, Gujarat 394101</p>
                                    </div>
                                    <p className="py-1 lg:py-2 font-light text-[#555555] whitespace-nowrap"><i
                                        className="fa-solid fa-phone text-green-1 mr-2"></i> +91 93138 47237</p>
                                    <p className="py-1 lg:py-2 font-light text-[#555555] whitespace-nowrap"><i
                                        className="fa-regular fa-envelope text-green-1 mr-2"></i> info@nioaer.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--====== COPYRIGHT TEXT ======== --> */}
                    <div className="text-center text-[#555555] font-light border-t border-gray-300 py-4">
                        <p>Copyright © 2022, Nioaer – All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer