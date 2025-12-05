import React from 'react'
import Image from 'next/image'
import heroImg from "../../assets/img/heroimg-1.png"
import playImg from "../../assets/img/Play.png"

const FirstSession = () => {
    return (
        <div>
            <section className="hero bg-[url('./../../assets/img/herobg.png')] py-14 md:py-16 bg-cover bg-no-repeat bg-center">
                <div className="container mx-auto">
                    <div className="flex items-center flex-wrap">
                        <div className="md:w-1/2 w-full mb-5 md:mb-0">
                            <h1 className="text-3xl sm:text-5xl font-medium color__grey">Nature's Touch
                                Long lasting fragrance</h1>
                            <p className="text-lg font-light mb-9">Desigend to keep the environment fresh for a long time</p>
                            <div className="buttons_part space-x-6">
                                <a href="#" className="custom_btn">Shop Now</a>
                                <a href="#" className="text-green-900 text-lg"><Image src={playImg} alt='PlayImage'
                                    className="w-7 h-7 inline-block " /> Our Story</a>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full px-5">
                            <Image src={heroImg} alt='HeroImage' className="max-h-[400px] md:max-h-[600px] w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FirstSession