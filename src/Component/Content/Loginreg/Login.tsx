import { useEffect, useReducer } from "react"
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";
import axios from "axios";
import { authenticate } from "./Service_login"

const Login = () => {

    const initials = {
        username: "",
        password: "",
        show_password: false
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

    const Login = () => {
        axios.post(`${process.env.REACT_APP_API}/Login`, { username: state.username, password: state.password })
            .then((res) => {
                if (res.data.res === "เข้าสู่ระบบสำเร็จ") {
                    authenticate(res, () => {

                    })
                }
            }
            )
    }


    useEffect(() => {
        document.title = 'เข้าสู่ระบบ | Login';
    }, [])
    return (
        <>
            <div className="border container-class flex flex-col">
                <Navbar1 />
                <div className="h-full window-login shrink container">
                    <div className="sub-window-login">
                        <div className="text-2xl my-4">ลงชื่อเข้าใช้</div>
                        <div>
                            <form onSubmit={Login}>
                                <div className="my-3">
                                    <div>ชื่อผู้ใช้</div>
                                    <input type="text" required onChange={e => dispatch({
                                        type: "setstate",
                                        payload: { name: "username", value: e.target.value }
                                    })} />
                                </div>
                                <div className="my-3" >
                                    <div>รหัสผ่าน</div>
                                    <input type={showpassword} required onChange={e => dispatch({ type: "setstate", payload: { name: "password", value: e.target.value } })} />
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" className="w-3 h-3 mx-2" onChange={e => dispatch({
                                        type: "setstate",
                                        payload: { name: "show_password", value: e.target.checked }
                                    })} />
                                    <div className="mx-2">แสดงรหัสผ่าน</div>
                                </div>
                                <div className="flex justify-center w-full mt-4">
                                    <button className="mx-4 border w-full text-center p-2 rounded-xl 
                                    bg-green-400 hover:cursor-pointer hover:text-slate-50"
                                    >เข้าสู่ระบบ</button>
                                </div>
                            </form>

                            <hr></hr>
                            <div className="flex justify-center mb-10">
                                <Link to={"/Register"} className="mx-3 hover:text-yellow-50 
                                    hover:cursor-pointer no-underline">ลงทะเบียน</Link>
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

export default Login