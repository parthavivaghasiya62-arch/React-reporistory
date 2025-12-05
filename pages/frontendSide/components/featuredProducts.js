import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { connect } from 'react-redux'
import firstImg from "../../assets/img/na-1.png"
import secondImg from "../../assets/img/fp-1.png"
import thirdImg from "../../assets/img/fp-2.png"
import forthImg from "../../assets/img/na-3.png"
import Head from 'next/head'
import { get_product } from '../../redux/action/action'
import httpServices from '../../httpServises'

const FeaturedProducts = (props) => {
    const [productData, setProductData] = useState()
    useEffect(() => {
        httpServices.getProducts().then(response => {
            setProductData(response.data.products.data)
        })
    }, [])

    return (
        <div>
            < Head >
                {/* =-================== FONT AWSOME LINK =-================== */}
                < link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
                {/* ================= GOOGLE FONT LINK ================= */}
                < link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet" />
                {/* <!-- ========= SLICK SWIPER LINK ========--> */}
                < link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />

                {/* ====== FLOWBIT LINK ====== */}
                < link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
            </Head >
            <section className="fetured_proudct py-14 lg:py-28">

                <div className="container slick-carousel">
                    {
                        props.data != undefined && props.data.products.data.map((item) => (
                            <div key={item.id} className="mx-4 rounded-lg">
                                {
                                    item.product_galleries.map((img) => {
                                        return (
                                            <a href="#" key={img.id}>
                                                <Image src={`http://127.0.0.1:8000/storage/${img.image}`} alt='multipleImages[]' width={250}
                                                    height={300} className="rounded-lg" />
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
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.product.product.data
})

const mapDispatchToProps = (dispatch) => ({
    product_data: () => dispatch(get_product()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProducts)