import { useNavigate } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../../image/warinig.jpg'
import image2 from '../../image/PEA_Solar_66.jpg'
import image3 from '../../image/app.jpg'
import PM_substatin from '../../image/PM_substation.jpg'
import PM_AVR from '../../image/PM_AVR.jpg'
import Repair from '../../image/repair.jpg'
import Powertransformer from '../../image/power_transformer.jpg'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlay, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const Home = () => {

    const navigate = useNavigate();
    const [Headernew, setHeadernew] = useState([true, false, false])

    useEffect(() => {
        document.title = 'หน้าหลัก | Home Page';
    }, []);

    const class_select_border = Headernew.map((data: any, index: number) => {
        if (data == false) {
            return ("")
        } else {
            return ("border-b-8 border-y-lime-500")
        }
    })

    console.log(class_select_border)
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: "no-repeat",
        height: '25vw',
        marginTop: "5px"
    }
    const slideImages = [
        {
            url: `${image1}`,
            caption: '/Dashboard',

        },
        {
            url: `${image2}`,
            caption: 'Slide 2'
        },
        {
            url: `${image3}`,
            caption: 'Slide 3'
        },
    ];

    const handle_select_header_news = (number: number) => {
        let array = [...Headernew.map((data: any) => false)]
        array[number] = true
        console.log(array)
        setHeadernew(array)
    }


    return (
        <>
            <div className="container flex flex-col ">
                <Navbar1 />
                <div className="mt-2 shrink">
                    <div className="container ">
                        <Slide >
                            {slideImages.map((slideImage, index) => (
                                <div key={index}>
                                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }} >
                                        {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                                    </div>
                                </div>
                            ))}
                        </Slide>
                        <div className="Header-welcome">
                            <h1 className="subHeader-welcome1">แผนกสวิตช์เกียร์และหม้อแปลงไฟฟ้ากำลัง</h1>
                            <div className="subHeader-welcome2">การไฟฟ้าส่วนภูมิภาค เขต 1 (ภาคใต้) จังหวัดเพชรบุรี</div>
                        </div>
                        <div>
                            <div className="Header-news">
                                <div className={`subHeader-news ${class_select_border[0]}`} onClick={(e) => { handle_select_header_news(0) }}>ภาพการดำเนินงาน</div>
                                <div className={`subHeader-news ${class_select_border[1]}`} onClick={(e) => { handle_select_header_news(1) }}>ภาพกิจกรรมเพื่อสังคม</div>
                                <div className={`subHeader-news ${class_select_border[2]}`} onClick={(e) => { handle_select_header_news(2) }}>ผลงาน/รางวัลในแผนก</div>
                            </div>
                            {Headernew[0] && <div className="container-news relative">
                                <div className="content-news ">
                                    <div className="sub-content-news">
                                        <div className="h-full">
                                            <img src={PM_substatin} width={"100%"} height={"100%"} className="border h-full image-hover"></img>
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <div className="Head_news">
                                                งานบำรุงรักษาสถานีประจำปี 2567
                                            </div>
                                            <div className="flex justify-between my-2">
                                                <div><Link to={"#"} className="no-underline text-slate-950 hover:border hover:p-1 hover:bg-slate-800 hover:rounded-xl hover:text-slate-50 ">อ่านรายระเอียด...</Link></div>
                                                <div className="text-sm ">ข้อมูล 8 พ.ค. 67</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-news ">
                                    <div className="sub-content-news">
                                        <div className="h-full">
                                            <img src={PM_AVR} width={"100%"} height={"100%"} className="border h-full image-hover"></img>
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <div className="Head_news">
                                                งานบำรุงรักษา AVR ประจำปี 2567
                                            </div>
                                            <div className="flex justify-between my-2">
                                                <div><Link to={"#"} className="no-underline text-slate-950 hover:border hover:p-1 hover:bg-slate-800 hover:rounded-xl hover:text-slate-50 ">อ่านรายระเอียด...</Link></div>
                                                <div className="text-sm ">ข้อมูล 8 พ.ค. 67</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-news ">
                                    <div className="sub-content-news">
                                        <div className="h-full">
                                            <img src={Repair} width={"100%"} height={"100%"} className="border h-full image-hover"></img>
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <div className="Head_news">
                                                งานซ่อมแซมเเก้ไขอุปกรณ์ชำรุด
                                            </div>
                                            <div className="flex justify-between my-2">
                                                <div><Link to={"#"} className="no-underline text-slate-950 hover:border hover:p-1 hover:bg-slate-800 hover:rounded-xl hover:text-slate-50 ">อ่านรายระเอียด...</Link></div>
                                                <div className="text-sm ">ข้อมูล 8 พ.ค. 67</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-news ">
                                    <div className="sub-content-news">
                                        <div className="h-full">
                                            <img src={Powertransformer} width={"100%"} height={"100%"} className="border h-full image-hover"></img>
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <div className="Head_news">
                                                ซ่อมรั่วหม้อแปลงไฟฟ้ากำลัง
                                            </div>
                                            <div className="flex justify-between my-2">
                                                <div><Link to={"#"} className="no-underline text-slate-950 hover:border hover:p-1 hover:bg-slate-800 hover:rounded-xl hover:text-slate-50 ">อ่านรายระเอียด...</Link></div>
                                                <div className="text-sm ">ข้อมูล 8 พ.ค. 67</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="symbolofdata">
                                    <FontAwesomeIcon icon={faChevronRight}
                                        className="border font-bold text-slate-950 bg-slate-50 p-2 rounded-full hover:cursor-pointer hover:text-slate-50 hover:bg-black"
                                        onClick={(e) => { }}
                                    />
                                </div>
                                <div className="read_other">อ่านเพิ่มเติม</div>
                            </div>}
                            {Headernew[1] && <div className="container-news relative">
                                <div className="content-news ">
                                    <div className="sub-content-news">
                                        <div className="h-full">
                                            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6mJjkb4rTsVlefy0lZm5v_Xg3-HGGQtxzvPHFjBNeA&s'} width={"100%"} height={"100%"} className="border h-full image-hover"></img>
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <div className="Head_news">
                                                กิจกรรมปลูกป่า
                                            </div>
                                            <div className="flex justify-between my-2">
                                                <div><Link to={"#"} className="no-underline text-slate-950 hover:border hover:p-1 hover:bg-slate-800 hover:rounded-xl hover:text-slate-50 ">อ่านรายระเอียด...</Link></div>
                                                <div className="text-sm ">ข้อมูล 8 พ.ค. 67</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-news ">
                                    <div className="sub-content-news">
                                        <div className="h-full">
                                            <img src={'https://img.salehere.co.th/p/1200x0/2019/11/29/u6nxdo8goiwp.jpg'} width={"100%"} height={"100%"} className="border h-full image-hover"></img>
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <div className="Head_news">
                                                กิจกรรมจิตรอาสา
                                            </div>
                                            <div className="flex justify-between my-2">
                                                <div><Link to={"#"} className="no-underline text-slate-950 hover:border hover:p-1 hover:bg-slate-800 hover:rounded-xl hover:text-slate-50 ">อ่านรายระเอียด...</Link></div>
                                                <div className="text-sm ">ข้อมูล 8 พ.ค. 67</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-news ">
                                    <div className="sub-content-news">
                                        <div className="h-full">
                                            <img src={'https://lh4.googleusercontent.com/proxy/TJU2n3r5pW1mki-TKGfhVIwHKQB4xc1Sk7we9Oevo3aQ_bN3s2B_wTu5g8nvm1y5ajcRBxQBrecHdJxf9YsI_lBB1ai-BT_qKswqQcMIyBSkgIb6eURkBE-lCTkw411P9L0meDBaRadnaQ'} width={"100%"} height={"100%"} className="border h-full image-hover"></img>
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <div className="Head_news">
                                                กิจกรรม 5 ส
                                            </div>
                                            <div className="flex justify-between my-2">
                                                <div><Link to={"#"} className="no-underline text-slate-950 hover:border hover:p-1 hover:bg-slate-800 hover:rounded-xl hover:text-slate-50 ">อ่านรายระเอียด...</Link></div>
                                                <div className="text-sm ">ข้อมูล 8 พ.ค. 67</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-news ">
                                    <div className="sub-content-news">
                                        <div className="h-full">
                                            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Fk1aLi2GJDMFqz8Ad0RaUFI7afpAKEbBeG9GRAER1A&s'} width={"100%"} height={"100%"} className="border h-full image-hover"></img>
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <div className="Head_news">
                                                กิจกรรม Green office
                                            </div>
                                            <div className="flex justify-between my-2">
                                                <div><Link to={"#"} className="no-underline text-slate-950 hover:border hover:p-1 hover:bg-slate-800 hover:rounded-xl hover:text-slate-50 ">อ่านรายระเอียด...</Link></div>
                                                <div className="text-sm ">ข้อมูล 8 พ.ค. 67</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="symbolofdata">
                                    <FontAwesomeIcon icon={faChevronRight}
                                        className="border font-bold text-slate-950 bg-slate-50 p-2 rounded-full hover:cursor-pointer hover:text-slate-50 hover:bg-black"
                                        onClick={(e) => { }}
                                    />
                                </div>
                                <div className="read_other">อ่านเพิ่มเติม</div>
                            </div>}
                            {Headernew[2] && <div className="container-news relative">
                                <div className="content-news ">
                                    <div className="sub-content-news">
                                        <div className="h-full">
                                            <img src={PM_substatin} width={"100%"} height={"100%"} className="border h-full image-hover"></img>
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <div className="Head_news">
                                                งานบำรุงรักษาสถานีประจำปี 2567
                                            </div>
                                            <div className="flex justify-between my-2">
                                                <div><Link to={"#"} className="no-underline text-slate-950 hover:border hover:p-1 hover:bg-slate-800 hover:rounded-xl hover:text-slate-50 ">อ่านรายระเอียด...</Link></div>
                                                <div className="text-sm ">ข้อมูล 8 พ.ค. 67</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-news ">
                                    <div className="sub-content-news">
                                        <div className="h-full">
                                            <img src={PM_AVR} width={"100%"} height={"100%"} className="border h-full image-hover"></img>
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <div className="Head_news">
                                                งานบำรุงรักษา AVR ประจำปี 2567
                                            </div>
                                            <div className="flex justify-between my-2">
                                                <div><Link to={"#"} className="no-underline text-slate-950 hover:border hover:p-1 hover:bg-slate-800 hover:rounded-xl hover:text-slate-50 ">อ่านรายระเอียด...</Link></div>
                                                <div className="text-sm ">ข้อมูล 8 พ.ค. 67</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-news ">
                                    <div className="sub-content-news">
                                        <div className="h-full">
                                            <img src={Repair} width={"100%"} height={"100%"} className="border h-full image-hover"></img>
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <div className="Head_news">
                                                งานซ่อมแซมเเก้ไขอุปกรณ์ชำรุด
                                            </div>
                                            <div className="flex justify-between my-2">
                                                <div><Link to={"#"} className="no-underline text-slate-950 hover:border hover:p-1 hover:bg-slate-800 hover:rounded-xl hover:text-slate-50 ">อ่านรายระเอียด...</Link></div>
                                                <div className="text-sm ">ข้อมูล 8 พ.ค. 67</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-news ">
                                    <div className="sub-content-news">
                                        <div className="h-full">
                                            <img src={Powertransformer} width={"100%"} height={"100%"} className="border h-full image-hover"></img>
                                        </div>
                                        <div className="flex flex-col mx-2">
                                            <div className="Head_news">
                                                ซ่อมรั่วหม้อแปลงไฟฟ้ากำลัง
                                            </div>
                                            <div className="flex justify-between my-2">
                                                <div><Link to={"#"} className="no-underline text-slate-950 hover:border hover:p-1 hover:bg-slate-800 hover:rounded-xl hover:text-slate-50 ">อ่านรายระเอียด...</Link></div>
                                                <div className="text-sm ">ข้อมูล 8 พ.ค. 67</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="symbolofdata">
                                    <FontAwesomeIcon icon={faChevronRight}
                                        className="border font-bold text-slate-950 bg-slate-50 p-2 rounded-full hover:cursor-pointer hover:text-slate-50 hover:bg-black"
                                        onClick={(e) => { }}
                                    />
                                </div>
                                <div className="read_other">อ่านเพิ่มเติม</div>
                            </div>}

                        </div>
                    </div>
                </div>
                <Footer />


            </div>


        </>
    )
}
export default Home