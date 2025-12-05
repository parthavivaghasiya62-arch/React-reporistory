import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logoImg from "../../assets/img/logo 1.png"
import userLogo from "../../assets/img/images.jpg"
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
import { connect } from 'react-redux'
import { logout_user } from '../../redux/action/action'

const Header = (props) => {
    const router = useRouter();
    const [storageData, setStorageData] = useState()
    let localData;
    useEffect(() => {
        setStorageData(localStorage.getItem("Token"))
    }, [storageData])
    const logoutAuthentication = () => {
        // localStorage.removeItem("Token")
        props.logoutUser();
    }
    return (
        <div>
            <Head>
                {/* =-================== FONT AWSOME LINK =-================== */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
                {/* ================= GOOGLE FONT LINK ================= */}
                <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet" />
                {/* <!-- ========= SLICK SWIPER LINK ========--> */}
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" />
                {/* ====== FLOWBIT LINK ====== */}
                <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
            </Head>



            <header className="header bg-white shadow py-5">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="header_logo">
                            <Image src={logoImg} className="h-20" alt='logoIm' />
                        </div>
                        <div className="header_links">
                            <button data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation"
                                type="button" className="inline-flex justify-center items-center ml-3 text-green-1 rounded-lg md:hidden
     hover:text-green-700 focus:outline-none hover:bg-transparent"
                                aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </button>
                            <div className="hidden md:block md:w-auto w-full" id="mobile-menu">
                                <ul className="flex items-center justify-end lg:space-x-8 space-x-6">
                                    <li><Link href="/" className="text-lg font-light"> Home</Link></li>
                                    <li><Link href="/frontendSide/navbarSession/aboutUs" className="text-lg font-light"> About Us</Link></li>
                                    <li><Link href="/frontendSide/products/product" className="text-lg font-light"> Shop</Link></li>

                                    <li><a href="#" className="text-lg font-light"> Contact</a></li>
                                    {
                                        storageData ? (
                                            <Image src={userLogo} alt="user" width={40} height={40} />
                                        ) : (

                                            <li><Link href={"/frontendSide/authentication/login"} className="custom_btn"
                                            >Login</Link></li>
                                        )
                                    }
                                    <li><Link href={"/frontendSide/authentication/signUp"} className="custom_btn" >signUp</Link></li>
                                    <li><Link href='/' onClick={() => logoutAuthentication()}>Logout</Link></li>
                                    <li><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
                                    <li><a href="#"><i className="fa-regular fa-heart"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- ========= MOBILE MENU OFFCANVAS ========= --> */}

            <div id="drawer-navigation" className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 -translate-x-full"

                data-drawer-backdrop="false" tabindex="-1" aria-hidden="true">

                <div className="flex justify-end">
                    {/* <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase">Menu</h5>  */}
                    <button type="button" data-drawer-dismiss="drawer-navigation" aria-controls="drawer-navigation"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="p-2 text-lg font-light">
                                <span className="ml-3">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="p-2 text-lg font-light">
                                <span className="ml-3">About Us</span>
                            </a>
                        </li>
                        <li>
                            <button type="button"
                                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Shop</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </button>

                            {/* <!-- ======== DROPDOWN ======= --> */}
                            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                                <li>
                                    <a href="#"
                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="#" className="p-2 text-lg font-light"><span className="ml-3">Contact</span></Link> </li>

                        <li><Link href="#" type="button" className="custom_btn w-full">Login</Link></li>
                    </ul>
                </div>
            </div>
            {/* <!--===== SLICK JS =======--> */}
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" />
            {/* <!-- ===== FLOWBIT JS ======= --> */}
            <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
            <Script src='script.js' />
            {/* </header > */}
        </div >
    )
}

const mapStateToProps = (state) => ({
    data: state.register.login
})

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logout_user()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
