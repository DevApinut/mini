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
        , AreaReponability: [""]
        , RequestElectoff: [[{ contentForDetail: "ปฏิบัติงาน ...... ที่ ......", checkPersonelControl: true, personelControl: "", contactPersonelControl: "", positionPersonelControl: "", checkPersonelCoordinate: true, personelCoordinate: "", positionPersonelCoordinate: "", contactPersonelCoordinate: "" }, { requestOffDetail: "", fromDate: "", destinationDate: "", typeOfRequestOff: "", Timefrom: "8.30", Timedestination: "16.30" }]]
        , indexSelect: 0
        , otherData: [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]]
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
                if (e == "") dispatch({ type: "setstate", payload: { name: "otherData", value: res.data.Data_Other_data } })

                dispatch({ type: "setstate", payload: { name: "personalInformation", value: res.data.Data_personal } })
                dispatch({ type: "setstate", payload: { name: "AreaReponability", value: res.data.Data_Area } })
            })
    }

    const addnewrequest = (index: any) => {
        let Array_data = [...state.RequestElectoff]
        Array_data.splice(index + 1, 0, [{ contentForDetail: "ปฏิบัติงาน ...... ที่ ......", checkPersonelControl: true, personelControl: "", contactPersonelControl: "", positionPersonelControl: "", checkPersonelCoordinate: true, personelCoordinate: "", positionPersonelCoordinate: "", contactPersonelCoordinate: "" }, { requestOffDetail: "", fromDate: "", destinationDate: "", typeOfRequestOff: "", Timefrom: "8.30", Timedestination: "16.30" }])
        console.log(Array_data)
        dispatch({ type: "setstate", payload: { name: "RequestElectoff", value: Array_data } })

    }
    const delrequest = (index: any) => {
        let Array_data = [...state.RequestElectoff]
        Array_data.splice(index, 1)
        dispatch({ type: "setstate", payload: { name: "RequestElectoff", value: Array_data } })

    }
    const changestate = (index: any, index1: any, event: any, text: any) => {
        let Array_data = [...state.RequestElectoff]
        Array_data[index][index1][text] = event.target.value
        dispatch({ type: "setstate", payload: { name: "RequestElectoff", value: Array_data } })

    }
    const InsertMessage = async (selectInsert: any, numberTypeinFeeder: number, text: string) => {
        let Array_data = [...state.RequestElectoff]
        // Array_data[selectInsert][1] = `${Array_data[selectInsert][1]}test`
        let AreaResponability = [...state.AreaReponability]
        let oterData = [...state.otherData]

        if (text == "SwitchGear") {
            let array_Data1 = [...state.SwitchGearCheckbox]
            let text = ""

            if (Array_data[selectInsert][1].requestOffDetail == "") text = `สฟฟ.${state.substationSelect[0]}`
            let count22DS = 0
            let totalofDS22 = 0

            await array_Data1[numberTypeinFeeder].map((word: any) => {
                if (word[1][word[1].length - 4] == "S") {
                    totalofDS22++
                }
            })


            await array_Data1[numberTypeinFeeder].map((word: any) => {
                if (word[0] == true) {
                    if ((word[1][word[1].length - 4] == "B") && (array_Data1[1][1][1] == "AIS")) text = `${text},ปลด 22kV CB รหัส ${word[1]} พร้อม Out Service`
                    if ((word[1][3] == "T") && (word[1][word[1].length - 4] == "S")) text = `${text}, Open LBS รหัส ${word[1]}`
                    else if ((word[1][word[1].length - 4] == "B") && (array_Data1[1][1][1] == "GIS")) text = `${text},ปลด 22kV CB รหัส ${word[1]}`
                    else if (word[1][word[1].length - 4] == "G") text = `${text}, Close ES รหัส ${word[1]}`
                    else if (word[1][word[1].length - 4] == "S") {
                        count22DS++
                        if (count22DS <= 1) {
                            text = `${text} พร้อมทั้ง Open DS รหัส ${word[1]}`
                        }
                        else if (count22DS == totalofDS22) {
                            text = `${text} และ Open DS รหัส ${word[1]}`
                        }
                        else {
                            text = `${text},Open DS รหัส ${word[1]}`
                        }

                    }

                }
            });
            // console.log(text)
            Array_data[selectInsert][1].requestOffDetail = `${Array_data[selectInsert][1].requestOffDetail}${text}`
        }
        else if (text == "SwitchYard") {
            let array_Data1 = [...state.SwitchYardCheckbox]
            let text = ""
            let count115DS = 0
            let totalofDS115 = 0

            await array_Data1[numberTypeinFeeder].map((word: any) => {

                if (word[1][word[1].length - 4] == "S") {
                    totalofDS115++
                }
            });

            if (Array_data[selectInsert][1].requestOffDetail == "") text = `สฟฟ.${state.substationSelect[0]}`
            await array_Data1[numberTypeinFeeder].map((word: any) => {
                if (word[0] == true) {
                    if (word[1][word[1].length - 4] == "B") text = `${text}, ปลด 115kV CB รหัส ${word[1]}`
                    else if (word[1][word[1].length - 4] == "G") text = `${text}, Close ES รหัส ${word[1]}`
                    else if (word[1][word[1].length - 4] == "S") {
                        count115DS++
                        if (count115DS <= 1) {
                            text = `${text} พร้อมทั้ง Open DS รหัส ${word[1]}`
                        }
                        else if (count115DS == totalofDS115) {
                            text = `${text} และ Open DS รหัส ${word[1]}`
                        }
                        else {
                            text = `${text}, Open DS รหัส ${word[1]}`
                        }
                    }
                }
            });
            // console.log(text)
            Array_data[selectInsert][1].requestOffDetail = `${Array_data[selectInsert][1].requestOffDetail}${text}`
        }

        AreaResponability.map((data: any, index: any) => {
            if (data[0] === state.substationSelect[0]) {
                oterData[2][1] = `${state.otherData[2][1]}, ${data[6]}`
                oterData[6][1] = `${state.otherData[6][1]}, ผจก.${data[5]}`
            }
        })

        oterData[2][1] = oterData[2][1].split(",").filter(function (item: any, pos: any) {
            return oterData[2][1].split(",").indexOf(item) == pos;
        })

        oterData[6][1] = oterData[6][1].split(",").filter(function (item: any, pos: any) {
            return oterData[6][1].split(",").indexOf(item) == pos;
        })




        dispatch({ type: "setstate", payload: { name: "otherData", value: oterData } })
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


    const setstateOtherData = (valueData: any, text: any) => {
        let ArrayData = [...state.otherData]
        state.otherData.map((data: any, index: number) => {
            if (data[0] == text) {
                ArrayData[index][1] = valueData
            } else {

            }
        })
        dispatch({ type: "setstate", payload: { name: "otherData", value: ArrayData } })

    }

    const selectPersonelControl = (event: any, index: number) => {
        let arrayData = [...state.personalInformation]
        let Array_data = [...state.RequestElectoff]
        let personelContact = ""
        let personelPosition = ""
        arrayData.map((data: any, index: number) => {
            if (data[1] === event.target.value) {
                personelPosition = data[2]
                personelContact = data[4]
            }
        })
        Array_data[index][0].personelControl = event.target.value
        Array_data[index][0].contactPersonelControl = personelContact
        Array_data[index][0].positionPersonelControl = personelPosition

        dispatch({ type: "setstate", payload: { name: "RequestElectoff", value: Array_data } })
    }

    const selectPersonelCoordinate = (event: any, index: number) => {
        let arrayData = [...state.personalInformation]
        let Array_data = [...state.RequestElectoff]
        let personelContact = ""
        let personelPosition = ""
        arrayData.map((data: any, index: number) => {
            if (data[1] === event.target.value) {
                personelPosition = data[2]
                personelContact = data[4]
            }
        })
        Array_data[index][0].personelCoordinate = event.target.value
        Array_data[index][0].contactPersonelCoordinate = personelContact
        Array_data[index][0].positionPersonelCoordinate = personelPosition

        dispatch({ type: "setstate", payload: { name: "RequestElectoff", value: Array_data } })
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
                    <div className="btn btn-primary mx-2" onClick={() => { ExportDocx({ ...state }) }}>
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
                            <input type="text" className="border rounded-none rounded-r-lg" onChange={(e) => { setstateOtherData(e.target.value, "จาก") }} value={state.otherData[1][1]} />
                        </div>
                        <div className="flex w-1/2 mx-2">
                            <label className="bg-slate-200  w-10 rounded-l-lg text-center">ถึง</label>
                            <input type="text" className="border rounded-none rounded-r-lg" onChange={(e) => { setstateOtherData(e.target.value, "ถึง") }} value={state.otherData[2][1]} />
                        </div>
                    </div>
                    <div className="flex w-full my-2">
                        <div className="flex w-1/2 mx-2">
                            <label className="bg-slate-200  w-10 rounded-l-lg text-center">เลขที่</label>
                            <input type="text" className="border rounded-none rounded-r-lg" onChange={(e) => { setstateOtherData(e.target.value, "เลขที่") }} value={state.otherData[3][1]} />
                        </div>
                        <div className="flex w-1/2 mx-2">
                            <label className="bg-slate-200  w-10 rounded-l-lg text-center">วันที่</label>
                            <input type="text" className="border rounded-none rounded-r-lg" onChange={(e) => { setstateOtherData(e.target.value, "วันที่") }} value={state.otherData[4][1]} />
                        </div>
                    </div>
                    <div className="flex my-2">
                        <div className="flex mx-2 w-full">
                            <label className="bg-slate-200  w-10 rounded-l-lg text-center">เรื่อง</label>
                            <input type="text" className="border rounded-none rounded-r-lg" onChange={(e) => { setstateOtherData(e.target.value, "เรื่อง") }} value={state.otherData[5][1]} />
                        </div>
                    </div>
                    <div className="flex my-2">
                        <div className="flex mx-2 w-full">
                            <label className="bg-slate-200  w-10 rounded-l-lg text-center">เรียน</label>
                            <input type="text" className="border rounded-none rounded-r-lg" onChange={(e) => { setstateOtherData(e.target.value, "เรียน") }} value={state.otherData[6][1]} />
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
                                        onChange={(newValue: any) => { setstateOtherData(newValue.$d, "เนื่องด้วยวันที่") }}
                                        defaultValue={dayjs(new Date)}
                                        value={dayjs(state.otherData[9][1])}
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
                                        onChange={(newValue: any) => { setstateOtherData(newValue.$d, "ถึงวันที่") }}
                                        defaultValue={dayjs(new Date)}
                                        value={dayjs(state.otherData[10][1])}
                                        slotProps={{ textField: { size: 'small' } }}

                                    />
                                </LocalizationProvider>
                            </div>
                        </div>



                        <div>
                            <input type="text" className="border" onChange={(e) => { setstateOtherData(e.target.value, "ผู้ขอดับไฟ") }} value={state.otherData[7][1]} />
                        </div>

                        <div>
                            จะทำการขอดับไฟ
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" id="22kv" onChange={(e) => { setstateOtherData(e.target.checked, "22kv") }} />
                            <label className="form-check-label" htmlFor="22kv">22/33 kV</label>
                        </div>
                        <div className="form-check m-2">
                            <input className="form-check-input" type="checkbox" id="115kv" onChange={(e) => { setstateOtherData(e.target.checked, "115kv") }} />
                            <label className="form-check-label" htmlFor="115kv">115 kV</label>
                        </div>
                        <div >พร้อมแนบผังจุดปฏิบัติงานมาด้วย จำนวน</div>
                        <div className="w-10">
                            <input type="text" className="border text-center" onChange={(e) => { setstateOtherData(e.target.value, "ฉบับ") }} />
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
                                                        <textarea className="border w-full" onChange={(e) => { changestate(index, 0, e, "contentForDetail") }} value={data[0].contentForDetail}></textarea>
                                                    </div>
                                                    <div className="flex justify-start flex-wrap my-2">
                                                        <div className="flex justify-start w-full flex-wrap my-2">
                                                            <div className="flex justify-center items-center">
                                                                <input type="checkbox" className="w-4 h-4" checked={data[0].checkPersonelControl} onChange={(e) => {
                                                                    let event = { target: { value: e.target.checked } }
                                                                    changestate(index, 0, event, "checkPersonelControl")
                                                                }} />
                                                                <div className="flex justify-center items-center my-1">ผู้ควบคุมงาน</div>
                                                            </div>

                                                            {data[0].checkPersonelControl && <select className="w-48 border rounded-lg grow my-1" onChange={(e) => {
                                                                selectPersonelControl(e, index)
                                                            }}>
                                                                {state.personalInformation.map((data: any, index: number) => {
                                                                    return (
                                                                        <option key={`personelControl_${index}`} value={data[1]}>{data[1]}</option>
                                                                    )
                                                                })}

                                                            </select>}


                                                            {!data[0].checkPersonelControl && <div className="flex justify-center grow flex-row m-2">
                                                                <label className="border rounded-l-lg bg-slate-200 w-24 text-center">ผู้ควบคุมงาน</label>
                                                                <input type="text" className="border rounded-none rounded-r-xl"
                                                                    onChange={(e) => { changestate(index, 0, e, "personelControl") }} value={data[0].personelControl}
                                                                />
                                                            </div>}
                                                            <div className="flex justify-center grow flex-row m-2 ">
                                                                <label className="border rounded-l-lg bg-slate-200 w-24 text-center">ตำเเหน่ง</label>
                                                                <input type="text" className="border rounded-none rounded-r-xl" onChange={(e) => { changestate(index, 0, e, "positionPersonelControl") }} value={data[0].positionPersonelControl}
                                                                />
                                                            </div>
                                                            <div className="flex justify-center grow flex-row m-2">
                                                                <label className="border rounded-l-lg bg-slate-200 w-24 text-center">เบอร์โทร</label>
                                                                <input type="text" className="border rounded-none rounded-r-xl" onChange={(e) => { changestate(index, 0, e, "contactPersonelControl") }} value={data[0].contactPersonelControl}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-start w-full flex-wrap my-2">
                                                            <div className="flex justify-center items-center">
                                                                <input type="checkbox" className="w-4 h-4" checked={data[0].checkPersonelCoordinate} onChange={(e) => {
                                                                    let event = { target: { value: e.target.checked } }
                                                                    changestate(index, 0, event, "checkPersonelCoordinate")
                                                                }} />
                                                                <div className="flex justify-center items-center my-1">ผู้ประสานงาน</div>
                                                            </div>
                                                            {data[0].checkPersonelCoordinate && <select className="w-48 border rounded-lg grow my-1" onChange={(e) => {
                                                                selectPersonelCoordinate(e, index)
                                                            }}>
                                                                {state.personalInformation.map((data: any) => {
                                                                    return (
                                                                        <option value={data[1]}>{data[1]}</option>
                                                                    )
                                                                })}

                                                            </select>}

                                                            {!data[0].checkPersonelCoordinate && <div className="flex justify-center grow flex-row m-2">
                                                                <label className="border rounded-l-lg bg-slate-200 w-24 text-center">ผู้ประสานงาน</label>
                                                                <input type="text" className="border rounded-none rounded-r-xl"
                                                                    onChange={(e) => { changestate(index, 0, e, "PersonelCoordinate") }} value={data[0].PersonelCoordinate}
                                                                />
                                                            </div>}


                                                            <div className="flex justify-center grow flex-row m-2">
                                                                <label className="border rounded-l-lg bg-slate-200 w-24 text-center">ตำเเหน่ง</label>
                                                                <input type="text" className="border rounded-none rounded-r-xl"
                                                                    onChange={(e) => { changestate(index, 0, e, "positionPersonelCoordinate") }} value={data[0].positionPersonelCoordinate}


                                                                />
                                                            </div>
                                                            <div className="flex justify-center grow flex-row m-2">
                                                                <label className="border rounded-l-lg bg-slate-200 w-24 text-center">เบอร์โทร</label>
                                                                <input type="text" className="border rounded-none rounded-r-xl"
                                                                    onChange={(e) => { changestate(index, 0, e, "contactPersonelCoordinate") }} value={data[0].contactPersonelCoordinate}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="w-full flex my-2 flex-col">
                                                    <div className="flex justify-center">
                                                        <label className="bg-slate-200  w-10 rounded-l-lg text-center flex justify-center text-center items-center">{`${index + 1}.2`}</label>
                                                        <textarea className="border w-full" onChange={(e) => { changestate(index, 1, e, "requestOffDetail") }} value={data[1].requestOffDetail}></textarea>
                                                    </div>

                                                    <div className="flex items-center my-2">
                                                        <div className="grid grid-cols-2 my-2 grow">
                                                            <div className="text-center items-center flex justify-start">วันที่</div>
                                                            <div className="mx-2 justify-self-end">
                                                                <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                                                    <DatePicker
                                                                        label="เลือกวันที่"
                                                                        format="DD MMMYYYY"
                                                                        onChange={(newValue: any) => {
                                                                            let event = { target: { value: "" } }
                                                                            event.target.value = newValue.$d

                                                                            changestate(index, 1, event, "fromDate")
                                                                        }}
                                                                        defaultValue={dayjs(new Date)}
                                                                        value={dayjs(data[1].fromDate)}
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
                                                                        onChange={(newValue: any) => {
                                                                            let event = { target: { value: "" } }
                                                                            event.target.value = newValue.$d
                                                                            changestate(index, 1, event, "destinationDate")
                                                                        }}
                                                                        defaultValue={dayjs(new Date)}
                                                                        value={dayjs(data[1].destinationDate)}
                                                                        slotProps={{ textField: { size: 'small' } }}

                                                                    />
                                                                </LocalizationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <div className="flex justify-center">
                                                            <div className="flex justify-center mx-2">
                                                                <div>เวลา</div>
                                                                <input type="text" className="text-center border" onChange={(event: any) => { changestate(index, 1, event, "Timefrom") }} value={data[1].Timefrom} />
                                                                <div>น.</div>
                                                            </div>
                                                            <div className="flex justify-center mx-2">
                                                                <div>ถึง</div>
                                                                <input type="text" className="text-center border"
                                                                    onChange={(event: any) => { changestate(index, 1, event, "Timedestination") }} value={data[1].Timedestination} />
                                                                <div>น.</div>
                                                            </div>
                                                        </div>
                                                        <select className="border rounded grow" onChange={(e) => { changestate(index, 1, e, "typeOfRequestOff") }} value={data[1].typeOfRequestOff}>
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



                                                </div>
                                                <div className="flex justify-start flex-wrap">
                                                    <div className="mx-2">
                                                        <div className="btn btn-success" onClick={() => { addnewrequest(index) }}>NEW</div>
                                                    </div>
                                                    <div className="mx-2">
                                                        <div className="btn btn-danger" onClick={() => { delrequest(index) }}>DEL</div>
                                                    </div>
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