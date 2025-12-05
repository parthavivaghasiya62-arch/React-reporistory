import React from 'react'
import Image from 'next/image'
import banner1 from "../../assets/img/banner-1.png"
import banner2 from "../../assets/img/banner-2.png"
import banner4 from "../../assets/img/banner-4.png"
import banner5 from "../../assets/img/banner-5.png"
import banner3 from "../../assets/img/banner-3.png"

const InstagramBanners = () => {
    return (
        <div>
            <section className="banner pt-14 lg:pt-28 pb-14 lg:pb-20">
                <div className="container mx-auto">
                    <div className="flex justify-between flex-wrap items-center">
                        <p className="text-green-1 font-medium text-3xl sm:text-5xl mb-5 md:mb-0">Follow Our <a href="jvascript:;"
                            className="text-lime-300 text-3xl sm:text-4xl font-kaushan">Instagram</a></p>
                        <p><a href="#"><i className="fa-brands fa-instagram text-lime-400 mr-3 text-xl"></i></a> <span
                            className="text-green-1 font-medium text-3xl">#nioaerindia</span> </p>
                    </div>
                </div>
                <div className="banner_main overflow-hidden mt-10">
                    <div className="flex">
                        <div className="basis-1/5 mr-5">
                            <Image src={banner1} alt='Banner1' className="w-full h-full rounded-lg" />
                        </div>
                        <div className="basis-1/5 mr-5">
                            <Image src={banner2} alt='Banner2' className="w-full h-full rounded-lg" />
                        </div>
                        <div className="basis-1/5 mr-5">
                            <Image src={banner4} alt='Banner3' className="w-full h-full rounded-lg" />
                        </div>
                        <div className="basis-1/5 mr-5">
                            <Image src={banner5} alt='Banner4' className="w-full h-full rounded-lg" />
                        </div>
                        <div className="basis-1/5">
                            <Image src={banner3} alt='Banner5' className="w-full h-full rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InstagramBanners