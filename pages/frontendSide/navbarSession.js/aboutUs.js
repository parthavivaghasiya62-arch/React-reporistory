import React from 'react'
import Footer from '../layout/footer'
import Header from '../layout/header'
import qutationImg from "../../assets/img/qutation.svg"
import Image from 'next/image'
import SupportSession from '../layout/supportSession'

const AboutUs = () => {
  return (
    <div>
      <Header />
      <section className="about_us">
        <div className="bg-neutral-50 py-20">
          <div className="container mx-auto">
            <div className="text-center ">
              <h3 className="text-5xl font-medium mb-2">About US</h3>
              {/* <!-- Breadcrumb -->  */}
              <nav className="w-full">
                <ol className="flex justify-center ">
                  <li><a href="#" className="text-[#555555] font-light text-lg">Home</a></li>
                  <li><span className="text-gray-500 mx-2">/</span></li>
                  <li className="text-gray-500"><a href="#" className="text-green-1 font-medium text-lg">About Us</a> </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="text-center w-full xl:w-3/5 mx-auto py-12 lg:py-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium text-green-1 mb-6 md:mb-10">Love at first smell. <br />
              The story of how we started Godrej aer.</h2>
            <p className="text-base sm:text-lg font-light color__grey mb-2">One fine afternoon, a cupid landed on our window. We don't know why he chose to visit us.
              But as we sat by the fireplace, he raised his bow and shot the most beautiful arrow ever. It was headed straight for our hearts.
            </p>
            <p className="text-base sm:text-lg font-light color__grey">But then something unexpected happened. The arrow changed its course mid-air and struck our noses.
              And right then we knew it. We had always been in love with fragrances. So, we started aer.</p>
          </div>
        </div>
      </section>
      <section className="clients bg-neutral-50 py-14 lg:py-28">
        <div className="container mx-auto">
          <div className="text-center">
            <h6 className="text-lg text-[#555555] mb-2 ">“What they say about us”</h6>
            <h2 className="text-3xl sm:text-5xl text-green-1 mb-10 font-medium">Our Happy Clients</h2>
          </div>
          <div className="flex flex-wrap">
            <div className="lg:basis-1/3 md:basis-1/2 basis-full px-3 mb-4 lg:mb-0">
              <div className="p-5 lg:p-8 max-w-full lg:max-w-md bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Image src={qutationImg} className="h-9 mb-2" alt='QutationImage' />
                <p className="mb-3 font-light text-base sm:text-lg text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div className="py-3 border-t border-gray-300 text-gray-600 flex justify-between items-center">
                  <div className="c_footer_left">
                    <p className="font-normal text-lg">Halil YAYICI</p>
                    <p className="text-sm text-gray-500">Surat, Gujarat</p>
                  </div>
                  <div className="c_footer_right">
                    <span><i className="fa-solid fa-star text-yellow-400"></i></span>
                    <span><i className="fa-solid fa-star text-yellow-400"></i></span>
                    <span><i className="fa-solid fa-star text-yellow-400"></i></span>
                    <span><i className="fa-solid fa-star text-yellow-400"></i></span>
                    <span><i className="fa-regular fa-star"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:basis-1/3 md:basis-1/2 basis-full px-3 mb-4 lg:mb-0">
              <div className="p-5 lg:p-8 max-w-full lg:max-w-md bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Image src={qutationImg} className="h-9 mb-2" alt='QutationImage' />
                <p className="mb-3 font-light text-base sm:text-lg text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div className="py-3 border-t border-gray-300 text-gray-600 flex justify-between items-center">
                  <div className="c_footer_left">
                    <p className="font-normal text-lg">Halil YAYICI</p>
                    <p className="text-sm text-gray-500">Surat, Gujarat</p>
                  </div>
                  <div className="c_footer_right">
                    <span><i className="fa-solid fa-star text-yellow-400"></i></span>
                    <span><i className="fa-solid fa-star text-yellow-400"></i></span>
                    <span><i className="fa-solid fa-star text-yellow-400"></i></span>
                    <span><i className="fa-solid fa-star text-yellow-400"></i></span>
                    <span><i className="fa-regular fa-star"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:basis-1/3 md:basis-1/2 basis-full px-3 mb-4 lg:mb-0">
              <div className="p-5 lg:p-8 max-w-full lg:max-w-md bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Image src={qutationImg} className="h-9 mb-2" alt='QutationImage' />
                <p className="mb-3 font-light text-base sm:text-lg text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div className="py-3 border-t border-gray-300 text-gray-600 flex justify-between items-center">
                  <div className="c_footer_left">
                    <p className="font-normal text-lg">Halil YAYICI</p>
                    <p className="text-sm text-gray-500">Surat, Gujarat</p>
                  </div>
                  <div className="c_footer_right">
                    <span><i className="fa-solid fa-star text-yellow-400"></i></span>
                    <span><i className="fa-solid fa-star text-yellow-400"></i></span>
                    <span><i className="fa-solid fa-star text-yellow-400"></i></span>
                    <span><i className="fa-solid fa-star text-yellow-400"></i></span>
                    <span><i className="fa-regular fa-star"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SupportSession />
      <Footer />
    </div>
  )
}

export default AboutUs