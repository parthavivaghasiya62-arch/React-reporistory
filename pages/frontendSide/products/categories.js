import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { category_post } from '../../redux/action/action'
import httpServices from '../../httpServises'

const Categories = (props) => {
    const router = useRouter()
    const [categoryData, setCategoryData] = useState()
    const [checkbox, setCheckbox] = useState([])
    useEffect(() => {
        httpServices.getCategory().then(response => {
            setCategoryData(response.data.category)
        })

    }, [])
    const checkboxHandle = (e) => {
        const checked = e.target.checked
        if (checked) {
            setCheckbox([...checkbox, e.target.value])
        } else {
            setCheckbox(checkbox.filter((id) => id !== e.target.value))
        }
    }
    useEffect(() => {
        // if (checkbox.length != 0) {
        //     router.push({
        //         query: { id: checkbox },
        //     })
        // }
        props.handleCheckboxData(checkbox)
    }, [checkbox])
    return (
        <>
            <Head>
                {/* <!-- ====== FLOWBIT LINK ====== --> */}

                {/* <!-- ======== FONT AWSOME LINK ========= --> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />

                <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
            </Head>
            <Script src='script.js' />

            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
            {/* <!-- ===== FLOWBIT JS ======= --> */}
            <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />



            <div id="accordion-collapse" data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 dark:text-white" data-inactive-classes="">

                {/* <!--==== MAINCATEGORY ACCORDION ==== --> */}

                <h2 id="accordion-collapse-heading-1">
                    <div className="flex items-center mb-4 ">
                        <button type="button" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false"
                            className="w-full py-5 font-medium text-left border-b border-[#272727] bg-white flex items-center justify-between">Categotries
                            <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </h2>
            </div>
            <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div className="py-5 font-light">
                    <ul>
                        <li className="py-2">
                            {
                                categoryData && categoryData.map((item, countKeys) => (
                                    <div key={item.id} id={"accordion-flush-1"} className="pl-5" data-accordion="collapse"
                                        data-active-classes="bg-white dark:bg-gray-900 dark:text-white">

                                        {/* <!--==== SUBCATEGORY ACCORDION ==== --> */}

                                        <h2 className="flex justify-between items-center border-b border-[#272727] pb-3">

                                            {/* ============ INPUT FEILD ============ */}
                                            <input id={item.name} type="checkbox" value={item.id} onChange={checkboxHandle}
                                                className="w-5 h-5 text-green-600 bg-gray-100 rounded border-[#555555] focus:ring-transparent focus:ring-0" />
                                            <label htmlFor={item.name} className="ml-2 text-lg text-[#555555] font-light">{item.name}</label>

                                            <button type="button" className="font-mediumtext-left w-1/2 flex justify-end"
                                                data-accordion-target={`#sub_categories-` + countKeys}>
                                                <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id={`sub_categories-` + countKeys}
                                            class="hidden"
                                            aria-labelledby="accordion-collapse-heading-3">
                                            <div className="p-5 font-light border-0">
                                                {
                                                    item.children.map((childItems) => (
                                                        <div key={childItems.id} className="flex items-center mb-4">
                                                            <input id={childItems.name} type="checkbox" value={childItems.id} onChange={checkboxHandle}
                                                                className="w-5 h-5 text-green-600 bg-gray-100 rounded border-[#555555] focus:ring-transparent focus:ring-0" />
                                                            <label htmlFor={childItems.name} className="ml-2 text-lg text-[#555555] font-light">{childItems.name}</label>{' '}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!--==== SECOND ACCORDION ==== --> */}
            {/* <div id="accordion-collapse-price" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 dark:text-white" data-inactive-classes=""
            >

                <h2 id="accordion-collapse-heading-2" className="mb-4 sm:mb-0" >
                    <button type="button"
                        className="w-full py-5 font-medium text-left border-b border-[#272727] bg-white flex items-center justify-between"
                        data-accordion-target="#accordion-collapse-body-2">
                        <span> Price</span>
                        <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-2" class="hidden"
                    aria-labelledby="accordion-collapse-heading-2">
                    <div className="py-5 font-light">
                        <div className="flex items-center mb-4">
                            <input id="200" type="checkbox" value="200"
                                className="w-5 h-5 text-green-600 bg-gray-100 rounded border-[#555555] focus:ring-transparent focus:ring-0" />
                            <label htmlFor="200" className="ml-2 text-lg text-[#555555] font-light">0 - 200</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="200-400" type="checkbox" value="200-400"
                                className="w-5 h-5 text-green-600 bg-gray-100 rounded border-[#555555] focus:ring-transparent focus:ring-0" />
                            <label htmlFor="200-400" className="ml-2 text-lg text-[#555555] font-light">200-400</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="400_600" type="checkbox" value="400_600"
                                className="w-5 h-5 text-green-600 bg-gray-100 rounded border-[#555555] focus:ring-transparent focus:ring-0" />
                            <label htmlFor="400_600" className="ml-2 text-lg text-[#555555] font-light">400 - 600</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="600_800" type="checkbox" value="600_800"
                                className="w-5 h-5 text-green-600 bg-gray-100 rounded border-[#555555] focus:ring-transparent focus:ring-0" />
                            <label htmlFor="600_800" className="ml-2 text-lg text-[#555555] font-light">600 - 800</label>
                        </div>
                    </div>
                </div>
            </div> */}

            <label
                htmlFor="default-range"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                Default range
            </label>
            <input
                id="default-range"
                type="range"
                defaultValue={50}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
        </>
    )
}

const mapStateToProps = (state) => ({
    data: state.category_subCategoroies.subCategory
})

const mapDispatchToProps = (dispatch) => ({
    handleCheckboxData: (checkbox) => dispatch(category_post(checkbox)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)