import React, { useEffect, useState } from 'react'
import Footer from '../layout/footer'
import Header from '../layout/header'
import SupportSession from '../layout/supportSession'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { sign_in_user } from '../../redux/action/action'

const login = (props) => {
    const router = useRouter()
    const intialError = {
        email: "",
        password: ""
    }
    const errorMsgShow = {
        email: "Email Feild is Empty",
        password: "Password Feild is Empty",
    }
    const [errorMsg, setErrorMsg] = useState(intialError);
    // const [showPassword, setShowPassword] = useState(false)
    const intialValid = {
        email: "",
        password: ""
    }
    const [loginData, setLoginData] = useState(intialValid);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value });
        setErrorMsg({ ...errorMsg, [name]: "" });
    }

    const loginHandler = () => {
        if (loginData.email == "" || loginData.password == "") {
            if (loginData.email == "") {
                intialError.email = errorMsgShow.email;
            }
            if (loginData.password == "") {
                intialError.password = errorMsgShow.password;
            }
            setErrorMsg({
                email: intialError.email,
                password: intialError.password,
            })
            return false;
        }
        const obj = {
            email: loginData.email,
            password: loginData.password
        }
        props.submitSignIn(obj)

    }
    useEffect(() => {
        // console.log(props.data.rdata.status)
        if (props.data.rdata != undefined) {
            if (props.data.rdata.status == 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 700,
                    timerProgressBar: true,
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                })
                router.push("/")
            }
        }
    }, [props.data])
    return (
        <div>
            <Header />

            {/* ================== LOGIN TEXT START ================== */}

            <section className="login_text">
                <div className="bg-neutral-50 py-20">
                    <div className="container mx-auto">
                        <div className="text-center">
                            <h3 className="text-4xl sm:text-5xl font-medium mb-2">SignIn</h3>
                            {/* <!-- Breadcrumb --> */}
                            <nav className="w-full">
                                <ol className="flex justify-center">
                                    <li>
                                        <a href="#" className="text-[#555555] font-light text-lg">Home</a>
                                    </li>
                                    <li><span className="text-gray-500 mx-2">/</span></li>
                                    <li className="text-gray-500">
                                        <a href="#" className="text-green-1 font-medium text-lg">My Account</a>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================  LOGIN START ========================= */}

            <section className="login py-14 lg:py-28">
                <div className="container mx-auto ">
                    <div className="login_from mt-9">
                        <form>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="gmail" className="block mb-2 font-light text-[#555555]">Gmail <span>*</span></label>
                                    <input type="text" id="email" name='email'
                                        className="bg-white border border-[#dddddd] font-normal text-[#222222] text-lg rounded-2xl block w-full p-3 focus:ring-0 focus:ring-[#dddddd] focus:border-[#dddddd] placeholder:text-gray-200"
                                        placeholder="Enter Your Gmail" required="" onChange={handleInput} />
                                    <small className='text-red-500'>{errorMsg.email}</small>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 font-light text-[#555555]">Password <span>*</span>
                                    </label>
                                    <input type="password" id="password" name='password'
                                        className="bg-white border border-[#dddddd] font-normal text-[#222222] text-lg rounded-2xl block w-full p-3 focus:ring-0 focus:ring-[#dddddd] focus:border-[#dddddd] placeholder:text-gray-200"
                                        placeholder="Enter Your Password" required="" onChange={handleInput}
                                    // onChange={handleEvent} 
                                    />
                                    <small className='text-red-500'>{errorMsg.password}</small>
                                </div>

                            </div>

                            <div className="text-center">
                                <a type="submit" className="custom_btn w-full md:w-2/5 " onClick={() => loginHandler()}>Submit</a>
                                <p className="mt-2"><a href="lostpassword.html" className=" font-normal text-[#555555]">Lost Your
                                    Password?</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
            <SupportSession />
            <Footer />
        </div>
    )
}
const mapStateToProps = (state) => ({
    data: state.register.login
})

const mapDispatchToProps = (dispatch) => ({
    submitSignIn: (signInUser) => dispatch(sign_in_user(signInUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(login)