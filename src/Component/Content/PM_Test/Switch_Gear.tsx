import React, { Component, useReducer, useEffect, useDebugValue } from "react";
import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";
import axios from "axios";
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import {ExportExcellSwitchGear}  from "./Switch_Gear_export"

type SubstationInfomation = {
    SubstationThai: string,
    SubstationEng: string,
}

type TestReport = [{
    Sender: string,
    Year: string,
    Serial: string,
    Feeder: string,
    ContactA: string,
    ContactB: string,
    ContactC: string,
    VaccuumA: string,
    VaccuumB: string,
    VaccuumC: string,
    InsulationAG: string,
    InsulationBG: string,
    InsulationCG: string,
    InsulationAB: string,
    InsulationBC: string,
    InsulationCA: string,

}]

const SwitchGear = () => {
    const year = new Date().getFullYear()

    const initials = {

        // optional second annotation for better type inference
        Sender: ""
        , Year: ""
        , Serial: ""
        , Feeder: ""
        , ContactA: ""
        , ContactB: ""
        , ContactC: ""
        , VaccuumA: ""
        , VaccuumB: ""
        , VaccuumC: ""
        , InsulationAG: ""
        , InsulationBG: ""
        , InsulationCG: ""
        , InsulationAB: ""
        , InsulationBC: ""
        , InsulationCA: ""
        , Counter: ""
        , Remark: ""

        , dataFromfetch: []
        , SubstationSelect: ""
        , SubstationSelect_TH_ENG: ""
        , SubstationEngSelect: ""
        , FeederSelect: ""
        , FeederInformation: [""]
        , YearSelect: year
        , Substation: [["ไม่มีข้อมูล"]]
        , Feeder_information: []
        , loading: false
        , popupFeeder: false

    };





    useEffect(() => {
        fetchSwitchGearTest("โพธาราม", "PTR", new Date().getFullYear());
        document.title = 'ผลทดสอบ | SwitchGear';
    }, [])


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

    const fetchSwitchGearTest = (Substation: string, Substation_Eng: string, year: any) => {
        axios.get(`https://script.google.com/macros/s/AKfycbxhREXdjo7IVZ0LyJpWeN0IxYHEtrOh5rbXl8WkK72Z9T8dAae7YgfeFD1VD9nAsRb73A/exec`,
            {
                params: {
                    year: year,
                    Substation: Substation,
                    Substation_Eng: Substation_Eng,
                }
            }
        )
            .then(res => {
                dispatch({ type: "setstate", payload: { name: "dataFromfetch", value: res.data.Switchgear_detail } })
                dispatch({ type: "setstate", payload: { name: "Substation", value: res.data.SubstationName } })
                if (state.SubstationSelect === "") {
                    dispatch({ type: "setstate", payload: { name: "SubstationSelect_TH_ENG", value: res.data.SubstationName[0] } })
                    dispatch({ type: "setstate", payload: { name: "FeederSelect", value: res.data.Switchgear_detail[0][2] } })
                    dispatch({ type: "setstate", payload: { name: "SubstationSelect", value: Substation } })
                    dispatch({ type: "setstate", payload: { name: "SubstationEngSelect", value: Substation_Eng } })
                    dispatch({ type: "setstate", payload: { name: "loading", value: true } })
                }
                else if (Substation_Eng !== state.FeederSelect.substring(0, 3)) {

                    dispatch({ type: "setstate", payload: { name: "FeederSelect", value: res.data.Switchgear_detail[0][2] } })
                    dispatch({ type: "setstate", payload: { name: "SubstationSelect", value: Substation } })
                    dispatch({ type: "setstate", payload: { name: "SubstationEngSelect", value: Substation_Eng } })
                    dispatch({ type: "setstate", payload: { name: "loading", value: true } })
                }
                else {

                    dispatch({ type: "setstate", payload: { name: "loading", value: true } })
                }
            })
            .catch(err => {
                console.log("error")
            })
    }

    const ChangeSubstaion = async (e: any) => {
        await dispatch({ type: "setstate", payload: { name: "loading", value: false } })
        await dispatch({ type: "setstate", payload: { name: "SubstationSelect", value: (e.target.value.split(","))[0] } })
        await dispatch({ type: "setstate", payload: { name: "SubstationSelect_TH_ENG", value: (e.target.value.split(",")) } })
        await dispatch({ type: "setstate", payload: { name: "SubstationEngSelect", value: (e.target.value.split(","))[1] } })
        await fetchSwitchGearTest((e.target.value.split(","))[0], (e.target.value.split(","))[1], state.YearSelect);
    }
    const ChangeFeeder = async (e: any) => {
        await dispatch({ type: "setstate", payload: { name: "FeederSelect", value: e.target.value } })
        await dispatch({ type: "setstate", payload: { name: "ContactA", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "ContactB", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "ContactC", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "VaccuumA", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "VaccuumB", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "VaccuumC", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "InsulationAG", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "InsulationBG", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "InsulationCG", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "InsulationAB", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "InsulationBC", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "InsulationCA", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "Counter", value: "" } })
        await dispatch({ type: "setstate", payload: { name: "Remark", value: "" } })

        state.dataFromfetch.map((data: any, index: number) => {
            if (data[2] === e.target.value) {
                dispatch({ type: "setstate", payload: { name: "Feeder_information", value: data } })
            }
        })


    }
    const ChangeYear = async (e: any) => {
        await dispatch({ type: "setstate", payload: { name: "loading", value: false } })
        await dispatch({ type: "setstate", payload: { name: "YearSelect", value: e.target.value } })
        await fetchSwitchGearTest(state.SubstationSelect, state.SubstationEngSelect, e.target.value);
    }

    const SaveData = async() => {
        await dispatch({ type: "setstate", payload: { name: "loading", value: false } })
        let formData = new FormData()
        formData.append('Sender', "Noname")
        formData.append('Year', state.YearSelect)
        formData.append('Substation', state.SubstationSelect)
        formData.append('Feeder', state.FeederSelect)
        formData.append('Vaccuum_PhaseA', state.VaccuumA)
        formData.append('Vaccuum_PhaseB', state.VaccuumB)
        formData.append('Vaccuum_PhaseC', state.VaccuumC)
        formData.append('Contact_PhaseA', state.ContactA)
        formData.append('Contact_PhaseB', state.ContactB)
        formData.append('Contact_PhaseC', state.ContactC)
        formData.append('Insulation_PhaseAG', state.InsulationAG)
        formData.append('Insulation_PhaseBG', state.InsulationBG)
        formData.append('Insulation_PhaseCG', state.InsulationCG)
        formData.append('Insulation_PhaseAB', state.InsulationAB)
        formData.append('Insulation_PhaseBC', state.InsulationBC)
        formData.append('Insulation_PhaseCA', state.InsulationCA)
        formData.append('Counter', state.Counter)
        formData.append('Remark', state.Remark)
        axios.post(`https://script.google.com/macros/s/AKfycbxhREXdjo7IVZ0LyJpWeN0IxYHEtrOh5rbXl8WkK72Z9T8dAae7YgfeFD1VD9nAsRb73A/exec`, formData)
            .then(async (res: any) => {                
                await fetchSwitchGearTest(state.SubstationSelect, state.SubstationEngSelect, state.YearSelect);
            })
    }


    return (
        <>
            <Navbar1 />
            <div className="grow container relative">
                {!state.loading && <div className="absolute w-full h-full z-100 bg-slate-200 mx-0 px-0
                 left-0 flex justify-center items-center opacity-50">
                    <ReactLoading type={"spinningBubbles"} color={"#250a25"} height={100} width={100} />
                </div>}
                {state.popupFeeder && <div className="popupSwitchGear flex flex-col justify-end rounded-xl">
                    <div className="m-2 absolute top-2 right-2">
                        <div className="border px-2 rounded bg-slate-50 hover:cursor-pointer"
                            onClick={() => { dispatch({ type: "setstate", payload: { name: "popupFeeder", value: false } }) }}>&times;</div>
                    </div>
                    <div className="grow flex justify-start flex-col items-center">
                        <div className="mt-4">ข้อมูลฟีดเดอร์</div>
                        <div className="flex justify-center my-2">
                            <label className="w-24 text-center content-center border">ชนิด CB</label>
                            <input type={"text"} className="border text-center" value={state.Feeder_information[1]} />
                        </div>
                        <div className="flex justify-center my-2">
                            <label className="w-24 text-center content-center border">Feeder</label>
                            <input type={"text"} className="border text-center" value={state.Feeder_information[2]} disabled />
                        </div>
                        <div className="flex justify-center my-2">
                            <label className="w-24 text-center content-center border">Serial</label>
                            <input type={"text"} className="border text-center" value={state.Feeder_information[3]} />
                        </div>
                        <div className="flex justify-center my-2">
                            <label className="w-24 text-center content-center border">MFR</label>
                            <input type={"text"} className="border text-center" value={state.Feeder_information[4]} />
                        </div>
                        <div className="flex justify-center my-2">
                            <label className="w-24 text-center content-center border">Type</label>
                            <input type={"text"} className="border text-center" value={state.Feeder_information[5]} />
                        </div>
                        <div className="flex justify-center my-2">
                            <label className="w-24 text-center content-center border">kV</label>
                            <input type={"text"} className="border text-center" value={state.Feeder_information[6]} />
                        </div>
                        <div className="flex justify-center my-2">
                            <label className="w-24 text-center content-center border">kA</label>
                            <input type={"text"} className="border text-center" value={state.Feeder_information[7]} />
                        </div>
                        <div className="flex justify-center my-2">
                            <label className="w-24 text-center content-center border">A</label>
                            <input type={"text"} className="border text-center" value={state.Feeder_information[8]} />
                        </div>
                        <div className="my-2">
                            <button className="btn btn-success mx-2">save</button>
                            <button className="btn btn-danger mx-2"
                                onClick={() => { dispatch({ type: "setstate", payload: { name: "popupFeeder", value: false } }) }}
                            >Cancel</button>
                        </div>
                    </div>

                </div>}
                {state.loading && <div className="flex flex-col">
                    <div className="flex justify-center flex-column items-center w-full">
                        <div className="text-xl font-bold">SwitchGear Report</div>
                        <div className="flex justify-center flex-col border rounded w-full py-2">
                            <div className="text-center">ข้อมูลสถานี</div>
                            <div className="flex justify-centerw-full ">
                                <div className="flex justify-center w-full">
                                    <div className="flex justify-center flex-col mx-1 w-1/3">
                                        <div className="text-center text-red-800 font-semibold">สถานี</div>
                                        <select className="border rounded-md" onChange={ChangeSubstaion} value={state.SubstationSelect_TH_ENG}>
                                            {state.Substation.map((data: any, index: any) => {
                                                return (<option value={data} key={`Substation_${index}`}>{data[0]}</option>)
                                            })}
                                        </select>
                                    </div>
                                    <div className="flex justify-center flex-col mx-1 w-1/3">
                                        <div className="text-center text-red-800 font-semibold">ฟีดเดอร์</div>
                                        <select className="border  rounded-md" onChange={ChangeFeeder} value={state.FeederSelect}>
                                            {state.dataFromfetch.map((data: any, index: number) => {
                                                return (<option value={data[2]} key={`Feeder_${index}`}>{data[2]}</option>)
                                            })}
                                        </select>
                                    </div>
                                    <div className="flex mx-1 w-1/3 items-center">
                                        <div className="flex justify-center flex-col w-10/12">
                                            <div className="text-center text-red-800 font-semibold">ปี</div>
                                            <select className="border rounded-md" onChange={ChangeYear} value={state.YearSelect}>
                                                <option value={(new Date()).getFullYear()}>
                                                    {(new Date()).getFullYear() + 543 - 0}
                                                </option>
                                                <option value={(new Date()).getFullYear() - 1}>
                                                    {(new Date()).getFullYear() + 543 - 1}
                                                </option>
                                                <option value={(new Date()).getFullYear() - 2}>
                                                    {(new Date()).getFullYear() + 543 - 2}
                                                </option>
                                                <option value={(new Date()).getFullYear() - 3}>
                                                    {(new Date()).getFullYear() + 543 - 3}
                                                </option>
                                                <option value={(new Date()).getFullYear() - 4}>
                                                    {(new Date()).getFullYear() + 543 - 4}
                                                </option>
                                                <option value={(new Date()).getFullYear() - 5}>
                                                    {(new Date()).getFullYear() + 543 - 5}
                                                </option>
                                                <option value={(new Date()).getFullYear() - 6}>
                                                    {(new Date()).getFullYear() + 543 - 6}
                                                </option>
                                                <option value={(new Date()).getFullYear() - 7}>
                                                    {(new Date()).getFullYear() + 543 - 7}
                                                </option>
                                                <option value={(new Date()).getFullYear() - 8}>
                                                    {(new Date()).getFullYear() + 543 - 8}
                                                </option>
                                                <option value={(new Date()).getFullYear() - 9}>
                                                    {(new Date()).getFullYear() + 543 - 9}
                                                </option>
                                                <option value={(new Date()).getFullYear() - 10}>
                                                    {(new Date()).getFullYear() + 543 - 10}
                                                </option>
                                            </select>
                                        </div>

                                        <FontAwesomeIcon icon={faEdit} className="place-self-end mx-1 text-xl 
                                        hover:cursor-pointer" onClick={() => {
                                                dispatch({ type: "setstate", payload: { name: "popupFeeder", value: true } })
                                            }} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="border rounded-xl h-24 w-full my-3">
                            <div className="border w-full flex justify-center 
                        items-center bg-green-200 rounded-t-xl font-bold">Vaccuum</div>
                            <div className="flex justify-center">
                                <div className="mx-2">
                                    <div className="w-full text-center">phaseA</div>
                                    <input type={"text"} className="border text-center" 
                                    onChange={(e)=>{dispatch({type:"setstate",payload:{name:"VaccuumA",value:e.target.value}})}}/>
                                </div>
                                <div className="mx-2">
                                    <div className="w-full text-center">phaseB</div>
                                    <input type={"text"} className="border text-center" 
                                    onChange={(e)=>{dispatch({type:"setstate",payload:{name:"VaccuumB",value:e.target.value}})}}/>
                                </div>
                                <div className="mx-2">
                                    <div className="w-full text-center">phaseC</div>
                                    <input type={"text"} className="border text-center" 
                                    onChange={(e)=>{dispatch({type:"setstate",payload:{name:"VaccuumC",value:e.target.value}})}}/>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-xl h-24 w-full my-3">
                            <div className="border w-full flex justify-center 
                        items-center bg-green-200 rounded-t-xl font-bold">Contact</div>
                            <div className="flex justify-center">
                                <div className="mx-2">
                                    <div className="w-full text-center">phaseA</div>
                                    <input type={"text"} className="border text-center" 
                                    onChange={(e)=>{dispatch({type:"setstate",payload:{name:"ContactA",value:e.target.value}})}}/>
                                </div>
                                <div className="mx-2">
                                    <div className="w-full text-center">phaseB</div>
                                    <input type={"text"} className="border text-center" 
                                     onChange={(e)=>{dispatch({type:"setstate",payload:{name:"ContactB",value:e.target.value}})}}/>
                                </div>
                                <div className="mx-2">
                                    <div className="w-full text-center">phaseC</div>
                                    <input type={"text"} className="border text-center" 
                                     onChange={(e)=>{dispatch({type:"setstate",payload:{name:"ContactC",value:e.target.value}})}}/>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-xl w-full my-3">
                            <div className="border w-full flex justify-center 
                        items-center bg-green-200 rounded-t-xl font-bold">Insulation</div>
                            <div className="flex justify-center flex-wrap">
                                <div className="flex my-1">
                                    <div className="mx-2">
                                        <div className="w-full text-center">phaseAG</div>
                                        <input type={"text"} className="border text-center" 
                                        onChange={(e)=>{dispatch({type:"setstate",payload:{name:"InsulationAG",value:e.target.value}})}}/>
                                    </div>
                                    <div className="mx-2">
                                        <div className="w-full text-center">phaseBG</div>
                                        <input type={"text"} className="border text-center" 
                                        onChange={(e)=>{dispatch({type:"setstate",payload:{name:"InsulationBG",value:e.target.value}})}}/>
                                    </div>
                                    <div className="mx-2">
                                        <div className="w-full text-center">phaseCG</div>
                                        <input type={"text"} className="border text-center" 
                                        onChange={(e)=>{dispatch({type:"setstate",payload:{name:"InsulationCG",value:e.target.value}})}}/>
                                    </div>
                                </div>
                                <div className="flex my-1">
                                    <div className="mx-2">
                                        <div className="w-full text-center">phaseAB</div>
                                        <input type={"text"} className="border text-center" 
                                        onChange={(e)=>{dispatch({type:"setstate",payload:{name:"InsulationAB",value:e.target.value}})}}/>
                                    </div>
                                    <div className="mx-2">
                                        <div className="w-full text-center">phaseBC</div>
                                        <input type={"text"} className="border text-center" 
                                        onChange={(e)=>{dispatch({type:"setstate",payload:{name:"InsulationBC",value:e.target.value}})}}/>
                                    </div>
                                    <div className="mx-2">
                                        <div className="w-full text-center">phaseCA</div>
                                        <input type={"text"} className="border text-center" 
                                        onChange={(e)=>{dispatch({type:"setstate",payload:{name:"InsulationCA",value:e.target.value}})}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-xl h-24 w-full my-3">
                            <div className="border w-full flex justify-center 
                        items-center bg-green-200 rounded-t-xl font-bold">Other</div>
                            <div className="flex justify-center">
                                <div className="mx-2 w-1/4">
                                    <div className="w-full text-center">Counter</div>
                                    <input type={"text"} className="border text-center" 
                                    onChange={(e)=>{dispatch({type:"setstate",payload:{name:"Counter",value:e.target.value}})}}/>
                                </div>
                                <div className="mx-2 w-3/4">
                                    <div className="w-full text-center">Remark</div>
                                    <input type={"text"} className="border text-center" 
                                    onChange={(e)=>{dispatch({type:"setstate",payload:{name:"Remark",value:e.target.value}})}}/>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl w-full my-3 flex justify-center">
                            <div className="btn btn-success mx-2" onClick={SaveData}>บันทึก</div>
                            <div className="btn btn-success mx-2" onClick={()=>{ExportExcellSwitchGear({...state})}}>Excel <FontAwesomeIcon icon={faFileExcel} /></div>
                        </div>
                    </div>
                    <div className="text-center w-full">ตารางเเสดงผล</div>
                    <div className="overflow-scroll">
                        <table className="table table-bordered align-middle bg-white text-center switchgearTable">
                            <thead>
                                <tr className="font-semibold">
                                    <th rowSpan={2} className="font-semibold align-middle bg-red-200">Feeder</th>
                                    <th rowSpan={2} className="font-semibold align-middle">Serial</th>
                                    <th colSpan={3} className="font-semibold align-middle">Vaccuum &#40;&#60;100&#181;A&#41;</th>
                                    <th colSpan={3} className="font-semibold align-middle">Contact &#40;&#60;200&#181;&#937;&#41;</th>
                                    <th colSpan={6} className="font-semibold align-middle">Insulation&#40;&#62;1G&#937;&#41;</th>
                                    <th rowSpan={2} className="font-semibold align-middle">Counter</th>
                                    <th rowSpan={2} className="font-semibold align-middle">Remark</th>
                                </tr>
                                <tr>
                                    <th className="font-semibold align-middle">A</th>
                                    <th className="font-semibold align-middle">B</th>
                                    <th className="font-semibold align-middle">C</th>
                                    <th className="font-semibold align-middle">A</th>
                                    <th className="font-semibold align-middle">B</th>
                                    <th className="font-semibold align-middle">C</th>
                                    <th className="font-semibold align-middle">AG</th>
                                    <th className="font-semibold align-middle">BG</th>
                                    <th className="font-semibold align-middle">CG</th>
                                    <th className="font-semibold align-middle">AB</th>
                                    <th className="font-semibold align-middle">BC</th>
                                    <th className="font-semibold align-middle">CA</th>
                                </tr>
                            </thead>
                            <tbody>

                                {state.dataFromfetch.map((data: any, index: number) => {
                                    return (<tr key={`table1_${index}`}>
                                        {/* Feeder & Serial */}
                                        <td className="align-middle text-center align-middle">{data[2]}</td>
                                        <td className="align-middle text-center align-middle">{data[3]}</td>
                                        {/* vacccum */}
                                        <td className="align-middle text-center align-middle">{data[9]}</td>
                                        <td className="align-middle text-center align-middle">{data[10]}</td>
                                        <td className="align-middle text-center align-middle">{data[11]}</td>
                                        {/* Contact */}
                                        <td className="align-middle text-center align-middle">{data[12]}</td>
                                        <td className="align-middle text-center align-middle">{data[13]}</td>
                                        <td className="align-middle text-center align-middle">{data[14]}</td>
                                        {/* Insulation */}
                                        <td className="align-middle text-center align-middle">{data[15]}</td>
                                        <td className="align-middle text-center align-middle">{data[16]}</td>
                                        <td className="align-middle text-center align-middle">{data[17]}</td>
                                        <td className="align-middle text-center align-middle">{data[18]}</td>
                                        <td className="align-middle text-center align-middle">{data[19]}</td>
                                        <td className="align-middle text-center align-middle">{data[20]}</td>
                                        {/* Counter & remark */}
                                        <td className="align-middle text-center align-middle">{data[21]}</td>
                                        <td className="align-middle text-center align-middle">{data[22]}</td>
                                    </tr>)
                                })}

                            </tbody>

                        </table>
                    </div>
                </div>}






            </div>
            <Footer />
        </>
    )

}

export default SwitchGear

