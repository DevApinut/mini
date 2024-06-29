import React, { Component, useReducer, useEffect, useDebugValue } from "react";
import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";
import axios from "axios";

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
        FeederInfo: [{
            // optional second annotation for better type inference
            Sender: "",
            Year: "",
            Serial: "",
            Feeder: "",
            ContactA: "",
            ContactB: "",
            ContactC: "",
            VaccuumA: "",
            VaccuumB: "",
            VaccuumC: "",
            InsulationAG: "",
            InsulationBG: "",
            InsulationCG: "",
            InsulationAB: "",
            InsulationBC: "",
            InsulationCA: "",
        }]
        , dataFromfetch: []
        , SubstationSelect: ""
        , SubstationEngSelect: ""
        , FeederSelect: ""
        , YearSelect: year
        , Substation: [["ไม่มีข้อมูล"]]
        , Feeder_information: []
    };



    useEffect(() => {
        fetchSwitchGearTest("โพธาราม", "PTR", new Date().getFullYear());
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
                if (Substation !== res.data.Switchgear_detail[0][2].substring(0, 2) ) {
                    dispatch({ type: "setstate", payload: { name: "FeederSelect", value: res.data.Switchgear_detail[0][2] } })
                    dispatch({ type: "setstate", payload: { name: "SubstationSelect", value: Substation } })
                    dispatch({ type: "setstate", payload: { name: "SubstationEngSelect", value: Substation_Eng } })
                }
            })
            .catch(err => {
                console.log("error")
            })
    }

    const ChangeSubstaion = async (e: any) => {
        console.log(state.YearSelect)
        console.log((e.target.value.split(","))[1])
        await dispatch({ type: "setstate", payload: { name: "SubstationSelect", value: (e.target.value.split(","))[0] } })
        await dispatch({ type: "setstate", payload: { name: "SubstationEngSelect", value: (e.target.value.split(","))[1] } })
        await fetchSwitchGearTest((e.target.value.split(","))[0], (e.target.value.split(","))[1], state.YearSelect);
    }
    const ChangeFeeder = async (e: any) => {
        await dispatch({ type: "setstate", payload: { name: "FeederSelect", value: e.target.value } })
    }


    return (
        <>
            <Navbar1 />
            <div className="grow container">
                <div className="flex justify-center flex-column items-center w-full">
                    <div className="text-xl font-bold">SwitchGear Report</div>
                    <div className="flex justify-center flex-col border rounded w-full py-2">
                        <div className="text-center">ข้อมูลสถานี</div>
                        <div className="flex justify-centerw-full ">
                            <div className="flex justify-center w-full">
                                <div className="flex justify-center flex-col mx-1 w-1/3">
                                    <div className="text-center text-red-800 font-semibold">สถานี</div>
                                    <select className="border rounded-md" onChange={ChangeSubstaion}>
                                        {state.Substation.map((data: any, index: any) => {
                                            return (<option value={data} key={`Substation_${index}`}>{data[0]}</option>)
                                        })}
                                    </select>
                                </div>
                                <div className="flex justify-center flex-col mx-1 w-1/3">
                                    <div className="text-center text-red-800 font-semibold">ฟีดเดอร์</div>
                                    <select className="border  rounded-md" onChange={ChangeFeeder}>
                                        {state.dataFromfetch.map((data: any, index: number) => {
                                            return (<option value={data[2]} key={`Feeder_${index}`}>{data[2]}</option>)
                                        })}
                                    </select>
                                </div>
                                <div className="flex justify-center flex-col mx-1 w-1/3">
                                    <div className="text-center text-red-800 font-semibold">ปี</div>
                                    <select className="border rounded-md">
                                        <option>{(new Date()).getFullYear() + 543 - 0}</option>
                                        <option>{(new Date()).getFullYear() + 543 - 1}</option>
                                        <option>{(new Date()).getFullYear() + 543 - 2}</option>
                                        <option>{(new Date()).getFullYear() + 543 - 3}</option>
                                        <option>{(new Date()).getFullYear() + 543 - 4}</option>
                                        <option>{(new Date()).getFullYear() + 543 - 5}</option>
                                        <option>{(new Date()).getFullYear() + 543 - 6}</option>
                                        <option>{(new Date()).getFullYear() + 543 - 7}</option>
                                        <option>{(new Date()).getFullYear() + 543 - 8}</option>
                                        <option>{(new Date()).getFullYear() + 543 - 9}</option>
                                        <option>{(new Date()).getFullYear() + 543 - 10}</option>
                                    </select>
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
                                <input type={"text"} className="border text-center" />
                            </div>
                            <div className="mx-2">
                                <div className="w-full text-center">phaseB</div>
                                <input type={"text"} className="border text-center" />
                            </div>
                            <div className="mx-2">
                                <div className="w-full text-center">phaseC</div>
                                <input type={"text"} className="border text-center" />
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl h-24 w-full my-3">
                        <div className="border w-full flex justify-center 
                        items-center bg-green-200 rounded-t-xl font-bold">Contact</div>
                        <div className="flex justify-center">
                            <div className="mx-2">
                                <div className="w-full text-center">phaseA</div>
                                <input type={"text"} className="border text-center" />
                            </div>
                            <div className="mx-2">
                                <div className="w-full text-center">phaseB</div>
                                <input type={"text"} className="border text-center" />
                            </div>
                            <div className="mx-2">
                                <div className="w-full text-center">phaseC</div>
                                <input type={"text"} className="border text-center" />
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
                                    <input type={"text"} className="border text-center" />
                                </div>
                                <div className="mx-2">
                                    <div className="w-full text-center">phaseBG</div>
                                    <input type={"text"} className="border text-center" />
                                </div>
                                <div className="mx-2">
                                    <div className="w-full text-center">phaseCG</div>
                                    <input type={"text"} className="border text-center" />
                                </div>
                            </div>
                            <div className="flex my-1">
                                <div className="mx-2">
                                    <div className="w-full text-center">phaseAB</div>
                                    <input type={"text"} className="border text-center" />
                                </div>
                                <div className="mx-2">
                                    <div className="w-full text-center">phaseBC</div>
                                    <input type={"text"} className="border text-center" />
                                </div>
                                <div className="mx-2">
                                    <div className="w-full text-center">phaseCA</div>
                                    <input type={"text"} className="border text-center" />
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
                                <input type={"text"} className="border text-center" />
                            </div>
                            <div className="mx-2 w-3/4">
                                <div className="w-full text-center">Remark</div>
                                <input type={"text"} className="border text-center" />
                            </div>
                        </div>
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





            </div>
            <Footer />
        </>
    )

}

export default SwitchGear

