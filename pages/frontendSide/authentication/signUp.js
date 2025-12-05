import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { connect } from 'react-redux'
import { register_post_data } from '../../redux/action/action'
import Swal from 'sweetalert2'
import Header from "../layout/header"
import Footer from "../layout/footer"
import SupportSession from "../layout/supportSession"

const signUp = (props) => {
    const router = useRouter()
    const initialState = {
        id: "",
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
    const intialMsg = {
        id: "",
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
    const showMsg = {
        firstName: "Feild Will Be Required*",
        lastName: "Feild Will Be Required*",
        email: "Email Feild Required* ",
        password: "Password Feild Required*",
        confirmPassword: "confirmPassword Feild Required*",
        matchPassword: "Password Does not Match *",
    }
    const [userDetails, setUserDetails] = useState(initialState)
    const [errorMsg, setErrorMsg] = useState(intialMsg)

    const handleEvent = (event) => {
        const { name, value } = event.target;
        setUserDetails({ ...userDetails, [name]: value })
        setErrorMsg({ ...errorMsg, [name]: "" })
    }

    const data = {
        // id: uuid(),
        first_name: userDetails.firstName,
        last_name: userDetails.lastName,
        email: userDetails.email,
        user_name: userDetails.userName,
        password: userDetails.password,
        // created_at: new Date(),
        user_type: 0,
        remember_token: uuid()
    }
    const submitUserData = () => {
        let firstName = ""
        let lastName = ""
        let email = ""
        let userName = ""
        let password = ""
        let confirmPassword = ""
        let matchPassword = ""

        if (userDetails.firstName.trim() === "" || userDetails.lastName.trim() === "" || userDetails.email.trim() === "" || userDetails.userName.trim() === "" ||
            userDetails.password.trim() === "" || userDetails.confirmPassword.trim() === ""
        ) {

            if (userDetails.firstName.trim() == "") {
                firstName = showMsg.firstName;
            }
            if (userDetails.lastName.trim() == "") {
                lastName = showMsg.lastName;
            }
            if (userDetails.userName.trim() == "") {
                userName = showMsg.userName;
            }
            if (userDetails.email.trim() == "") {
                email = showMsg.email;
            }
            if (userDetails.password.trim() == "") {
                password = showMsg.password;
            }
            if (userDetails.confirmPassword.trim() == "") {
                confirmPassword = showMsg.confirmPassword;
            }
            if (userDetails.password.trim() !== userDetails.confirmPassword.trim()) {
                // matchPassword = showMsg.matchPassword;
                alert("Password Does not Match")
            }
            setErrorMsg({
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                matchPassword: matchPassword,
            })
            return false;
        }
        props.submitUserDetails(data)
        // console.log(props)

        // if(props.data.status == 0){
        //     alert("User Exist...")
        // }
    }
    useEffect(() => {
        if (props.data[0] != undefined) {
            if (props.data[0].status == 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 700,
                    timerProgressBar: true,
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Signup successfully'
                })
            }
        }
    }, [props.data])
    return (
        <div>
            <Header />

            {/* ================== SIGNUP TEXT START ================== */}

            <section className="login_text">
                <div className="bg-neutral-50 py-20">
                    <div className="container mx-auto">
                        <div className="text-center">
                            <h3 className="text-4xl sm:text-5xl font-medium mb-2">SignUp</h3>
                            {/* <!-- Breadcrumb --> */}
                            <nav className="w-full">
                                <ol className="flex justify-center">
                                    <li>
                                        <a href="javascript:;" className="text-[#555555] font-light text-lg">Home</a>
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

            {/* =========================  SIGNUP START ========================= */}

            <section className="login py-14 lg:py-28">
                <div className="container mx-auto ">
                    <div className="text-center md:w-3/4 lg:w-1/2 mx-auto">
                        <p className="text-lg color__grey font-light">If you have shopped with us before, please enter your details
                            below. If you are a new customer, please proceed to the Billing section.</p>
                    </div>
                    <div className="login_from mt-9">
                        <form>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="firstName" className="block mb-2 font-light text-[#555555]">First name</label>
                                    <input type="text" id="first_name"
                                        className="bg-white border border-[#dddddd] font-normal text-[#222222] text-lg rounded-2xl block w-full p-3 focus:ring-0 focus:ring-[#dddddd] focus:border-[#dddddd] placeholder:text-gray-200"
                                        placeholder="Enter Your Name" name='firstName'
                                        required="" onChange={handleEvent} />
                                    <small className='text-red-500'>{errorMsg.firstName}</small>
                                </div>
                                <div>
                                    <label for="last_name" className="block mb-2 font-light text-[#555555]">Last name</label>
                                    <input type="text" id="last_name" name='lastName'
                                        className="bg-white border border-[#dddddd] font-normal text-[#222222] text-lg rounded-2xl block w-full p-3 focus:ring-0 focus:ring-[#dddddd] focus:border-[#dddddd] placeholder:text-gray-200"
                                        placeholder="Enter Your Name" required="" onChange={handleEvent} />
                                    <small className='text-red-500'>{errorMsg.lastName}</small>
                                </div>
                                <div>
                                    <label for="userName" className="block mb-2 font-light text-[#555555]">UserName <span>*</span>
                                    </label>
                                    <input type="text" id="userName" name='userName'
                                        className="bg-white border border-[#dddddd] font-normal text-[#222222] text-lg rounded-2xl block w-full p-3 focus:ring-0 focus:ring-[#dddddd] focus:border-[#dddddd] placeholder:text-gray-200"
                                        placeholder="Enter UserName" required="" onChange={handleEvent} />
                                    <small className='text-red-500'>{errorMsg.lastName}</small>
                                </div>
                                <div>
                                    <label for="gmail" className="block mb-2 font-light text-[#555555]">Gmail <span>*</span></label>
                                    <input type="text" id="gmail" name='email'
                                        className="bg-white border border-[#dddddd] font-normal text-[#222222] text-lg rounded-2xl block w-full p-3 focus:ring-0 focus:ring-[#dddddd] focus:border-[#dddddd] placeholder:text-gray-200"
                                        placeholder="Enter Your Gmail" required="" onChange={handleEvent} />
                                    <small className='text-red-500'>{errorMsg.email}</small>
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 font-light text-[#555555]">Password <span>*</span>
                                    </label>
                                    <input type="password" id="password" name='password'
                                        className="bg-white border border-[#dddddd] font-normal text-[#222222] text-lg rounded-2xl block w-full p-3 focus:ring-0 focus:ring-[#dddddd] focus:border-[#dddddd] placeholder:text-gray-200"
                                        placeholder="Enter Your Password" required="" onChange={handleEvent} />
                                    <small className='text-red-500'>{errorMsg.password}</small>
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 font-light text-[#555555]">Confirm Password <span>*</span>
                                    </label>
                                    <input type="password" id="password" name='confirmPassword'
                                        className="bg-white border border-[#dddddd] font-normal text-[#222222] text-lg rounded-2xl block w-full p-3 focus:ring-0 focus:ring-[#dddddd] focus:border-[#dddddd] placeholder:text-gray-200"
                                        placeholder="Enter Your Password" required="" onChange={handleEvent} />
                                    <small className='text-red-500'>{errorMsg.confirmPassword}</small>
                                    <small className='text-red-500'>{errorMsg.matchPassword}</small>
                                </div>
                            </div>

                            <div className="text-center">
                                <a type="submit" className="custom_btn w-full md:w-2/5 " onClick={() => submitUserData()}>Submit</a>
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
    data: state.register.register
})

const mapDispatchToProps = (dispatch) => ({
    submitUserDetails: (userDetails) => dispatch(register_post_data(userDetails)),
})

export default connect(mapStateToProps, mapDispatchToProps)(signUp)
