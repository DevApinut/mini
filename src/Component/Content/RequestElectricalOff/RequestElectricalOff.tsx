import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
// import { Document, Page,pdfjs } from 'react-pdf';
import { useEffect, useReducer } from "react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { pdfjs } from 'react-pdf';
import { Link } from "react-router-dom";
import axios from "axios";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from "dayjs";
import newAdapter from "../Webscraping/Test";
import ExportDocx from "./ExportDocx";



pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


const RequestElectricalOff = () => {
    useEffect(() => {

        fetch("")
    }, [])
    const initials = {
        linkSubstation: [["ไม่มีข้อมูล"]]
        , substationSelect: [""]
        , SwitchGear: [""]
        , SwitchGearCheckbox: [""]
        , SwitchYard: [""]
        , SwitchYardCheckbox: [""]
        , FromLetter: ""
        , Destination: ""
        , NumberLetter: ""
        , DateLetter: ""
        , NameLetter: ""
        , RequestElectoff: [[{ contentForDetail: "", personelControl: "", contactPersonelControl: "", positionPersonelControl: "", personelCoordinate: "", contactPersonelCoordinate: "", numberPersonelCoordinate: "" }, { requestOffDetail: "", fromDate: "", destinationDate: "", typeOfRequestOff: "" }]]
        , indexSelect: 0
        , otherData: [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]]
        , personalInformation: [""]

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

    const fetch = (e: any) => {
        axios.get(`https://script.google.com/macros/s/AKfycbwHWQJL61H2pTN8FRyoHQfZM0DyOhbM3x1vpRXRKUDnTeuirGsm3U_-CrlSPZWPyuzb/exec`, {
            params: {
                Substation: e.split(",")[1]
                // Substation: state.substationSelect[1]
            }
        })
            .then(res => {
                console.log(res.data)
                if (state.substationSelect[0] == "") {
                    dispatch({ type: "setstate", payload: { name: "substationSelect", value: res.data.data_substation_diagram_out[0] } })
                }
                dispatch({ type: "setstate", payload: { name: "linkSubstation", value: res.data.data_substation_diagram_out } })
                dispatch({ type: "setstate", payload: { name: "SwitchGear", value: res.data.Switchgear } })
                dispatch({ type: "setstate", payload: { name: "SwitchYard", value: res.data.SwitchYard } })

                let SwitchGear_Checkbox = res.data.Switchgear.map((data: any, index: number) => {
                    return (
                        data.map((data1: any, index1: number) => {
                            if (index1 > 1 && data1 !== "" && data1.slice(0, 3) == res.data.Test) return [true, data1]
                            else return [false, data1]
                        })
                    )
                })
                let SwitchYard_Checkbox = res.data.SwitchYard.map((data: any, index: number) => {
                    return (
                        data.map((data1: any, index1: number) => {
                            if (index1 > 1 && data1 !== "" && data1.slice(0, 3) == res.data.Test) return [true, data1]
                            else return [false, data1]
                        })
                    )

                })
                dispatch({ type: "setstate", payload: { name: "SwitchGearCheckbox", value: SwitchGear_Checkbox } })
                dispatch({ type: "setstate", payload: { name: "SwitchYardCheckbox", value: SwitchYard_Checkbox } })
                dispatch({ type: "setstate", payload: { name: "otherData", value: res.data.Data_Other_data } })
                dispatch({ type: "setstate", payload: { name: "personalInformation", value: res.data.Data_personal } })
            })
    }

    const addnewrequest = (index: any) => {
        let Array_data = [...state.RequestElectoff]
        Array_data.splice(index + 1, 0, ["", ""])
        console.log(Array_data)
        dispatch({ type: "setstate", payload: { name: "RequestElectoff", value: Array_data } })

    }
    const changestate = (index: any, index1: any, event: any) => {
        let Array_data = [...state.RequestElectoff]
        Array_data[index][index1] = event.target.value
        dispatch({ type: "setstate", payload: { name: "RequestElectoff", value: Array_data } })

    }
    const InsertMessage = (selectInsert: any, numberTypeinFeeder: number, text: string) => {
        let Array_data = [...state.RequestElectoff]
        // Array_data[selectInsert][1] = `${Array_data[selectInsert][1]}test`

        if (text == "SwitchGear") {
            let array_Data1 = [...state.SwitchGearCheckbox]
            let text = ""

            if (Array_data[selectInsert][1].requestOffDetail == "") text = `${selectInsert + 1}. สฟฟ.${state.substationSelect[0]}`

            array_Data1[numberTypeinFeeder].map((word: any) => {
                if (word[0] == true) {
                    if ((word[1][word[1].length - 4] == "B") && (array_Data1[1][1][1] == "AIS")) text = `${text},ปลด CB 22kV รหัส ${word[1]} พร้อม Out Service`
                    if ((word[1][word[1].length - 4] == "B") && (array_Data1[1][1][1] == "GIS")) text = `${text},ปลด CB 22kV รหัส ${word[1]}`
                    else if (word[1][word[1].length - 4] == "G") text = `${text},Close ES รหัส ${word[1]}`
                    else if (word[1][word[1].length - 4] == "S") text = `${text},ปลด DS รหัส ${word[1]}`
                    // console.log(word[1][word[1].length - 4])
                    // console.log(word[1])
                    // console.log(array_Data1[1][1])
                }
            });
            // console.log(text)
            Array_data[selectInsert][1].requestOffDetail = `${Array_data[selectInsert][1].requestOffDetail}${text}`
        }
        else if (text == "SwitchYard") {
            let array_Data1 = [...state.SwitchYardCheckbox]
            let text = ""
            if (Array_data[selectInsert][1].requestOffDetail == "") text = `${selectInsert + 1}. สฟฟ.${state.substationSelect[0]}`
            array_Data1[numberTypeinFeeder].map((word: any) => {
                if (word[0] == true) {
                    if (word[1][word[1].length - 4] == "B") text = `${text},ปลด CB 115kV รหัส ${word[1]}`
                    else if (word[1][word[1].length - 4] == "G") text = `${text},Close ES รหัส ${word[1]}`
                    else if (word[1][word[1].length - 4] == "S") text = `${text},ปลด DS รหัส ${word[1]}`
                    console.log(word[1][word[1].length - 4])
                }
            });
            // console.log(text)
            Array_data[selectInsert][1].requestOffDetail = `${Array_data[selectInsert][1].requestOffDetail}${text}`
        }

        dispatch({ type: "setstate", payload: { name: "RequestElectoff", value: Array_data } })
    }
    const changestateCheck = (index: number, typeofFeeder: number, check: any, nameType: any) => {
        if (nameType === "SwitchGear") {
            let Array_data = [...state.SwitchGearCheckbox]
            Array_data[index][typeofFeeder][0] = check
            dispatch({ type: "setstate", payload: { name: "SwitchGearCheckbox", value: Array_data } })
        } else if (nameType === "SwitchYard") {
            let Array_data = [...state.SwitchYardCheckbox]
            Array_data[index][typeofFeeder][0] = check
            dispatch({ type: "setstate", payload: { name: "SwitchYardCheckbox", value: Array_data } })
        }
    }
    console.log(state.indexSelect)

    const setstateOtherData = (valueData: string, text: any) => {
        let ArrayData = [...state.otherData]
        state.otherData.map((data: any, index: number) => {
            if (data[0] == text) {
                ArrayData[index][1] = valueData
            } else {

            }
        })
        dispatch({ type: "setstate", payload: { name: "SwitchYardCheckbox", value: ArrayData } })

    }

    return (
        <>
            <Navbar1 />
            <div className="grow container flex flex-col">

                <div className="flex justify-center flex-col border rounded w-full py-2 my-3">
                    <div className="text-center">ขออนุมัติดับไฟ</div>
                    <div className="flex justify-centerw-full ">
                        <div className="flex justify-center w-full">

                            <div className="flex justify-center flex-col mx-1 w-1/3">
                                <div className="text-center text-red-800 font-semibold">เลือกสถานี</div>
                                <select className="border rounded-md" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "substationSelect", value: e.target.value.split(",") } }); fetch(e.target.value); }}>
                                    {state.linkSubstation.map((data: any, index: number) => {
                                        return (
                                            <option value={data}>{data[0]}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="flex justify-center flex-col mx-1 w-1/3">
                                <div className="text-center text-red-800 font-semibold">เลือกบันทึก</div>
                                <select className="border rounded-md" >
                                    <option>ไม่มีบันทึก</option>
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

                <div className="flex justify-start my-2">
                    <div className="mx-2">
                        <Link to={`https://drive.usercontent.google.com/download?id=${state.substationSelect[2]}&export=download`} className="btn btn-success">Dowload</Link>
                    </div>
                    <div className="btn btn-primary mx-2" onClick={() => { ExportDocx() }}>
                        Docx
                    </div>
                </div>
                <div className="flex justify-center w-full h-96">
                    <iframe src={`https://drive.google.com/file/d/${state.substationSelect[2]}/preview`} width="100%" height="100%" allow="autoplay"></iframe>
                </div>



                {/* ------------------------------------ Switch Yard ------------------------------------------ */}
                <div>
                    <div className="text-center font-bold my-3">SwitchYard 115 kV</div>
                    <div className="flex flex-wrap justify-start">
                        {state.SwitchYardCheckbox.map((data: any, index: number) => {
                            let strtoArray = [...data]
                            return (
                                <div className="flex flex-col border m-2">
                                    {strtoArray.map((data1: any, index1: number) => {
                                        return (
                                            <>
                                                {data1[1].slice(0, 3) == state.substationSelect[1] && data1[1].length > 3 && <div className="bg-slate-200 flex justify-center items-center">
                                                    <input type="checkbox" className="h-4 w-4 mx-1" checked={data1[0]} onChange={(e) => { changestateCheck(index, index1, e.target.checked, "SwitchYard") }} />
                                                    <div className="flex justify-center">{data1}</div>
                                                </div>}
                                            </>
                                        )
                                    })}
                                    <div className="text-center border rounded-xl bg-green-200 my-2 hover:cursor-pointer"
                                        onClick={() => { InsertMessage(state.indexSelect, index, "SwitchYard") }}>select</div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div >


                {/* ------------------------------------ Switch Gear ------------------------------------------ */}

                <div>
                    <div className="text-center font-bold my-3">SwitchGear 22/33 kV</div>
                    <div className="flex flex-wrap justify-start">
                        {state.SwitchGearCheckbox.map((data: any, index: number) => {
                            let strtoArray = [...data]
                            return (
                                <div className="flex flex-col border m-2">
                                    {strtoArray.map((data1: any, index1: number) => {

                                        return (
                                            <>
                                                {data1[1].slice(0, 3) == state.substationSelect[1] && data1[1].length > 3 && <div className="bg-slate-200 flex justify-center items-center">
                                                    <input type="checkbox" className="h-4 w-4 mx-1" checked={data1[0]} onChange={(e) => { changestateCheck(index, index1, e.target.checked, "SwitchGear") }} />
                                                    <div className="flex justify-center">{data1[1]}</div>
                                                </div>}
                                            </>
                                        )
                                    })}
                                    <div className="text-center border rounded-xl bg-green-200 my-2 hover:cursor-pointer"
                                        onClick={() => { InsertMessage(state.indexSelect, index, "SwitchGear") }}>select</div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div >
                <div className="w-full flex-col">
                    <div className="text-center ">รายงานการขอดับไฟ</div>
                    <div className="flex w-full my-2">
                        <div className="flex w-1/2 mx-2">
                            <label className="bg-slate-200  w-10 rounded-l-lg text-center">จาก</label>
                            <input type="text" className="border rounded-none rounded-r-lg" onChange={(e) => { setstateOtherData(e.target.value, "จาก") }} value={state.otherData[0][1]} />
                        </div>
                        <div className="flex w-1/2 mx-2">
                            <label className="bg-slate-200  w-10 rounded-l-lg text-center">ถึง</label>
                            <input type="text" className="border rounded-none rounded-r-lg" onChange={(e) => { setstateOtherData(e.target.value, "ถึง") }} value={state.otherData[1][1]} />
                        </div>
                    </div>
                    <div className="flex w-full my-2">
                        <div className="flex w-1/2 mx-2">
                            <label className="bg-slate-200  w-10 rounded-l-lg text-center">เลขที่</label>
                            <input type="text" className="border rounded-none rounded-r-lg" onChange={(e) => { setstateOtherData(e.target.value, "เลขที่") }} value={state.otherData[2][1]} />
                        </div>
                        <div className="flex w-1/2 mx-2">
                            <label className="bg-slate-200  w-10 rounded-l-lg text-center">วันที่</label>
                            <input type="text" className="border rounded-none rounded-r-lg" value={state.otherData[3][1]} />
                        </div>
                    </div>
                    <div className="flex my-2">
                        <div className="flex mx-2 w-full">
                            <label className="bg-slate-200  w-10 rounded-l-lg text-center">เรื่อง</label>
                            <input type="text" className="border rounded-none rounded-r-lg" />
                        </div>
                    </div>
                    <div className="flex my-2">
                        <div className="flex mx-2 w-full">
                            <label className="bg-slate-200  w-10 rounded-l-lg text-center">เรียน</label>
                            <input type="text" className="border rounded-none rounded-r-lg" />
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap grow">
                        <div className="grid grid-cols-2 my-2">
                            <div className="text-center items-center flex justify-start">เนื่องด้วยวันที่</div>
                            <div className="mx-2 justify-self-end">
                                <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                    <DatePicker
                                        label="เลือกวันที่"
                                        format="DD MMMYYYY"
                                        onChange={(newValue) => { }}
                                        defaultValue={dayjs(new Date)}
                                        value={dayjs(new Date)}
                                        slotProps={{ textField: { size: 'small' } }}

                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 grow my-2">
                            <div className="text-center items-center flex justify-start">ถึงวันที่</div>
                            <div className="mx-2 justify-self-end">
                                <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                    <DatePicker
                                        label="เลือกวันที่"
                                        format="DD MMMYYYY"
                                        onChange={(newValue) => { }}
                                        defaultValue={dayjs(new Date)}
                                        value={dayjs(new Date)}
                                        slotProps={{ textField: { size: 'small' } }}

                                    />
                                </LocalizationProvider>
                            </div>
                        </div>



                        <div>
                            <input type="text" className="border" />
                        </div>

                        <div>
                            จะทำการขอดับไฟ
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" id="LCC_Lamp" />
                            <label className="form-check-label" htmlFor="LCC_Lamp">22/33 kV</label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" id="LCC_Lamp" />
                            <label className="form-check-label" htmlFor="LCC_Lamp">115 kV</label>
                        </div>
                        <div >พร้อมแนบผังจุดปฏิบัติงานมาด้วย จำนวน</div>
                        <div className="w-10">
                            <input type="text" className="border" />
                        </div>
                        <div>
                            ฉบับ โดยมีรายละเอียดที่ปฏิบัติงานดังนี้
                        </div>
                        <div className="w-full">
                            {
                                state.RequestElectoff.map((data: any, index: any) => {
                                    return (
                                        <>
                                            <div className="flex justify-start flex-col border p-3 rounded-xl my-2">
                                                <div className="flex justify-start items-center">
                                                    <input type="radio" className="w-4 mx-2" name="select"
                                                        value={index}
                                                        onChange={(e) => { dispatch({ type: "setstate", payload: { name: "indexSelect", value: e.target.value } }) }} id={`X_${index}`} />
                                                    <div>เลือก</div>
                                                </div>
                                                <div className="w-full flex my-2 flex-col">
                                                    <div className="flex justify-center w-full">
                                                        <label className="bg-slate-200 w-10 rounded-l-lg text-center items-center flex justify-center">{`${index + 1}.1`}</label>
                                                        <textarea className="border w-full" onChange={(e) => { changestate(index, 0, e) }} value={data[0].contentForDetail}></textarea>
                                                    </div>
                                                    <div className="flex justify-start flex-wrap my-2">
                                                        <div className="flex justify-start w-full flex-wrap my-2">
                                                            <div className="flex justify-center items-center">
                                                                <input type="checkbox" className="w-4 h-4" />
                                                                <div className="flex justify-center items-center my-1">ผู้ควบคุมงาน</div>
                                                            </div>

                                                            <select className="w-48 border rounded-lg grow my-1">
                                                                {state.personalInformation.map((data: any) => {
                                                                    return (
                                                                        <option value={data[1]}>{data[1]}</option>
                                                                    )
                                                                })}

                                                            </select>
                                                            <div className="flex justify-center grow flex-row m-2 ">
                                                                <label className="border rounded-l-lg bg-slate-200 w-24 text-center">ตำเเหน่ง</label>
                                                                <input type="text" className="border rounded-none rounded-r-xl"
                                                                />
                                                            </div>
                                                            <div className="flex justify-center grow flex-row m-2">
                                                                <label className="border rounded-l-lg bg-slate-200 w-24 text-center">เบอร์โทร</label>
                                                                <input type="text" className="border rounded-none rounded-r-xl"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-start w-full flex-wrap my-2">
                                                            <div className="flex justify-center items-center">
                                                                <input type="checkbox" className="w-4 h-4" />
                                                                <div className="flex justify-center items-center my-1">ผู้ประสานงาน</div>
                                                            </div>
                                                            <select className="w-48 border rounded-lg grow my-2">
                                                                <option>A</option>
                                                                <option>B</option>
                                                                <option>C</option>
                                                            </select>
                                                            <div className="flex justify-center grow flex-row m-2">
                                                                <label className="border rounded-l-lg bg-slate-200 w-24 text-center">ตำเเหน่ง</label>
                                                                <input type="text" className="border rounded-none rounded-r-xl"
                                                                />
                                                            </div>
                                                            <div className="flex justify-center grow flex-row m-2">
                                                                <label className="border rounded-l-lg bg-slate-200 w-24 text-center">เบอร์โทร</label>
                                                                <input type="text" className="border rounded-none rounded-r-xl"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="w-full flex my-2 flex-col">
                                                    <div className="flex justify-center">
                                                        <label className="bg-slate-200  w-10 rounded-l-lg text-center flex justify-center text-center items-center">{`${index + 1}.2`}</label>
                                                        <textarea className="border w-full" onChange={(e) => { changestate(index, 1, e) }} value={data[1].requestOffDetail}></textarea>
                                                    </div>

                                                    <div className="flex items-center my-2">
                                                        <div className="grid grid-cols-2 my-2 grow">
                                                            <div className="text-center items-center flex justify-start">วันที่</div>
                                                            <div className="mx-2 justify-self-end">
                                                                <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                                                    <DatePicker
                                                                        label="เลือกวันที่"
                                                                        format="DD MMMYYYY"
                                                                        onChange={(newValue) => { }}
                                                                        defaultValue={dayjs(new Date)}
                                                                        value={dayjs(new Date)}
                                                                        slotProps={{ textField: { size: 'small' } }}

                                                                    />
                                                                </LocalizationProvider>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 grow my-2">
                                                            <div className="text-center items-center flex justify-start">ถึงวันที่</div>
                                                            <div className="mx-2 justify-self-end">
                                                                <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                                                    <DatePicker
                                                                        label="เลือกวันที่"
                                                                        format="DD MMMYYYY"
                                                                        onChange={(newValue) => { }}
                                                                        defaultValue={dayjs(new Date)}
                                                                        value={dayjs(new Date)}
                                                                        slotProps={{ textField: { size: 'small' } }}

                                                                    />
                                                                </LocalizationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <select className="border rounded h-full">
                                                        {state.otherData.map((data: any, index: number) => {
                                                            if (data[0] == "การขอดับไฟ") {
                                                                return (
                                                                    data.map((data1: any, index1: number) => {
                                                                        if (index1 > 0) {
                                                                            return (
                                                                                <option >{data1}</option>
                                                                            )
                                                                        }
                                                                    })
                                                                )

                                                            }
                                                        })}
                                                    </select>



                                                </div>
                                                <div>
                                                    <div className="btn btn-success" onClick={() => { addnewrequest(index) }}>NEW</div>
                                                </div>


                                            </div>
                                        </>

                                    )
                                })
                            }
                        </div>


                    </div>
                </div>

            </div >
            <Footer />
        </>
    )
}

export default RequestElectricalOff;