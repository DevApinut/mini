import { useEffect, useReducer, useRef } from "react"
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";
import { validEmail, validPassword ,validusername } from "../Regex/Register_regex";

const Register = () => {

    const email_validate = useRef<any>("")
    const uername_validate = useRef<any>("")
    const password_validate = useRef<any>("")
    const confirmpassword_validate = useRef<any>("")

    const initials = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpassword: "",
        email: "",
        personel_number: "",
        show_password: false,
        show_confirmpassword: false,

        // ----------- For validate with regex ------------


    }

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case "setstate":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
        }
    }

    const [state, dispatch] = useReducer(reducer, initials)

    const showpassword = state.show_password ? "text" : "password"
    const showconfirmpassword = state.show_confirmpassword ? "text" : "password"

    const Regex_username = (value: string) => {
        if (value == "") {
            uername_validate.current.textContent = ""
        }
        else if (!validusername.test(value)) {
            uername_validate.current.textContent = "*หมายเหตุ username ต้องเป็นภาษาอังกฤษ 4-20 ตัว เท่านั้น"
            uername_validate.current.style.color = "red"
            uername_validate.current.style.fontSize = "12px"

        } else if ((validusername.test(value))) {
            uername_validate.current.textContent = ""
            uername_validate.current.style.color = "green"
            uername_validate.current.style.fontSize = "12px"
        }
    }
    const Regex_email = (value: string) => {
        if (value == "") {
            email_validate.current.textContent = ""
        }
        else if (!validEmail.test(value)) {
            email_validate.current.textContent = "*หมายเหตุ ประเภท email ไม่ถูกต้อง ตย. example@test.com"
            email_validate.current.style.color = "red"
            email_validate.current.style.fontSize = "12px"

        } else if ((validEmail.test(value))) {
            email_validate.current.textContent = ""
            email_validate.current.style.color = "green"
            email_validate.current.style.fontSize = "12px"
        }
    }

    const Regex_password = (value: string) => {
        if (value == "") {
            password_validate.current.textContent = ""
        }
        else if (!validPassword.test(value)) {
            password_validate.current.textContent = "*หมายเหตุ ต้องประกอบด้วย 0-9 .!@#$%^&* และอักษร A-Z"
            password_validate.current.style.color = "red"
            password_validate.current.style.fontSize = "12px"

        } else if ((validPassword.test(value))) {
            password_validate.current.textContent = `✓ สามารถใช้ได้`
            password_validate.current.style.color = "green"
            password_validate.current.style.fontSize = "12px"
        }

        //กรณี เกิดไปเปลี่ยน password แล้วไม่ตรงกับ confirm
        if (value == "") {
            confirmpassword_validate.current.textContent = ""
        }
        else if (value != state.confirmpassword) {
            confirmpassword_validate.current.textContent = "รหัสผ่านไม่ตรงกัน"
            confirmpassword_validate.current.style.color = "red"
            confirmpassword_validate.current.style.fontSize = "12px"

        } else if (value == state.confirmpassword) {
            confirmpassword_validate.current.textContent = `✓ รหัสผ่านตรงกัน`
            confirmpassword_validate.current.style.color = "green"
            confirmpassword_validate.current.style.fontSize = "12px"
        }
    }

    const confirmpassword = (value: string) => {
        if (value == "") {
            confirmpassword_validate.current.textContent = ""
        }
        else if (value != state.password) {
            confirmpassword_validate.current.textContent = "รหัสผ่านไม่ตรงกัน"
            confirmpassword_validate.current.style.color = "red"
            confirmpassword_validate.current.style.fontSize = "12px"

        } else if (value == state.password) {
            confirmpassword_validate.current.textContent = `✓ รหัสผ่านตรงกัน`
            confirmpassword_validate.current.style.color = "green"
            confirmpassword_validate.current.style.fontSize = "12px"
        }
    }




    const Register = () => {

    }
    useEffect(() => {
        document.title = 'ลงทะเบียน | Register';
    }, [])
    return (
        <>
            <div className=" flex flex-col h-screen">
                <Navbar1 />
                <div className="h-full window-Register container my-3">
                    <div className="sub-window-Register">
                        <div className="text-2xl my-4">สมัครสมาชิก</div>
                        <div className="w-full px-2">
                            <form onSubmit={Register}>

                                {/* ------------------------------ username ------------------------------ */}
                                <div className="group-for-input-tailwind w-full">
                                    <div className="input-register w-full ">
                                        <div>ชื่อผู้ใช้</div>
                                        <input type="text" className="w-full" required onChange={(e) => {
                                            dispatch({
                                                type: "setstate",
                                                payload: { name: "username", value: e.target.value }
                                            });
                                            Regex_username(e.target.value)
                                        }
                                        } />
                                    </div>
                                </div>
                                <div ref={uername_validate}></div>


                                {/* ------------------------------ firstname and lastname ------------------------------ */}
                                <div className="group-for-input-tailwind">
                                    <div className="input-register">
                                        <div>ชื่อ</div>
                                        <input type="text" required onChange={e => dispatch({
                                            type: "setstate",
                                            payload: { name: "firstname", value: e.target.value }
                                        })} />
                                    </div>
                                    <div className="input-register">
                                        <div>นามสกุล</div>
                                        <input type="text" required onChange={e => dispatch({
                                            type: "setstate",
                                            payload: { name: "lastname", value: e.target.value }
                                        })} />
                                    </div>
                                </div>

                                {/* ------------------------------ email ------------------------------ */}
                                <div className="group-for-input-tailwind">
                                    <div className="input-register">
                                        <div>เลขประจำตัว</div>
                                        <input type="text" required onChange={e => dispatch({
                                            type: "setstate",
                                            payload: { name: "personel_number", value: e.target.value }
                                        })} />
                                    </div>
                                    <div className="input-register">
                                        <div>อีเมลล์</div>
                                        <input type="text" required onChange={e => {
                                            dispatch({
                                                type: "setstate",
                                                payload: { name: "email", value: e.target.value }
                                            })
                                            Regex_email(e.target.value)
                                        }} />
                                    </div>
                                </div>
                                <div ref={email_validate}></div>


                                {/* ------------------------- ----- Password ------------------------------ */}
                                <div className="group-for-input-tailwind">
                                    <div className="input-register w-full">
                                        <div>รหัสผ่าน</div>
                                        <input type={showpassword} required onChange={e => {
                                            dispatch({
                                                type: "setstate",
                                                payload: { name: "password", value: e.target.value }
                                            })
                                            Regex_password(e.target.value)
                                        }} />
                                    </div>
                                </div>
                                <div ref={password_validate}></div>

                                <div className="flex items-center">
                                    <input type="checkbox" className="w-3 h-3 mx-2" onChange={e => dispatch({
                                        type: "setstate",
                                        payload: { name: "show_password", value: e.target.checked }
                                    })} />
                                    <div className="mx-2">แสดงรหัสผ่าน</div>
                                </div>

                                {/* ------------------------- Confirm Password ------------------------------ */}
                                <div className="group-for-input-tailwind">
                                    <div className="input-register w-full">
                                        <div>ยืนยันรหัสผ่าน</div>
                                        <input type={showconfirmpassword} required onChange={e => {
                                            dispatch({
                                                type: "setstate",
                                                payload: { name: "confirmpassword", value: e.target.value }
                                            })
                                            confirmpassword(e.target.value)
                                        }} />
                                    </div>
                                </div>
                                <div ref={confirmpassword_validate}></div>

                                <div className="flex items-center">
                                    <input type="checkbox" className="w-3 h-3 mx-2" onChange={e => dispatch({
                                        type: "setstate",
                                        payload: { name: "show_confirmpassword", value: e.target.checked }
                                    })} />
                                    <div className="mx-2">แสดงรหัสผ่าน</div>
                                </div>


                                <div className="flex justify-center w-full mt-4">
                                    <button className="mx-4 border w-full text-center p-2 rounded-xl 
                                    bg-green-400 hover:cursor-pointer hover:text-slate-50"
                                    >ลงทะเบียน</button>
                                </div>
                            </form>

                            <hr></hr>
                            <div className="flex justify-center mb-10">
                                <Link to={"/Login"} className="mx-3 hover:text-yellow-50 
                                    hover:cursor-pointer no-underline">เข้าสู่ระบบ</Link>
                                <Link to={"/Forgetpassword"} className="mx-3 hover:text-yellow-50 
                                    hover:cursor-pointer no-underline">ลืมรหัสผ่าน</Link>
                            </div>

                        </div>
                    </div>

                </div>
                <Footer />
            </div>




        </>
    )
}

export default Register 
