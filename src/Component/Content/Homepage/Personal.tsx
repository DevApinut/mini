import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";
import { useEffect, useRef } from "react";
import ProfilePicture from "@dsalvagni/react-profile-picture"
import "@dsalvagni/react-profile-picture/dist/ProfilePicture.css"
import image22 from "../../image/images.jpg"

const Personel = () => {
    const image_profile = useRef<any>()

    useEffect(() => {
        document.title = "บุคลากร | Personel"
    }, [])



    // const getBase64 = () => {
    //     return new Promise(resolve => {
    //         let fileInfo;
    //         let baseURL = null;
    //         // Make new FileReader
    //         let reader = new FileReader();

    //         // Convert the file to base64 text
    //         reader.readAsDataURL(image22);

    //         // on reader load somthing...
    //         reader.onload = () => {
    //             // Make a fileInfo Object
    //             console.log("Called", reader);
    //             baseURL = reader.result;
    //             console.log(baseURL);
    //             resolve(baseURL);
    //         };
    //         console.log(fileInfo);
    //     });
    // };


    const image_handle = () => {
        // const image = getBase64(image22)
        // console.log(image)

    }
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
                        <div >
                            <div className="flex justify-center my-0">
                                <button className="w-14 bg-green-400 mx-2 rounded-xl text-slate-50"
                                    onClick={image_handle}>ok</button>
                                <button className="w-14 bg-red-400 mx-2 rounded-xl text-slate-50">Cancel</button>
                            </div>
                            <div className="m-0 h-48">
                                <ProfilePicture
                                    ref={image_profile}
                                    frameFormat={"circle"}
                                    useHelper={true}
                                    debug={true}
                                />
                            </div>

                        </div>

                        <div className="bg-red-200 w-24 rounded-full relative" >
                            <img src={'https://assets.ch3plus.com/newsch/2022/09/674947308478.JPG'}></img>
                            <div className="absolute bottom-0 text-3xl font-bold bg-slate-50 w-full opacity-80 
                            overflow-hidden text-center text-green-700 hover:cursor-pointer">+</div>
                        </div>
                        <div className="flex flex-col justify-center mx-4">
                            <div className="flex justify-start">
                                <div className="w-1/4">ชื่อ-สกุล</div>
                                <input className="w-3/4 border" type="text" />
                            </div>
                            <div className="flex justify-start">
                                <div className="w-1/4">ตำเเหน่ง</div>
                                <input className="w-3/4 border" type="text" />
                            </div>
                            <div className="flex justify-start">
                                <div className="w-1/4">ติดต่อ</div>
                                <input className="w-3/4 border" type="text" />
                            </div>

                        </div>
                    </div>


                </div>

            </div>
            <Footer />

        </>
    )
}

export default Personel;