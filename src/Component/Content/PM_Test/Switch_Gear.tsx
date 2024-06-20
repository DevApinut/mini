import React, { Component, useReducer, useEffect } from "react";
import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";

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

    const initials: TestReport = [{
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
    }];


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



    return (
        <>
            <Navbar1 />
            <div className="grow container">
                <div className="flex justify-center flex-column items-center">
                    <div className="text-xl font-bold">SwitchGear Report</div>
                    <div className="flex justify-center">
                        <div className="flex justify-center mx-1">
                            <label className="border bg-slate-100 px-3 rounded">สถานี</label>
                            <select className="border">
                                <option>โพธาราม</option>
                                <option>ดำเนินสะดวก</option>
                                <option>จอมบึง</option>
                                <option>เพชรบุรี</option>
                            </select>
                        </div>
                        <div className="flex justify-center mx-1">
                            <label className="border bg-slate-100 px-3 rounded">ปี</label>
                            <select className="border">                                                                
                                <option>{(new Date()).getFullYear()+543-0}</option>
                                <option>{(new Date()).getFullYear()+543-1}</option>
                                <option>{(new Date()).getFullYear()+543-2}</option>
                                <option>{(new Date()).getFullYear()+543-3}</option>
                                <option>{(new Date()).getFullYear()+543-4}</option>
                                <option>{(new Date()).getFullYear()+543-5}</option>
                                <option>{(new Date()).getFullYear()+543-6}</option>
                                <option>{(new Date()).getFullYear()+543-7}</option>
                                <option>{(new Date()).getFullYear()+543-8}</option>
                                <option>{(new Date()).getFullYear()+543-9}</option>
                                <option>{(new Date()).getFullYear()+543-10}</option>                                
                            </select>
                        </div>
                        <div className="flex justify-center mx-1">
                            <label className="border bg-slate-100 px-3 rounded">Feeder</label>
                            <select className="border">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <label className="border bg-slate-100 px-3 rounded-md">test</label>
                            <input type="text" className="border" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )

}

export default SwitchGear

