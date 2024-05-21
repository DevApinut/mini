import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
const Personel = () => {

    useEffect(()=>{
        document.title="บุคลากร | Personel"
    },[])
    return (
        <>
            <Navbar1 />
            <div className="grow container">
                <div className="text-center text-xl font-bold">บุคลากรในแผนก</div>
                <div className="container-personel">
                    <div className="personel-infomation">
                    <img src={'https://assets.ch3plus.com/newsch/2022/09/674947308478.JPG'} className="w-24 h-24 bg-red-200 rounded-full"></img>
                        <div className="flex flex-col justify-center mx-4">
                            <div className="text-base">นาย อภินัทธ์ แก้วมูณี (โดนัท)</div>
                            <div className="text-sm">ตำเแหน่ง วศก.4 ผสม.กสฟ.ต.1</div>
                            <div className="text-sm">ติดต่อ 081-9635567</div>
                        </div>
                    </div>
                    <div className="personel-infomation">
                    <img src={'https://assets.ch3plus.com/newsch/2022/09/674947308478.JPG'} className="w-24 h-24 bg-red-200 rounded-full"></img>
                        <div className="flex flex-col justify-center mx-4">
                            <div className="text-base">นาย อภินัทธ์ แก้วมูณี (โดนัท)</div>
                            <div className="text-sm">ตำเแหน่ง วศก.4 ผสม.กสฟ.ต.1</div>
                            <div className="text-sm">ติดต่อ 081-9635567</div>
                        </div>
                    </div>
                    <div className="personel-infomation">
                    <img src={'https://assets.ch3plus.com/newsch/2022/09/674947308478.JPG'} className="w-24 h-24 bg-red-200 rounded-full"></img>
                        <div className="flex flex-col justify-center mx-4">
                            <div className="text-base">นาย อภินัทธ์ แก้วมูณี (โดนัท)</div>
                            <div className="text-sm">ตำเแหน่ง วศก.4 ผสม.กสฟ.ต.1</div>
                            <div className="text-sm">ติดต่อ 081-9635567</div>
                        </div>
                    </div>
                    
                </div>

            </div>
            <Footer />

        </>
    )
}

export default Personel;