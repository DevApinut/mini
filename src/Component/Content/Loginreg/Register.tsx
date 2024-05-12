import { useEffect } from "react"
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";

const Register = () => {
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
                            <div className="group-for-input-tailwind">
                                <div className="input-register">
                                    <div>ชื่อ</div>
                                    <input type="text" />
                                </div>
                                <div className="input-register">
                                    <div>นามสกุล</div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="group-for-input-tailwind">
                                <div className="input-register">
                                    <div>เลขประจำตัว</div>
                                    <input type="text" />
                                </div>
                                <div className="input-register">
                                    <div>อีเมลล์</div>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="flex justify-center w-full mt-4">
                                <div className="mx-4 border w-full text-center p-2 rounded-xl 
                                    bg-green-400 hover:cursor-pointer hover:text-slate-50"
                                >ลงทะเบียน</div>
                            </div>
                            <hr></hr>
                            <div className="flex justify-center mb-10">
                                <Link to={"/Login"} className="mx-3 hover:text-yellow-50 
                                    hover:cursor-pointer no-underline">เข้าสู่ระบบ</Link>
                                <Link to={"#"} className="mx-3 hover:text-yellow-50 
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
