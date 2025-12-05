
import { connect } from 'react-redux'
import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import { get_category, get_product } from '../../redux/action/action'
import Footer from '../layout/footer'
import Header from '../layout/header'
import Categories from './categories'
import Image from 'next/image'
import { useRouter } from 'next/router'
import QuatationImage from '../../assets/img/qutation.svg'
import httpServices from '../../httpServises'
import SupportSession from '../layout/supportSession'

const Products = (props) => {
    const categoryData = props.data
    let data = categoryData.toString()
    const [category, setCategory] = useState()
    const [products, setProduct] = useState()
    // useEffect(() => {
    //     httpServices.getCategory().then(response => {
    //         setCategory(response.data.category)
    //     })
    // }, [])
    // useEffect(() => {
    //     httpServices.getProducts(data).then(response => {
    //         console.log(response.data.products)
    //         // setProduct(response.data.products)
    //     })
    // }, [categoryData])
    useEffect(() => {
        httpServices.getProductsbyCategory(data).then(response => {
            setProduct(response.data.products.data)
        })
    }, [data])
    console.log(products)

    return (
        <div>
            <Header />
            <Head >

                {/* <!-- ====== FLOWBIT LINK ====== --> */}

                {/* <!-- ======== FONT AWSOME LINK ========= --> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />

                <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
            </Head>
            {/* ============= SCRIPT ============= */}
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
            {/* <!-- ===== FLOWBIT JS ======= --> */}
            <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />

            {/* ============== PRODUCT TEXT START ============== --> */}

            <section className="prodcut_text">
                <div className="bg-neutral-50 py-20">
                    <div className="container mx-auto">
                        <div className="text-center">
                            <h3 className="text-3xl xsm:text-5xl font-medium mb-2">OUR PRODUCT</h3>
                            <nav className="w-full">
                                <ol className="flex justify-center">
                                    <li>
                                        <a href="#"
                                            className="text-[#555555] font-light text-lg"
                                        >Home</a>
                                    </li>
                                    <li><span className="text-gray-500 mx-2">/</span></li>
                                    <li className="text-gray-500">
                                        <a href="javscript:;" className="text-green-1 font-medium text-lg"
                                        >Our Product</a>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============== PRODUCT TEXT END ============== --> */}
            {/* <!-- ======= OUR PRODUCT START ======== --> */}
            <section className="product py-9">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/3 lg:w-1/5 sm:basis-1/3 lg:basis-1/5">
                            <Categories />
                        </div>
                        <div className="w-full sm:w-2/3 lg:w-4/5 sm:basis-2/3 lg:basis-4/5">
                            <div className="flex flex-wrap">
                                {
                                    products && products.map((items) => (
                                        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-5">

                                            <div className="rounded-lg w-full max-w-xs mx-auto">
                                                {
                                                    items.product_galleries.map((img) => (

                                                        <a href="#" key={img.id}>
                                                            <Image src={`http://127.0.0.1:8000/storage/${img.image}`} alt='FirstImage' width={200} height={200} className="rounded-lg" />
                                                        </a>
                                                    ))
                                                }
                                                <div className="flex justify-between mt-5">
                                                    <div className="heading">
                                                        <h2 className="text-lg text-black">{items.name}</h2>
                                                        <p className="text-sm color__grey">Bamboo Less Fragrance Sticks</p>
                                                    </div>
                                                    <div>
                                                        <a href="javscript:;">
                                                            <i className="fa-regular fa-heart text-green-1" />
                                                        </a>{" "}
                                                    </div>
                                                </div>
                                                <div className="flex ">
                                                    <p className="text-green-1 font-medium">₹ {items.selling_price}/-</p>
                                                    <p className="text-red-700 font-medium px-5"><del>₹ {items.regular_price}/-</del></p>
                                                </div>
                                                <p>
                                                    <i className="fa-solid fa-star text-yellow-400" />
                                                    <i className="fa-solid fa-star text-yellow-400" />
                                                    <i className="fa-solid fa-star text-yellow-400" />
                                                    <i className="fa-solid fa-star text-yellow-400" />
                                                    <i className="fa-solid fa-star text-yellow-400" />
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- ======= CLIENTS START ======= --> */}
            <section className="clients bg-neutral-50 py-14 lg:py-28">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h6 className="text-lg text-[#555555] mb-2 ">“What they say about us”</h6>
                        <h2 className="text-3xl sm:text-5xl text-green-1 mb-10 font-medium">Our Happy Clients</h2>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="lg:basis-1/3 md:basis-1/2 basis-full px-3 mb-4 lg:mb-0">
                            <div className="p-5 lg:p-8 max-w-full lg:max-w-md bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <Image src={QuatationImage} className="h-9 mb-2" />
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
                                <Image src={QuatationImage} className="h-9 mb-2" />
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
                                <Image src={QuatationImage} className="h-9 mb-2" />
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
const mapStateToProps = (state) => ({
    data: state.category_subCategoroies.subCategory
})

const mapDispatchToProps = (dispatch) => ({
    product_data: () => dispatch(get_product()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)