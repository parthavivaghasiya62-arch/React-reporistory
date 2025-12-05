import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Image from 'next/image'
import firstImg from "../../assets/img/na-1.png"
import secondImg from "../../assets/img/na-2.png"
import thirdImg from "../../assets/img/na-3.png"
import forthImg from "../../assets/img/na-4.png"
import Script from 'next/script'
import Head from 'next/head'
import Link from 'next/link'
import { get_product } from '../../redux/action/action'
import httpServices from '../../httpServises'

const NewArrivals = (props) => {
    const [productData, setProductData] = useState()
    useEffect(() => {
        props.product_data()
        httpServices.getProducts().then(response => {
            setProductData(response.data.products.data)
        })
    }, [])
    // console.log(productData)
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>


            <section className="new_arrivals py-14 lg:py-28">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h6 className="text-lg text-[#555555] mb-2">“Creativity is the fragrance”</h6>
                        <h2 className="text-3xl sm:text-5xl text-green-1 mb-10 font-medium">New Arrivals</h2>
                    </div>
                    <div className="slick-carousel">
                        {
                            props.data != undefined && props.data.products.data.map((item) => (
                                <div key={item.id} className="mx-4 rounded-lg">
                                    {
                                        item.product_galleries.map((img) => {
                                            return (
                                                <a href="#" key={img.id}>
                                                    <Image src={`http://127.0.0.1:8000/storage/${img.image}`} alt='FirstImage' width={200} height={200} className="rounded-lg" />
                                                </a>
                                            )
                                        })
                                    }
                                    <div className="flex justify-between mt-5">
                                        <div className="heading"><h2 className="text-lg text-black">{item.name}</h2>
                                            <p className="text-sm color__grey">Bamboo Less Fragrance Sticks</p>
                                        </div>
                                        <div><a href="#"><i className="fa-regular fa-heart text-green-1"></i></a> </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-green-1 font-medium">₹ {item.selling_price}/-</p>
                                        <p>
                                            <i className="fa-solid fa-star text-yellow-400"></i>
                                            <i className="fa-solid fa-star text-yellow-400"></i>
                                            <i className="fa-solid fa-star text-yellow-400"></i>
                                            <i className="fa-solid fa-star text-yellow-400"></i>
                                            <i className="fa-solid fa-star text-yellow-400"></i>


                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Link href='/frontendSide/products/category' className='float-right pr-5'>See All Product</Link>
                </div>
            </section>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" strategy='lazyOnLoad' />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" strategy='lazyOnLoad' />
            <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" strategy='lazyOnLoad' />
            <Script src='script.js' />
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.product.product.data
})

const mapDispatchToProps = (dispatch) => ({
    product_data: () => dispatch(get_product()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewArrivals)