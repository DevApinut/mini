import { useEffect, useReducer } from "react"
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";

const Register = () => {


    const initials = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpassword: "",
        email: "",
        personel_number: "",
        show_password: false,
        show_confirmpassword: false
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

    const Register = () => {

    }
    useEffect(() => {
        document.title = 'ลงทะเบียน | Register';
    }, [])
    return (
        <>
            <div className="border flex flex-col h-screen">
                <Navbar1 />
                <div className="h-full window-Register container">
                    <div className="sub-window-Register">
                        <div className="text-2xl my-4">สมัครสมาชิก</div>
                        <div>
                            <form onSubmit={Register}>
                                <div className="group-for-input-tailwind">
                                    <div className="input-register w-full">
                                        <div>ชื่อผู้ใช้</div>
                                        <input type="text" required onChange={e => dispatch({ type: "setstate", payload: { name: "username", value: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="group-for-input-tailwind">
                                    <div className="input-register">
                                        <div>ชื่อ</div>
                                        <input type="text" required onChange={e => dispatch({ type: "setstate", payload: { name: "firstname", value: e.target.value } })} />
                                    </div>
                                    <div className="input-register">
                                        <div>นามสกุล</div>
                                        <input type="text" required onChange={e => dispatch({ type: "setstate", payload: { name: "lastname", value: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="group-for-input-tailwind">
                                    <div className="input-register">
                                        <div>เลขประจำตัว</div>
                                        <input type="text" required onChange={e => dispatch({ type: "setstate", payload: { name: "personel_number", value: e.target.value } })} />
                                    </div>
                                    <div className="input-register">
                                        <div>อีเมลล์</div>
                                        <input type="text" required onChange={e => dispatch({ type: "setstate", payload: { name: "email", value: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="group-for-input-tailwind">
                                    <div className="input-register w-full">
                                        <div>รหัสผ่าน</div>
                                        <input type={showpassword} required onChange={e => dispatch({ type: "setstate", payload: { name: "password", value: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" className="w-3 h-3 mx-2" onChange={e => dispatch({ type: "setstate", payload: { name: "show_password", value: !state.show_password } })}/>
                                    <div className="mx-2">แสดงรหัสผ่าน</div>
                                </div>

                                <div className="group-for-input-tailwind">
                                    <div className="input-register w-full">
                                        <div>ยืนยันรหัสผ่าน</div>
                                        <input type={showconfirmpassword} required onChange={e => dispatch({ type: "setstate", payload: { name: "confirmpassword", value: e.target.value } })} />
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <input type="checkbox" className="w-3 h-3 mx-2" onChange={e => dispatch({ type: "setstate", payload: { name: "show_confirmpassword", value: !state.show_confirmpassword } })}/>
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
