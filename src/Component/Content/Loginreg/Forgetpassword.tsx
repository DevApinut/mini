import { useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"

const Forgetpassword = () => {

    useEffect(() => {
        document.title = "ลืมรหัสผ่าน | Forget password"
    }, [])

    return (
        <>
            <Navbar1 />
            <div className="grow container flex justify-center items-center">
                <div className="sub-window-Register ">
                    <div className="text-2xl my-4">ลืมรหัสผ่าน</div>
                    <div>
                        <div className="group-for-input-tailwind">
                            <div className="input-register">
                                <div>อีเมลล์</div>
                                <input type="text" />
                            </div>
                            <div className="input-register">
                                <div>รหัสผ่านเก่า</div>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="group-for-input-tailwind">
                            <div className="input-register">
                                <div>รหัสผ่านใหม่</div>
                                <input type="text" />
                            </div>
                            <div className="input-register">
                                <div>ยืนยันรหัสผ่านใหม่</div>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="flex justify-center w-full mt-4">
                            <div className="mx-4 border w-full text-center p-2 rounded-xl 
                                    bg-green-400 hover:cursor-pointer hover:text-slate-50"
                            >ยืนยัน</div>
                        </div>
                        <hr></hr>
                        <div className="flex justify-center mb-10">
                            <Link to={"/Login"} className="mx-3 hover:text-yellow-50 
                                    hover:cursor-pointer no-underline">เข้าสู่ระบบ</Link>
                            <Link to={"/Register"} className="mx-3 hover:text-yellow-50 
                                    hover:cursor-pointer no-underline">ลงทะเบียน</Link>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Forgetpassword




//------------------- How to fix Footer to sticky to bottom -------------------------
// -----------------------------html h-full flex flex-col----------------------------
// ------------------------------------body h-full ----------------------------------
// -----------------------#root bg-red-200 h-full flex flex-col ---------------------