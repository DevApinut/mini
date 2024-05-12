import { useEffect } from "react"
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";

const Login = () => {

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
                                <div className="my-3">
                                    <div>ชื่อผู้ใช้</div>
                                    <input type="text" />
                                </div>
                                <div className="my-3" >
                                    <div>รหัสผ่าน</div>
                                    <input type="password" />
                                </div>
                                <div className="flex justify-center w-full mt-4">
                                    <div className="mx-4 border w-full text-center p-2 rounded-xl 
                                    bg-green-400 hover:cursor-pointer hover:text-slate-50"
                                    >เข้าสู่ระบบ</div>
                                </div>
                                <hr></hr>
                                <div className="flex justify-center mb-10">
                                    <Link to={"/Register"} className="mx-3 hover:text-yellow-50 
                                    hover:cursor-pointer no-underline">ลงทะเบียน</Link>
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

export default Login