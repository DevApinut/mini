import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
// import { Document, Page,pdfjs } from 'react-pdf';
import { useEffect, useReducer } from "react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { pdfjs } from 'react-pdf';
import { Link } from "react-router-dom";
import axios from "axios";



pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


const RequestElectricalOff = () => {
    useEffect(() => {

        fetch()
    }, [])
    const initials = {
        linkSubstation: [["ไม่มีข้อมูล"]]
        ,substationSelect:[""]

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

    const fetch = () => {
        axios.get(`https://script.google.com/macros/s/AKfycbwHWQJL61H2pTN8FRyoHQfZM0DyOhbM3x1vpRXRKUDnTeuirGsm3U_-CrlSPZWPyuzb/exec`)
            .then(res => {
                if(state.substationSelect[0] == ""){
                    dispatch({ type: "setstate", payload: { name: "substationSelect", value: res.data.data_substation_diagram_out[0]} })
                }
                console.log(res.data.data_substation_diagram_out)
                dispatch({ type: "setstate", payload: { name: "linkSubstation", value: res.data.data_substation_diagram_out } })
            })
    }
    console.log(state.substationSelect[2])
    return (
        <>
            <Navbar1 />
            <div className="grow container">

                <div className="flex justify-center flex-col border rounded w-full py-2 my-3">
                    <div className="text-center">ขออนุมัติดับไฟ</div>
                    <div className="flex justify-centerw-full ">
                        <div className="flex justify-center w-full">

                            <div className="flex justify-center flex-col mx-1 w-1/3">
                                <div className="text-center text-red-800 font-semibold">เลือกสภานี</div>
                                <select className="border rounded-md" onChange={(e)=>{dispatch({type:"setstate",payload:{name:"substationSelect",value:e.target.value.split(",")}})}}>
                                    {state.linkSubstation.map((data: any, inde: number) => {
                                        return (
                                            <option value={data}>{data[0]}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="flex justify-center flex-col mx-1 w-1/3">
                                <div className="text-center text-red-800 font-semibold">เลือกบันทึก</div>
                                <select className="border rounded-md" >
                                    <option>test1</option>
                                    <option>test1</option>
                                    <option>test1</option>
                                </select>
                            </div>
                            <div className="flex justify-center flex-col mx-1 w-1/3">
                                <div className="text-center text-red-800 font-semibold">ชื่อบันทึก</div>
                                <div>
                                    <input type="input" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={`https://drive.usercontent.google.com/download?id=${state.substationSelect[2]}&export=download`}>Dowload</Link>
                <iframe src={`https://drive.google.com/file/d/${state.substationSelect[2]}/preview`} width="100%" height="50%" allow="autoplay"></iframe>


                <div>

                </div>

            </div >
            <Footer />
        </>
    )
}

export default RequestElectricalOff;