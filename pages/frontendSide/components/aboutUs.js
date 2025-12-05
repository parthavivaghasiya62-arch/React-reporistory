import React from 'react'
import Image from 'next/image'
import aboutImg from "../../assets/img/about.png"
import charcoalImg from "../../assets/img/charcoal 1 (Traced).png"

const AboutUs = () => {

    return (
        <div>
            <section className="about_us bg-neutral-50 py-14 lg:py-28 ">
                <div className="container mx-auto">
                    <div className="flex items-center flex-wrap">
                        <div className="2xl:w-2/5 md:w-1/2 w-full relative">
                            <div className="main_img ">
                                <Image src={aboutImg} alt='about'
                                    className="w-full xl:max-w-md md:max-w-xs max-w-full max-h-96 rounded-2xl mx-auto" />
                            </div>
                            <div
                                className="text-center py-2 bg-white shadow-lg rounded-lg w-20 h-20 flex items-center justify-center flex-col absolute top-10 lg:right-10 -right-8">
                                <Image src={charcoalImg} alt="charcoal" className="h-6 mb-2" />
                                <p className="text-xs">No Alcoholic</p>
                            </div>
                            <div
                                className="text-center py-2 bg-white shadow-lg rounded-lg w-20 h-20 flex items-center justify-center flex-col absolute bottom-10 lg:left-10 -left-8">
                                <Image src={charcoalImg} alt="charcoal" className="h-6 mb-2" />
                                <p className="text-xs">No Charcoal</p>
                            </div>
                        </div>
                        <div className="2xl:w-3/5 md:w-1/2 w-full mt-6 md:mt-0 pl-0 md:pl-10 lg:pl-0">
                            <h6 className="text-lg text-[#555555] mb-2">A Nature’s Touch</h6>
                            <h2 className="text-3xl sm:text-5xl text-green-1 font-medium mb-5 lg:mb-10">About Us</h2>
                            <p className="text-base lg:text-lg color__grey mb-2 xl:w-3/4 w-full font-light">One fine afternoon, a
                                cupid landed on our window. We don’t know why he chose to visit us.
                                But as we sat by the fireplace, he raised his bow and shot the most beautiful arrow ever. It was
                                headed straight for our hearts.
                            </p>
                            <p className="text-base lg:text-lg color__grey xl:w-3/4 w-full mb-5 lg:mb-10 font-light">
                                But then something unexpected happened. The arrow changed its course mid-air and struck our
                                noses.
                                And right then we knew it. We had always been in love with fragrances. So, we started aer.
                            </p>
                            <a href="#" className="custom_btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default AboutUs