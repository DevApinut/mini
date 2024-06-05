import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
import { useEffect, useRef, createRef, useState } from "react"
import ProfilePicture from "@dsalvagni/react-profile-picture"
import "@dsalvagni/react-profile-picture/dist/ProfilePicture.css"
import image22 from "../../image/PIC43.jpg"
import Avatar from 'react-avatar-edit'
import { Point, Area } from "react-easy-crop/types";

const Personel = () => {
    const personel_infomation = [{name:"Apinut Kaewmunee",position:"Engineering",contact:"0819635567"},{}]
    const image_profile = createRef<any>()
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
        console.log(croppedArea, croppedAreaPixels);
    };

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

    function getBase64(file: any) {



        // let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        // reader.readAsDataURL(file);
        reader.onload = function () {
            //me.modelvalue = reader.result;
            console.log(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }



    const [preview, setPreview] = useState("")

    const addPersonel = (index:number) =>{

    }
    const delPersonel = (index:number) =>{

    }
    const editPersonel = () =>{

    }

    const onClose = () => {
        setPreview("")
    }

    const onCrop = (preview: any) => {
        setPreview(preview)
    }

    const onBeforeFileLoad = (elem: any) => {
        if (elem.target.files[0].size > 71680) {
            alert("File is too big!");
            elem.target.value = "";
        };
    }
    return (
        <>
            <Navbar1 />
            <div className="grow container">
                <div className="text-center text-xl font-bold">บุคลากรในแผนก</div>
                <div className="container-personel">
                    <div className="personel-infomation">
                        <img src={preview} className="w-24 h-24 bg-red-200 rounded-full"></img>
                        <div className="flex flex-col justify-center mx-4">
                            <div className="text-base">นาย อภินัทธ์ แก้วมูณี (โดนัท)</div>
                            <div className="text-sm">ตำเแหน่ง วศก.4 ผสม.กสฟ.ต.1</div>
                            <div className="text-sm">ติดต่อ 081-9635567</div>
                            <div>
                                <button onClick={()=>{addPersonel(2)}} className="mx-1 px-3 bg-green-200 rounded-xl">+</button>
                                <button onClick={()=>{delPersonel(2)}} className="mx-1 px-3 bg-red-200 rounded-xl">-</button>
                                <button onClick={()=>{editPersonel()}} className="mx-1 px-3 bg-yellow-200 rounded-xl">Ed</button>
                            </div>
                        </div>
                    </div>

                    <div className="personel-infomation ">
                        <div >
                            <div className="m-0 h-48">
                                <div className="flex justify-center">
                                    <Avatar
                                        width={150}
                                        height={150}
                                        onCrop={onCrop}
                                        onClose={onClose}
                                        onBeforeFileLoad={onBeforeFileLoad}
                                        src={image22}
                                    />
                                    {/* <img src={preview} alt="Preview" /> */}
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col justify-center mx-4">
                            <div className="flex justify-start flex-column">
                                <div className="w-full text-sm">ชื่อ-สกุล</div>
                                <input className="w-full border" type="text" />
                            </div>
                            <div className="flex justify-start flex-column">
                                <div className="w-full text-sm">ตำเเหน่ง</div>
                                <input className="w-full border" type="text" />
                            </div>
                            <div className="flex justify-start flex-column">
                                <div className="w-full text-sm">ติดต่อ</div>
                                <input className="w-full border" type="text" />
                            </div>
                            <div className="flex justify-center my-2 ">
                                <button className="w-14 bg-green-400 mx-2 rounded-xl text-slate-50"
                                    // onClick={image_handle}>ok</button>
                                    onClick={() => getBase64(image_profile.current)}>ok</button>
                                <button className="w-14 bg-red-400 mx-2 rounded-xl text-slate-50">Cancel</button>
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