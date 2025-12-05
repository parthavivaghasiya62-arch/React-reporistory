import React from 'react'
import Image from 'next/image'
import qutationImg from "../../assets/img/qutation.svg"

const ClientReview = () => {
    return (
        <div>
            <section className="clients bg-neutral-50 py-14 lg:py-28">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h6 className="text-lg text-[#555555] mb-2 ">“What they say about us”</h6>
                        <h2 className="text-3xl sm:text-5xl text-green-1 mb-10 font-medium">Our Happy Clients</h2>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="lg:basis-1/3 md:basis-1/2 basis-full px-3 mb-4 lg:mb-0">
                            <div
                                className="p-5 lg:p-8 max-w-full lg:max-w-md bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <Image src={qutationImg} alt='quatation' className="h-9 mb-2" />
                                <p className="mb-3 font-light text-base sm:text-lg text-gray-500 dark:text-gray-400">Lorem Ipsum is
                                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s.</p>
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
                            <div
                                className="p-5 lg:p-8 max-w-full lg:max-w-md bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <Image src={qutationImg} alt='quatation' className="h-9 mb-2" />
                                <p className="mb-3 font-light text-base sm:text-lg text-gray-500 dark:text-gray-400">Lorem Ipsum is
                                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s.</p>
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
                            <div
                                className="p-5 lg:p-8 max-w-full lg:max-w-md bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <Image src={qutationImg} alt='quatation' className="h-9 mb-2" />
                                <p className="mb-3 font-light text-base sm:text-lg text-gray-500 dark:text-gray-400">Lorem Ipsum is
                                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s.</p>
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
        </div>
    )
}

export default ClientReview