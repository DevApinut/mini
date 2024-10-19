import { useEffect, useReducer, useState, useRef } from "react";
// import '../../../css/transformer.css'
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'
import axios from "axios";
import Swal from "sweetalert2"
import Navbar1 from "../../Navbar/Navbar1";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


const Tranfromer = (prop: any) => {
    const history = useNavigate();

    const [nametest_select, set_nametest_select] = useState(0)

    const initials = {

        // ข้อมูลยังขาดการเติม Abnormal ในรูปแบบของ String
        //-------LCC---------
        LCC_Cleaness: false,
        LCC_Lamp: false,
        LCC_MCB: false,
        LCC_CT_terminal: false,
        LCC_Control_cable: false,
        LCC_Cover: false,
        LCC_Abnormal_Check: false,
        LCC_Abnormal_Value: "",

        // ------RCC--------

        RCC_Cleaness: false,
        RCC_Lamp: false,
        RCC_Buzzer: false,
        RCC_Horn: false,
        RCC_AVR: false,
        RCC_Monitoring: false,
        RCC_CT_Terminal: false,
        RCC_Control_Cable: false,
        RCC_Abnormal_Check: false,
        RCC_Abnormal_Value: "",

        //----Motor drive-----

        Motor_Drive_Counter_Check: false,
        Motor_Drive_Counter_Value: "",
        Motor_Drive_Overall: false,
        Motor_Drive_Motor_alarm: false,
        Motor_Drive_Cover: false,
        Motor_Drive_Abnormal_Check: false,
        Motor_Drive_Abnormal_Value: "",

        //----Oil Filter------

        Oil_Filter_Counter_Check: false,
        Oil_Filter_Counter_Value: "",
        Oil_Filter_Overall: false,
        Oil_Filter_Motor_alarm: false,
        Oil_Filter_Cover: false,
        Oil_Filter_Abnormal_Check: false,
        Oil_Filter_Abnormal_Value: "",

        //-----Main tank------------

        Main_Tank_Siliga_gel: false,
        Main_Tank_Case: false,
        Main_Tank_Case_Abnormal: "",
        Main_Tank_Buttom_oil: false,
        Main_Tank_Buttom_oil_Abnormal: "",

        //-------- OLTC ------------

        OLTC_Siliga_gel: false,
        OLTC_Case: false,
        OLTC_Case_Abnormal: "",
        OLTC_Buttom_oil: false,
        OLTC_Buttom_oil_Abnormal: "",

        //------ 115 kV Bushing------

        Bushing115_Slight_Glass: false,
        Bushing115_Terminal: false,
        Bushing115_Test_Tap: false,
        Bushing115_Cleaness: false,
        Bushing115_Abnomal_Check: false,
        Bushing115_Abnomal_Value: "",

        //------ 22 kV cablebox------

        Cablebox_Bushing22: false,
        Cablebox_VT: false,
        Cablebox_Overall: false,
        Cablebox_Abnormal_Check: false,
        Cablebox_Abnormal_Value: "",

        //------ Bucholz relay-------
        Bucholz_Terminal: false,
        Bucholz_Slight_Glass: false,
        Bucholz_IR_Check: false,
        Bucholz_IR_Value: "",
        Bucholz_Trip: false,
        Bucholz_Alarm: false,
        Bucholz_Abnormal_Check: false,
        Bucholz_Abnormal_Value: "",

        //---- Protective relay------
        Protective_Terminal: false,
        Protective_Slight_Glass: false,
        Protective_IR_Check: false,
        Protective_IR_Value: "",
        Protective_Trip: false,
        Protective_Abnormal_Check: false,
        Protective_Abnormal_Value: "",

        //------- PRD Maintank--------
        PRD_Maintank_Switch: false,
        PRD_Maintank_Control_Cable: false,
        PRD_Maintank_Cover: false,
        PRD_Maintank_IR_Check: false,
        PRD_Maintank_IR_Value: "",
        PRD_Maintank_Trip: false,
        PRD_Maintank_Alarm: false,
        PRD_Maintank_Abnormal_Check: false,
        PRD_Maintank_Abnormal_Value: "",

        //------- PRD OLTC--------
        PRD_OLTC_Switch: false,
        PRD_OLTC_Control_Cable: false,
        PRD_OLTC_Cover: false,
        PRD_OLTC_IR_Check: false,
        PRD_OLTC_IR_Value: "",
        PRD_OLTC_Trip: false,
        PRD_OLTC_Alarm: false,
        PRD_OLTC_Abnormal_Check: false,
        PRD_OLTC_Abnormal_Value: "",

        //------- WTI(a)--------
        WTI_A_Switch: false,
        WTI_A_Indicator: false,
        WTI_A_Case: false,
        WTI_A_IR_Check: false,
        WTI_A_IR_Value: "",
        WTI_A_Trip: false,
        WTI_A_Alarm: false,
        WTI_A_Abnormal_Check: false,
        WTI_A_Abnormal_Value: "",

        //------- WTI(b)--------
        WTI_B_Switch: false,
        WTI_B_Indicator: false,
        WTI_B_Case: false,
        WTI_B_IR_Check: false,
        WTI_B_IR_Value: "",
        WTI_B_Trip: false,
        WTI_B_Alarm: false,
        WTI_B_Abnormal_Check: false,
        WTI_B_Abnormal_Value: "",

        //------- WTI(C)--------
        WTI_C_Switch: false,
        WTI_C_Indicator: false,
        WTI_C_Case: false,
        WTI_C_IR_Check: false,
        WTI_C_IR_Value: "",
        WTI_C_Trip: false,
        WTI_C_Alarm: false,
        WTI_C_Abnormal_Check: false,
        WTI_C_Abnormal_Value: "",

        //------- OTI--------
        OTI_Switch: false,
        OTI_Indicator: false,
        OTI_Case: false,
        OTI_IR_Check: false,
        OTI_IR_Value: "",
        OTI_Trip: false,
        OTI_Alarm: false,
        OTI_Abnormal_Check: false,
        OTI_Abnormal_Value: "",

        //------- Radiator--------
        Radiator_Valve_Open: false,
        Radiator_Overall: false,
        Radiator_Cleaness: false,
        Radiator_Abnormal_Check: false,
        Radiator_Abnormal_Value: "",

        //------- Oil level Main_tank--------
        Oil_Level_Main_Tank: "",
        Oil_Level_Main_Tank_Guage: false,
        Oil_Level_Main_Tank_High_Alarm: false,
        Oil_Level_Main_Tank_Low_Alarm: false,
        Oil_Level_Main_Tank_Abnormal_Check: false,
        Oil_Level_Main_Tank_Abnormal_Value: "",

        //------- Oil level OLTC--------
        Oil_Level_OLTC: "",
        Oil_Level_OLTC_Guage: false,
        Oil_Level_OLTC_High_Alarm: false,
        Oil_Level_OLTC_Low_Alarm: false,
        Oil_Level_OLTC_Abnormal_Check: false,
        Oil_Level_OLTC_Abnormal_Value: "",

        //-------Cooling fan-----------
        Cooling_Group1_1: "",
        Cooling_Group1_2: "",
        Cooling_Group2_1: "",
        Cooling_Group2_2: "",
        Cooling_Overall: false,
        Cooling_Sounds: false,
        Cooling_Manual: false,
        Cooling_Remote: false,
        Cooling_Local: false,
        Cooling_Auto: false,
        Cooling_Abnormal_Check: false,
        Cooling_Abnormal_Value: "",

        //-------OLTC Motordrive-----------        
        OLTC_Motor_Drive_Raise: false,
        OLTC_Motor_Drive_Low: false,
        OLTC_Motor_Drive_Emergency: false,
        OLTC_Motor_Drive_Sounds: false,
        OLTC_Motor_Drive_Timming: false,
        OLTC_Motor_Drive_Hand_Crank: false,
        OLTC_Motor_Drive_Abnormal_Check: false,
        OLTC_Motor_Drive_Abnormal_Value: "",

        //-------OLTC RCC-----------        
        OLTC_RCC_Raise: false,
        OLTC_RCC_Low: false,
        OLTC_RCC_Auto: false,
        OLTC_RCC_Manual: false,
        OLTC_RCC_Emergency: false,
        OLTC_RCC_Abnormal_Check: false,
        OLTC_RCC_Abnormal_Value: "",

        //-------OLTC Taposiotion-----------        
        OLTC_Taposition_CSCS: false,
        OLTC_Taposition_RCC: false,
        OLTC_Taposition_Motor_Drive: false,
        OLTC_Taposition_Abnormal_Check: false,
        OLTC_Taposition_Abnormal_Value: "",

        //-------OLTC Current block--------        
        OLTC_Current_Block_Check: false,
        OLTC_Current_Block_Value: "",

        //-------OLTC Hotline--------        
        OLTC_Hotline_Pressure_Guage_Check: false,
        OLTC_Hotline_Pressure_Guage_Value: "",
        OLTC_Hotline_Pressure_Alarm: false,
        OLTC_Hotline_Pressure_Auto: false,
        OLTC_Hotline_Pressure_Manual: false,
        OLTC_Hotline_Pressure_Overall: false,
        OLTC_Hotline_Pressure_Sounds: false,

        //----- Oil Purifier-------------
        OLTC_Oil_Purifier_Time_delay: false,
        OLTC_Oil_Purifier_Abnormal_Check: false,
        OLTC_Oil_Purifier_Abnormal_Value: "",

        //------ OLTC Oil Leak----------
        OLTC_Oil_Leak_At_Check: false,
        OLTC_Oil_Leak_At_Value: "",
        OLTC_Oil_Leak_Delay_Time: false,
        OLTC_Oil_Leak_Delay_Stain: false,
        OLTC_Oil_Leak_Less_Than: false,

    }

    // let initials = { ...prop.transformer[prop.nameTest_select][prop.TP_select].Transformer_Test }


    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case 'setstate':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
            case 'setall':
                const filtered = function (initials: any) {
                    Object.keys(initials).forEach(function (key) { initials[key] = true });
                    return initials;
                }
                // const filtered = Object.assign({ ...Object.keys(initials).map(k => ({ [k]: true })) });
                console.log(filtered(initials))
                return {
                    ...filtered(initials),
                    // ...Object.keys(initials).map(k => ({ [k]: true })),
                    // ข้อมูลยังขาดการเติม Abnormal ในรูปแบบของ String
                    //-------LCC---------                   
                    LCC_Abnormal_Check: false,
                    LCC_Abnormal_Value: "",
                    // ------RCC--------                    
                    RCC_Abnormal_Check: false,
                    RCC_Abnormal_Value: "",
                    //----Motor drive-----                    
                    Motor_Drive_Counter_Value: "",
                    Motor_Drive_Abnormal_Check: false,
                    Motor_Drive_Abnormal_Value: "",
                    //----Oil Filter------                    
                    Oil_Filter_Counter_Value: "",
                    Oil_Filter_Abnormal_Check: false,
                    Oil_Filter_Abnormal_Value: "",
                    //-----Main tank------------ 
                    Main_Tank_Case_Abnormal: "",
                    Main_Tank_Buttom_oil_Abnormal: "",
                    //-------- OLTC ------------                   
                    OLTC_Case_Abnormal: "",
                    OLTC_Buttom_oil_Abnormal: "",
                    //------ 115 kV Bushing------                    
                    Bushing115_Abnomal_Check: false,
                    Bushing115_Abnomal_Value: "",
                    //------ 22 kV cablebox------                    
                    Cablebox_Abnormal_Check: false,
                    Cablebox_Abnormal_Value: "",
                    //------ Bucholz relay-------                    
                    Bucholz_IR_Value: "",
                    Bucholz_Abnormal_Check: false,
                    Bucholz_Abnormal_Value: "",
                    //---- Protective relay------                    
                    Protective_IR_Value: "",
                    Protective_Abnormal_Check: false,
                    Protective_Abnormal_Value: "",
                    //------- PRD Maintank--------                    
                    PRD_Maintank_IR_Value: "",
                    PRD_Maintank_Abnormal_Check: false,
                    PRD_Maintank_Abnormal_Value: "",
                    //------- PRD OLTC--------                    
                    PRD_OLTC_IR_Value: "",
                    PRD_OLTC_Abnormal_Check: false,
                    PRD_OLTC_Abnormal_Value: "",
                    //------- WTI(a)--------                    
                    WTI_A_Abnormal_Check: false,
                    WTI_A_IR_Value: "",
                    WTI_A_Abnormal_Value: "",
                    //------- WTI(b)--------                    
                    WTI_B_Abnormal_Check: false,
                    WTI_B_IR_Value: "",
                    WTI_B_Abnormal_Value: "",
                    //------- WTI(C)--------                    
                    WTI_C_Abnormal_Check: false,
                    WTI_C_IR_Value: "",
                    WTI_C_Abnormal_Value: "",
                    //------- OTI--------                    
                    OTI_Abnormal_Check: false,
                    OTI_IR_Value: "",
                    OTI_Abnormal_Value: "",
                    //------- Radiator--------                   
                    Radiator_Abnormal_Check: false,
                    Radiator_Abnormal_Value: "",
                    //------- Oil level Main_tank--------
                    Oil_Level_Main_Tank: "",
                    Oil_Level_Main_Tank_Abnormal_Check: false,
                    Oil_Level_Main_Tank_Abnormal_Value: "",
                    //------- Oil level OLTC--------
                    Oil_Level_OLTC: "",
                    Oil_Level_OLTC_Abnormal_Check: false,
                    Oil_Level_OLTC_Abnormal_Value: "",
                    //-------Cooling fan-----------
                    Cooling_Group1_1: "",
                    Cooling_Group1_2: "",
                    Cooling_Group2_1: "",
                    Cooling_Group2_2: "",
                    Cooling_Abnormal_Check: false,
                    Cooling_Abnormal_Value: "",
                    //-------OLTC Motordrive-----------
                    OLTC_Motor_Drive_Abnormal_Check: false,
                    OLTC_Motor_Drive_Abnormal_Value: "",
                    //-------OLTC RCC----------- 
                    OLTC_RCC_Abnormal_Check: false,
                    OLTC_RCC_Abnormal_Value: "",
                    //-------OLTC Taposiotion----------- 
                    OLTC_Taposition_Abnormal_Check: false,
                    OLTC_Taposition_Abnormal_Value: "",
                    //-------OLTC Current block--------
                    OLTC_Current_Block_Value: "",
                    //-------OLTC Hotline-------- 
                    OLTC_Hotline_Pressure_Guage_Value: "",
                    //----- Oil Purifier-------------                    
                    OLTC_Oil_Purifier_Abnormal_Check: false,
                    OLTC_Oil_Purifier_Abnormal_Value: "",
                    //------ OLTC Oil Leak----------
                    OLTC_Oil_Leak_At_Check: false,
                    OLTC_Oil_Leak_At_Value: "",
                }
            case 'Abnormalall':
                const Abnormal = function (initials: any) {
                    Object.keys(initials).forEach(function (key) { initials[key] = false });
                    return initials;
                }
                // const Abnormal = Object.assign([...Object.keys(initials).map(k => ({ [k]: false }))]);

                return {
                    ...Abnormal(initials),
                    // ข้อมูลยังขาดการเติม Abnormal ในรูปแบบของ String
                    //-------LCC---------                   
                    LCC_Abnormal_Check: action.payload.value,
                    LCC_Abnormal_Value: "",
                    // ------RCC--------                    
                    RCC_Abnormal_Check: action.payload.value,
                    RCC_Abnormal_Value: "",
                    //----Motor drive-----                    
                    Motor_Drive_Counter_Value: "",
                    Motor_Drive_Abnormal_Check: action.payload.value,
                    Motor_Drive_Abnormal_Value: "",
                    //----Oil Filter------                    
                    Oil_Filter_Counter_Value: "",
                    Oil_Filter_Abnormal_Check: action.payload.value,
                    Oil_Filter_Abnormal_Value: "",
                    //-----Main tank------------ 
                    Main_Tank_Case_Abnormal: "",
                    Main_Tank_Buttom_oil_Abnormal: "",
                    //-------- OLTC ------------                   
                    OLTC_Case_Abnormal: "",
                    OLTC_Buttom_oil_Abnormal: "",
                    //------ 115 kV Bushing------                    
                    Bushing115_Abnomal_Check: action.payload.value,
                    Bushing115_Abnomal_Value: "",
                    //------ 22 kV cablebox------                    
                    Cablebox_Abnormal_Check: action.payload.value,
                    Cablebox_Abnormal_Value: "",
                    //------ Bucholz relay-------                    
                    Bucholz_IR_Value: "",
                    Bucholz_Abnormal_Check: action.payload.value,
                    Bucholz_Abnormal_Value: "",
                    //---- Protective relay------                    
                    Protective_IR_Value: "",
                    Protective_Abnormal_Check: action.payload.value,
                    Protective_Abnormal_Value: "",
                    //------- PRD Maintank--------                    
                    PRD_Maintank_IR_Value: "",
                    PRD_Maintank_Abnormal_Check: action.payload.value,
                    PRD_Maintank_Abnormal_Value: "",
                    //------- PRD OLTC--------                    
                    PRD_OLTC_IR_Value: "",
                    PRD_OLTC_Abnormal_Check: action.payload.value,
                    PRD_OLTC_Abnormal_Value: "",
                    //------- WTI(a)--------                    
                    WTI_A_Abnormal_Check: action.payload.value,
                    WTI_A_IR_Value: "",
                    WTI_A_Abnormal_Value: "",
                    //------- WTI(b)--------                    
                    WTI_B_Abnormal_Check: action.payload.value,
                    WTI_B_IR_Value: "",
                    WTI_B_Abnormal_Value: "",
                    //------- WTI(C)--------                    
                    WTI_C_Abnormal_Check: action.payload.value,
                    WTI_C_IR_Value: "",
                    WTI_C_Abnormal_Value: "",
                    //------- OTI--------                    
                    OTI_Abnormal_Check: action.payload.value,
                    OTI_IR_Value: "",
                    OTI_Abnormal_Value: "",
                    //------- Radiator--------                   
                    Radiator_Abnormal_Check: action.payload.value,
                    Radiator_Abnormal_Value: "",
                    //------- Oil level Main_tank--------
                    Oil_Level_Main_Tank: "",
                    Oil_Level_Main_Tank_Abnormal_Check: action.payload.value,
                    Oil_Level_Main_Tank_Abnormal_Value: "",
                    //------- Oil level OLTC--------
                    Oil_Level_OLTC: "",
                    Oil_Level_OLTC_Abnormal_Check: action.payload.value,
                    Oil_Level_OLTC_Abnormal_Value: "",
                    //-------Cooling fan-----------
                    Cooling_Group1_1: "",
                    Cooling_Group1_2: "",
                    Cooling_Group2_1: "",
                    Cooling_Group2_2: "",
                    Cooling_Abnormal_Check: action.payload.value,
                    Cooling_Abnormal_Value: "",
                    //-------OLTC Motordrive-----------
                    OLTC_Motor_Drive_Abnormal_Check: action.payload.value,
                    OLTC_Motor_Drive_Abnormal_Value: "",
                    //-------OLTC RCC----------- 
                    OLTC_RCC_Abnormal_Check: action.payload.value,
                    OLTC_RCC_Abnormal_Value: "",
                    //-------OLTC Taposiotion----------- 
                    OLTC_Taposition_Abnormal_Check: action.payload.value,
                    OLTC_Taposition_Abnormal_Value: "",
                    //-------OLTC Current block--------
                    OLTC_Current_Block_Value: "",
                    //-------OLTC Hotline-------- 
                    OLTC_Hotline_Pressure_Guage_Value: "",
                    //----- Oil Purifier-------------                    
                    OLTC_Oil_Purifier_Abnormal_Check: action.payload.value,
                    OLTC_Oil_Purifier_Abnormal_Value: "",
                    //------ OLTC Oil Leak----------
                    OLTC_Oil_Leak_At_Check: false,
                    OLTC_Oil_Leak_At_Value: "",
                }
            case 'setformtest':
                return {
                    ...state,
                    ...action.payload
                }

        }
    }

    const [state, dispatch] = useReducer(reducer, initials)


    useEffect(() => {
        // set_into_state()
    }, [])





    return (
        <>
            <Navbar1 />
            <div className="grow container">
                <form className="d-flex justify-content-center" >
                    <div className="normal">
                        <div className="d-flex justify-content-center my-3">
                            <div className="text-center"><h4>Power Transformer</h4></div>
                            <div className="btn btn-danger" onClick={() => { dispatch({ type: "Abnormalall", payload: { value: true } }) }}>
                                ab
                            </div>
                            <div className="btn btn-success" onClick={() => { dispatch({ type: "setall", payload: { value: true } }) }}>
                                set
                            </div>
                        </div>

                        <div className="flex justify-center flex-col border rounded w-full py-2">
                            <div className="text-center">ข้อมูลสถานี</div>
                            <div className="flex justify-centerw-full ">
                                <div className="flex justify-center w-full">
                                    <div className="flex justify-center flex-col mx-1 w-1/3">
                                        <div className="text-center text-red-800 font-semibold">สถานี</div>
                                        <select className="border rounded-md" value={state.SubstationSelect_TH_ENG}>
                                            <option>test1</option>
                                            <option>test1</option>
                                            <option>test1</option>
                                        </select>
                                    </div>
                                    <div className="flex justify-center flex-col mx-1 w-1/3">
                                        <div className="text-center text-red-800 font-semibold">ฟีดเดอร์</div>
                                        <select className="border  rounded-md" value={state.FeederSelect}>
                                            <option>test1</option>
                                            <option>test1</option>
                                            <option>test1</option>
                                        </select>
                                    </div>
                                    <div className="flex mx-1 w-1/3 items-center">
                                        <div className="flex justify-center flex-col w-10/12">
                                            <div className="text-center text-red-800 font-semibold">ปี</div>
                                            <select className="border rounded-md" value={state.YearSelect}>
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




                        {/* <div className="d-flex justify-content-center align-items-center">
                            <input className="form-check-input mt-3" id="check_all" type="checkbox" onChange={(e) => { dispatch({ type: 'setall', payload: { name: initials, value: e.target.checked } }) }} />
                            <label className="form-check-label mt-3" htmlFor="check_all">ปกติ</label>
                            <input className="form-check-input ms-3 mt-3" id="check_invalid" type="checkbox" onChange={(e) => { dispatch({ type: 'Abnormalall', payload: { name: initials, value: e.target.checked } }) }} />
                            <label className="form-check-label mt-3" htmlFor="check_invalid">ผิดปกติ</label>
                        </div> */}

                        {/* -----------------------------------------------------การตรวจเช็คตู้ LCC------------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Local Cabinet Control (LCC)</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="LCC_Cleaness" checked={state.LCC_Cleaness} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "LCC_Cleaness", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="LCC_Cleaness">Cleaness</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="LCC_Lamp" checked={state.LCC_Lamp} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "LCC_Lamp", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="LCC_Lamp">Lamp</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="LCC_MCB" checked={state.LCC_MCB} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "LCC_MCB", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="LCC_MCB">MCB/Fan Alarm</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="LCC_CT_terminal" checked={state.LCC_CT_terminal} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "LCC_CT_terminal", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="LCC_CT_terminal">CT Terminal</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="LCC_Control_cable" checked={state.LCC_Control_cable} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "LCC_Control_cable", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="LCC_Control_cable">Control Cable</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="LCC_Cover" checked={state.LCC_Cover} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "LCC_Cover", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="LCC_Cover">Cover/seal</label>
                                </div>
                                <div className="flex justify-center w-full m-2">
                                    <input className="form-check-input" type="checkbox" id="LCC_Abnormal_Check" checked={state.LCC_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "LCC_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="LCC_Abnormal_Check">Abnormal</label>
                                    <input className="form-control w-full" type="text" placeholder="้โปรดป้อนรายละเอียด LCC" disabled={!state.LCC_Abnormal_Check} value={state.LCC_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "LCC_Abnormal_Value", value: e.target.value } }) }}></input>
                                </div>
                            </div>

                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็คตู้ RCC-------------------------------------------------------- */}

                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Remote Cabinet Control (RCC)</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="RCC_Cleaness" checked={state.RCC_Cleaness} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "RCC_Cleaness", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="RCC_Cleaness">Cleaness</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="RCC_Lamp" checked={state.RCC_Lamp} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "RCC_Lamp", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="RCC_Lamp">Lamp</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="RCC_Buzzer" checked={state.RCC_Buzzer} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "RCC_Buzzer", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="RCC_Buzzer">Buzzer</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="RCC_Horn" checked={state.RCC_Horn} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "RCC_Horn", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="RCC_Horn">Horn</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="RCC_AVR" checked={state.RCC_AVR} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "RCC_AVR", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="RCC_AVR">AVR</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="RCC_Monitoring" checked={state.RCC_Monitoring} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "RCC_Monitoring", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="RCC_Monitoring">Monitoring (if any)</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="RCC_CT_Terminal" checked={state.RCC_CT_Terminal} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "RCC_CT_Terminal", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="RCC_CT_Terminal">CT terminal</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="RCC_Control_Cable" checked={state.RCC_Control_Cable} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "RCC_Control_Cable", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="RCC_Control_Cable">Control Cable</label>
                                </div>
                                <div className="flex justify-center w-full m-2">
                                    <input className="form-check-input" type="checkbox" id="RCC_Abnormal_Check" checked={state.RCC_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "RCC_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="RCC_Abnormal_Check">Abnormal</label>
                                    <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด RCC" disabled={!state.RCC_Abnormal_Check} value={state.RCC_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "RCC_Abnormal_Value", value: e.target.value } }) }}></input>
                                </div>
                            </div>
                        </div>

                        {/* --------------------------------------------------------------การตรวจเช็คตู้ motor drive---------------------------------------------------- */}

                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Motor Drive Unit(MDU)</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Motor_Drive_Overall" checked={state.Motor_Drive_Overall} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Motor_Drive_Overall", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Motor_Drive_Overall">Overall</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Motor_Drive_Motor_alarm" checked={state.Motor_Drive_Motor_alarm} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Motor_Drive_Motor_alarm", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Motor_Drive_Motor_alarm">Motor Alarm</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Motor_Drive_Cover" checked={state.Motor_Drive_Cover} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Motor_Drive_Cover", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Motor_Drive_Cover">Cover/seal</label>
                                </div>
                                <div className="flex w-full justify-start grow flex-wrap">
                                    <div className="form-check mx-2 d-flex justify-content-center align-items-center grow">
                                        <input className="form-check-input" type="checkbox" id="Motor_Drive_Counter_Check" checked={state.Motor_Drive_Counter_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Motor_Drive_Counter_Check", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Motor_Drive_Counter_Check">Counter</label>
                                        <input className="form-control" type="text" placeholder="Counter" disabled={!state.Motor_Drive_Counter_Check} value={state.Motor_Drive_Counter_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Motor_Drive_Counter_Value", value: e.target.value } }) }}></input>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center grow m-2">
                                        <input className="form-check-input" type="checkbox" id="Motor_Drive_Abnormal_Check" checked={state.Motor_Drive_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Motor_Drive_Abnormal_Check", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Motor_Drive_Abnormal_Check">Abnormal</label>
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด Motor drive" disabled={!state.Motor_Drive_Abnormal_Check} value={state.Motor_Drive_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Motor_Drive_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค oil filter-------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Oil Filter</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Oil_Filter_Overall" checked={state.Oil_Filter_Overall} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Filter_Overall", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Oil_Filter_Overall">Overall</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Oil_Filter_Motor_alarm" checked={state.Oil_Filter_Motor_alarm} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Filter_Motor_alarm", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Oil_Filter_Motor_alarm">Motor Alarm</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Oil_Filter_Cover" checked={state.Oil_Filter_Cover} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Filter_Cover", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Oil_Filter_Cover">Cover/seal</label>
                                </div>
                                <div className="flex w-full justify-start flex-wrap">
                                    <div className="form-check mx-2 d-flex justify-content-center align-items-center grow">
                                        <input className="form-check-input" type="checkbox" id="Oil_Filter_Counter_Check" checked={state.Oil_Filter_Counter_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Filter_Counter_Check", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Oil_Filter_Counter_Check">Counter</label>
                                        <input className="form-control" type="text" placeholder="Counter" disabled={!state.Oil_Filter_Counter_Check} value={state.Oil_Filter_Counter_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Filter_Counter_Value", value: e.target.value } }) }}></input>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center grow m-2">
                                        <input className="form-check-input" type="checkbox" id="Oil_Filter_Abnormal_Check" checked={state.Oil_Filter_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Filter_Abnormal_Check", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Oil_Filter_Abnormal_Check">Abnormal</label>
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด Oil filter" disabled={!state.Oil_Filter_Abnormal_Check} value={state.Oil_Filter_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Filter_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค Main tank-------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Main Tank</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="flex w-full flex-wrap">
                                    <div className="d-flex justify-content-start items-center w-auto px-2">
                                        <label className="form-check-label" htmlFor="flexCheckDefault">Change new silica gel</label>
                                        <input className="form-check-input ms-1" type="checkbox" id=" Main_Tank_Siliga_gel_yes" checked={state.Main_Tank_Siliga_gel} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Main_Tank_Siliga_gel", value: e.target.checked } }) }} />
                                        <label className="form-check-label ms-1" htmlFor=" Main_Tank_Siliga_gel_yes">yes</label>
                                        <input className="form-check-input ms-1" type="checkbox" id="Main_Tank_Siliga_gel_no" checked={!state.Main_Tank_Siliga_gel} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Main_Tank_Siliga_gel", value: !e.target.checked } }) }} />
                                        <label className="form-check-label ms-1" htmlFor="Main_Tank_Siliga_gel_no">no</label>
                                    </div>
                                    <div className="flex grow justify-start items-center flex-wrap">
                                        <div className="flex mx-2">
                                            <input className="form-check-input p-0" type="checkbox" id="Main_Tank_Case_yes" checked={state.Main_Tank_Case} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Main_Tank_Case", value: e.target.checked } }) }} />
                                            <label className="form-check-label p-0" htmlFor="Main_Tank_Case_yes">Case normal</label>
                                        </div>
                                        <div className="flex items-center mx-2 grow">
                                            <input className="form-check-input p-0" type="checkbox" id="Main_Tank_Case_no" checked={!state.Main_Tank_Case} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Main_Tank_Case", value: !e.target.checked } }) }} />
                                            <label className="form-check-label p-0 " htmlFor="Main_Tank_Case_no">Case Abnormal</label>
                                            <div className="p-0 items-center grow">
                                                <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด case" disabled={state.Main_Tank_Case} value={state.Main_Tank_Case_Abnormal} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Main_Tank_Case_Abnormal", value: e.target.value } }) }}></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-full flex-wrap">
                                    <div className="flex mx-2">
                                        <input className="form-check-input p-0" type="checkbox" id="Main_Tank_Buttom_oil_normal" checked={state.Main_Tank_Buttom_oil} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Main_Tank_Buttom_oil", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Main_Tank_Buttom_oil_normal">Buttom oil normal</label>
                                    </div>
                                    <div className="flex m-2 grow">
                                        <input className="form-check-input p-0" type="checkbox" id="Main_Tank_Buttom_oil_Abnormal" checked={!state.Main_Tank_Buttom_oil} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Main_Tank_Buttom_oil", value: !e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Main_Tank_Buttom_oil_Abnormal">Buttom oil Abnormal</label>
                                        <div className="grow">
                                            <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด buttom oil" disabled={state.Main_Tank_Buttom_oil} value={state.Main_Tank_Buttom_oil_Abnormal} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Main_Tank_Buttom_oil_Abnormal", value: e.target.value } }) }}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค OLTC-------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Onload Tap Change (OLTC)</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="flex w-full flex-wrap">
                                    <div className="d-flex justify-content-start items-center w-auto px-2">
                                        <label className="form-check-label" htmlFor="flexCheckDefault">Change new silica gel</label>
                                        <input className="form-check-input ms-1" type="checkbox" id=" OLTC_Siliga_gel_yes" checked={state.OLTC_Siliga_gel} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Siliga_gel", value: e.target.checked } }) }} />
                                        <label className="form-check-label ms-1" htmlFor="OLTC_Siliga_gel_yes">yes</label>
                                        <input className="form-check-input ms-1" type="checkbox" id="OLTC_Siliga_gel_no" checked={!state.OLTC_Siliga_gel} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Siliga_gel", value: !e.target.checked } }) }} />
                                        <label className="form-check-label ms-1" htmlFor="OLTC_Siliga_gel_no">no</label>
                                    </div>
                                    <div className="flex grow justify-start items-center grow flex-wrap">
                                        <div className="flex mx-2">
                                            <input className="form-check-input p-0" type="checkbox" id="OLTC_Case_yes" checked={state.OLTC_Case} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Case", value: e.target.checked } }) }} />
                                            <label className="form-check-label p-0" htmlFor="OLTC_Case_yes">Case normal</label>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center grow p-0">
                                            <input className="form-check-input p-0" type="checkbox" id="OLTC_Case_no" checked={!state.OLTC_Case} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Case", value: !e.target.checked } }) }} />
                                            <label className="form-check-label p-0" htmlFor="OLTC_Case_no">Case Abnormal</label>
                                            <div className="p-0 grow m-2">
                                                <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด case" disabled={state.OLTC_Case} value={state.OLTC_Case_Abnormal} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Case_Abnormal", value: e.target.value } }) }}></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-wrap">
                                    <div className="flex mx-2">
                                        <input className="form-check-input p-0" type="checkbox" id="OLTC_Buttom_oil_normal" checked={state.OLTC_Buttom_oil} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Buttom_oil", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="OLTC_Buttom_oil_normal">Buttom oil normal</label>
                                    </div>
                                    <div className="flex grow m-2 ">
                                        <input className="form-check-input p-0" type="checkbox" id="OLTC_Buttom_oil_Abnormal" checked={!state.OLTC_Buttom_oil} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Buttom_oil", value: !e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="OLTC_Buttom_oil_Abnormal">Buttom oil Abnormal</label>
                                        <div className="grow">
                                            <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด buttom oil" disabled={state.OLTC_Buttom_oil} value={state.OLTC_Buttom_oil_Abnormal} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Buttom_oil_Abnormal", value: e.target.value } }) }}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค 115 kV bushing-------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">115 kV Bushing</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Bushing115_Slight_Glass" checked={state.Bushing115_Slight_Glass} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bushing115_Slight_Glass", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Bushing115_Slight_Glass">Slight glass</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Bushing115_Terminal" checked={state.Bushing115_Terminal} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bushing115_Terminal", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Bushing115_Terminal">Terminal</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Bushing115_Test_Tap" checked={state.Bushing115_Test_Tap} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bushing115_Test_Tap", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Bushing115_Test_Tap">Test tap</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Bushing115_Cleaness" checked={state.Bushing115_Cleaness} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bushing115_Cleaness", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Bushing115_Cleaness">Housing+cleaness</label>
                                </div>
                                <div className="flex justify-center w-full m-2">
                                    <input className="form-check-input" type="checkbox" id="Bushing115_Abnomal_Check" checked={state.Bushing115_Abnomal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bushing115_Abnomal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Bushing115_Abnomal_Check">Abnormal</label>
                                    <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด bushing" disabled={!state.Bushing115_Abnomal_Check} value={state.Bushing115_Abnomal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bushing115_Abnomal_Value", value: e.target.value } }) }}></input>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค cable box-------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Cable Box</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Cablebox_Bushing22" checked={state.Cablebox_Bushing22} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: " Cablebox_Bushing22", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor=" Cablebox_Bushing22">22/33 kV bushing</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Cablebox_VT" checked={state.Cablebox_VT} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cablebox_VT", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Cablebox_VT">VT</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Cablebox_Overall" checked={state.Cablebox_Overall} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cablebox_Overall", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Cablebox_Overall">Over all</label>
                                </div>
                                <div className="flex justify-center w-full m-2">
                                    <input className="form-check-input" type="checkbox" id="Cablebox_Abnormal_Check" checked={state.Cablebox_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cablebox_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Cablebox_Abnormal_Check">Abnormal</label>
                                    <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด cable box" disabled={!state.Cablebox_Abnormal_Check} value={state.Cablebox_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cablebox_Abnormal_Value", value: e.target.value } }) }}></input>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค busholz------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Buchholz relay</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="w-full flex flex-wrap items-center">
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="Bucholz_Terminal" checked={state.Bucholz_Terminal} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bucholz_Terminal", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Bucholz_Terminal">Terminal box</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="Bucholz_Slight_Glass" checked={state.Bucholz_Slight_Glass} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bucholz_Slight_Glass", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor=" Bucholz_Slight_Glass">slight glass</label>
                                    </div>
                                    <div className="flex justify-center items-center grow mx-2">
                                        <input className="form-check-input" type="checkbox" id="Bucholz_IR_Check" checked={state.Bucholz_IR_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bucholz_IR_Check", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Bucholz_IR_Check">I.R.</label>
                                        <input className="form-control" type="text" placeholder="หน่วย ohm" disabled={!state.Bucholz_IR_Check} value={state.Bucholz_IR_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bucholz_IR_Value", value: e.target.value } }) }}></input>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="Bucholz_Trip" checked={state.Bucholz_Trip} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bucholz_Trip", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Bucholz_Trip">Trip</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="Bucholz_Alarm" checked={state.Bucholz_Alarm} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bucholz_Alarm", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Bucholz_Alarm">Alarm</label>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center grow m-2">
                                    <input className="form-check-input" type="checkbox" id="Bucholz_Abnormal_Check" checked={state.Bucholz_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bucholz_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Bucholz_Abnormal_Check">Abnormal</label>
                                    <div className="grow">
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด cable box" disabled={!state.Bucholz_Abnormal_Check} value={state.Bucholz_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Bucholz_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค Protective relay------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Protective relay</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="w-full flex flex-wrap items-center">
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="Protective_Terminal" checked={state.Protective_Terminal} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Protective_Terminal", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Protective_Terminal">Terminal box</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="Protective_Slight_Glass" checked={state.Protective_Slight_Glass} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Protective_Slight_Glass", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Protective_Slight_Glass">slight glass</label>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center grow mx-2">
                                        <input className="form-check-input" type="checkbox" id="Protective_IR_Check" checked={state.Protective_IR_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Protective_IR_Check", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Protective_IR_Check">I.R.</label>
                                        <input className="form-control" type="text" placeholder="หน่วย ohm" disabled={!state.Protective_IR_Check} value={state.Protective_IR_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Protective_IR_Value", value: e.target.value } }) }}></input>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="Protective_Trip" checked={state.Protective_Trip} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Protective_Trip", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Protective_Trip">Trip</label>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center grow m-2">
                                    <input className="form-check-input" type="checkbox" id=" Protective_Abnormal_Check" checked={state.Protective_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Protective_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor=" Protective_Abnormal_Check">Abnormal</label>
                                    <div className="grow">
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด cable box" disabled={!state.Protective_Abnormal_Check} value={state.Protective_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Protective_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค PRD maintank------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">PRD Maintank</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="w-full flex flex-wrap items-center">
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="PRD_Maintank_Switch" checked={state.PRD_Maintank_Switch} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_Maintank_Switch", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="PRD_Maintank_Switch">Switch</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="PRD_Maintank_Control_Cable" checked={state.PRD_Maintank_Control_Cable} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_Maintank_Control_Cable", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="PRD_Maintank_Control_Cable">Control cable</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="PRD_Maintank_Cover" checked={state.PRD_Maintank_Cover} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_Maintank_Cover", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="PRD_Maintank_Cover">Cover</label>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center grow mx-2">
                                        <input className="form-check-input" type="checkbox" id="PRD_Maintank_IR_Check" checked={state.PRD_Maintank_IR_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_Maintank_IR_Check", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="PRD_Maintank_IR_Check">I.R.</label>
                                        <input className="form-control" type="text" placeholder="หน่วย ohm" disabled={!state.PRD_Maintank_IR_Check} value={state.PRD_Maintank_IR_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_Maintank_IR_Value", value: e.target.value } }) }}></input>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="PRD_Maintank_Trip" checked={state.PRD_Maintank_Trip} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_Maintank_Trip", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="PRD_Maintank_Trip">Trip</label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center m-2 grow">
                                    <input className="form-check-input" type="checkbox" id="PRD_Maintank_Abnormal_Check" checked={state.PRD_Maintank_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_Maintank_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="PRD_Maintank_Abnormal_Check">Abnormal</label>
                                    <div className="grow ">
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด cable box" disabled={!state.PRD_Maintank_Abnormal_Check} value={state.PRD_Maintank_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_Maintank_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค PRD OLTC------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">PRD OLTC</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="w-full flex grow flex-wrap items-center">
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="PRD_OLTC_Switch" checked={state.PRD_OLTC_Switch} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_OLTC_Switch", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="PRD_OLTC_Switch">Switch</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="PRD_OLTC_Control_Cable" checked={state.PRD_OLTC_Control_Cable} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_OLTC_Control_Cable", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="PRD_OLTC_Control_Cable">Control cable</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="PRD_OLTC_Cover" checked={state.PRD_OLTC_Cover} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_OLTC_Cover", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="PRD_OLTC_Cover">Cover</label>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center grow mx-2">
                                        <input className="form-check-input" type="checkbox" id="PRD_OLTC_IR_Check" checked={state.PRD_OLTC_IR_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_OLTC_IR_Check", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="PRD_OLTC_IR_Check">I.R.</label>
                                        <input className="form-control" type="text" placeholder="หน่วย ohm" disabled={!state.PRD_OLTC_IR_Check} value={state.PRD_OLTC_IR_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_OLTC_IR_Value", value: e.target.value } }) }}></input>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="PRD_OLTC_Trip" checked={state.PRD_OLTC_Trip} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_OLTC_Trip", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="PRD_OLTC_Trip">Trip</label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center grow m-2">
                                    <input className="form-check-input" type="checkbox" id="PRD_OLTC_Abnormal_Check" checked={state.PRD_OLTC_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_OLTC_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="PRD_OLTC_Abnormal_Check">Abnormal</label>
                                    <div className="grow">
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด cable box" disabled={!state.PRD_OLTC_Abnormal_Check} value={state.PRD_OLTC_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "PRD_OLTC_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค WTI(A)------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Winding Temp (PhaseA)</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="w-full flex grow flex-wrap items-center">
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_A_Switch" checked={state.WTI_A_Switch} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_A_Switch", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_A_Switch">Switch</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_A_Indicator" checked={state.WTI_A_Indicator} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_A_Indicator", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_A_Indicator">Indicator</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_A_Case" checked={state.WTI_A_Case} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_A_Case", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_A_Case">Case</label>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center grow mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_A_IR_Check" checked={state.WTI_A_IR_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_A_IR_Check", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_A_IR_Check">I.R.</label>
                                        <input className="form-control" type="text" placeholder="หน่วย ohm" disabled={!state.WTI_A_IR_Check} value={state.WTI_A_IR_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_A_IR_Value", value: e.target.value } }) }}></input>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_A_Trip" checked={state.WTI_A_Trip} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_A_Trip", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_A_Trip">Trip</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_A_Alarm" checked={state.WTI_A_Alarm} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_A_Alarm", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_A_Alarm">Alarm</label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center grow m-2">
                                    <input className="form-check-input" type="checkbox" id="WTI_A_Abnormal_Check" checked={state.WTI_A_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_A_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="WTI_A_Abnormal_Check">Abnormal</label>
                                    <div className="grow">
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด Widing temp phase A" disabled={!state.WTI_A_Abnormal_Check} value={state.WTI_A_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_A_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค WTI(B)------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Winding Temp (PhaseB)</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="w-full flex grow flex-wrap items-center">
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_B_Switch" checked={state.WTI_B_Switch} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_B_Switch", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_B_Switch">Switch</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_B_Indicator" checked={state.WTI_B_Indicator} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_B_Indicator", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_B_Indicator">Indicator</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_B_Case" checked={state.WTI_B_Case} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_B_Case", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_B_Case">Case</label>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center grow mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_B_IR_Check" checked={state.WTI_B_IR_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_B_IR_Check", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_B_IR_Check">I.R.</label>
                                        <input className="form-control" type="text" placeholder="หน่วย ohm" disabled={!state.WTI_B_IR_Check} value={state.WTI_B_IR_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_B_IR_Value", value: e.target.value } }) }}></input>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_B_Trip" checked={state.WTI_B_Trip} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_B_Trip", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_B_Trip">Trip</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_B_Alarm" checked={state.WTI_B_Alarm} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_B_Alarm", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_B_Alarm">Alarm</label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center grow m-2">
                                    <input className="form-check-input" type="checkbox" id="WTI_B_Abnormal_Check" checked={state.WTI_B_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_B_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="WTI_B_Abnormal_Check">Abnormal</label>
                                    <div className="grow">
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด Widing temp phase A" disabled={!state.WTI_B_Abnormal_Check} value={state.WTI_B_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_B_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค WTI(C)------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Winding Temp (PhaseC)</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="w-full flex grow flex-wrap items-center">
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_C_Switch" checked={state.WTI_C_Switch} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_C_Switch", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_C_Switch">Switch</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_C_Indicator" checked={state.WTI_C_Indicator} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_C_Indicator", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_C_Indicator">Indicator</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_C_Case" checked={state.WTI_C_Case} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_C_Case", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_C_Case">Case</label>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center grow mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_C_IR_Check" checked={state.WTI_C_IR_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_C_IR_Check", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_C_IR_Check">I.R.</label>
                                        <input className="form-control" type="text" placeholder="หน่วย ohm" disabled={!state.WTI_C_IR_Check} value={state.WTI_C_IR_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_C_IR_Value", value: e.target.value } }) }}></input>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_C_Trip" checked={state.WTI_C_Trip} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_C_Trip", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_C_Trip">Trip</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="WTI_C_Alarm" checked={state.WTI_C_Alarm} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_C_Alarm", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="WTI_C_Alarm">Alarm</label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center grow m-2">
                                    <input className="form-check-input" type="checkbox" id="WTI_C_Abnormal_Check" checked={state.WTI_C_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_C_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="WTI_C_Abnormal_Check">Abnormal</label>
                                    <div className="grow">
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด Widing temp phase A" disabled={!state.WTI_C_Abnormal_Check} value={state.WTI_C_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "WTI_C_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค OTI------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Oil Temp</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="w-full flex grow flex-wrap items-center">
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="OTI_Switch" checked={state.OTI_Switch} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OTI_Switch", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="OTI_Switch">Switch</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="OTI_Indicator" checked={state.OTI_Indicator} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OTI_Indicator", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="OTI_Indicator">Indicator</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="OTI_Case" checked={state.OTI_Case} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OTI_Case", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="OTI_Case">Case</label>
                                    </div>
                                    <div className="d-flex justify-center items-center grow mx-2">
                                        <input className="form-check-input" type="checkbox" id="OTI_IR_Check" checked={state.OTI_IR_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OTI_IR_Check", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="OTI_IR_Check">I.R.</label>
                                        <input className="form-control" type="text" placeholder="หน่วย ohm" disabled={!state.OTI_IR_Check} value={state.OTI_IR_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OTI_IR_Value", value: e.target.value } }) }}></input>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="OTI_Trip" checked={state.OTI_Trip} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OTI_Trip", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="OTI_Trip">Trip</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" type="checkbox" id="OTI_Alarm" checked={state.OTI_Alarm} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OTI_Alarm", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="OTI_Alarm">Alarm</label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center grow m-2">
                                    <input className="form-check-input" type="checkbox" id="OTI_Abnormal_Check" checked={state.OTI_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OTI_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OTI_Abnormal_Check">Abnormal</label>
                                    <div className="grow">
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด Widing temp phase A" disabled={!state.OTI_Abnormal_Check} value={state.OTI_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OTI_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค Radiator-------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Radiator</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Radiator_Valve_Open" checked={state.Radiator_Valve_Open} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Radiator_Valve_Open", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Radiator_Valve_Open">Valve Open</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Radiator_Overall" checked={state.Radiator_Overall} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Radiator_Overall", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Radiator_Overall">Over all</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="Radiator_Cleaness" checked={state.Radiator_Cleaness} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Radiator_Cleaness", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Radiator_Cleaness">Cleaness</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center w-full m-2">
                                    <input className="form-check-input" type="checkbox" id="Radiator_Abnormal_Check" checked={state.Radiator_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Radiator_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Radiator_Abnormal_Check">Abnormal</label>
                                    <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด ครีป" disabled={!state.Radiator_Abnormal_Check} value={state.Radiator_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Radiator_Abnormal_Value", value: e.target.value } }) }}></input>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค oil level--------------------------------------------------------
                    <div className="d-flex justify-content-start align-items-center border p-2">
                        <h5 className="col-lg-1">Oil level</h5>
                        <div className="form-check d-flex justify-content-center">
                            <label className="form-check-label" htmlFor="flexCheckDefault">Main tank</label>
                            <input className="form-check-input ms-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">%</label>
                            <label className="form-check-label ms-1" htmlFor="flexCheckDefault">yes</label>
                            <input className="form-check-input ms-3" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label ms-1" htmlFor="flexCheckDefault">no</label>
                        </div>
                        <div className="form-check mx-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Guage</label>
                        </div>
                        <div className="form-check mx-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">High alarm</label>
                        </div>
                        <div className="form-check mx-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">low alarm</label>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Abnormal</label>
                            <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด oil level"></input>
                        </div>
                    </div> */}
                        {/* ----------------------------------------------------------การตรวจเช็ค oil level Main tank-------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Oil level main tank</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="flex mx-2 w-full justify-start flex-wrap">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <label className="form-check-label" htmlFor="flexCheckDefault">Main tank</label>
                                        <div>
                                            <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด %" value={state.Oil_Level_Main_Tank} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Level_Main_Tank", value: e.target.value } }) }}></input>
                                        </div>
                                    </div>
                                    <div className="mx-2">
                                        <input className="form-check-input" type="checkbox" id="Oil_Level_Main_Tank_Guage" checked={state.Oil_Level_Main_Tank_Guage} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Level_Main_Tank_Guage", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Oil_Level_Main_Tank_Guage">Guage</label>
                                    </div>
                                    <div className="mx-2">
                                        <input className="form-check-input" type="checkbox" id="Oil_Level_Main_Tank_High_Alarm" checked={state.Oil_Level_Main_Tank_High_Alarm} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Level_Main_Tank_High_Alarm", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Oil_Level_Main_Tank_High_Alarm">High alarm</label>
                                    </div>
                                    <div className="mx-2">
                                        <input className="form-check-input" type="checkbox" id="Oil_Level_Main_Tank_Low_Alarm" checked={state.Oil_Level_Main_Tank_Low_Alarm} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Level_Main_Tank_Low_Alarm", value: e.target.checked } }) }} />
                                        <label className="form-check-label" htmlFor="Oil_Level_Main_Tank_Low_Alarm">low alarm</label>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center align-items-center grow w-full m-2">
                                    <input className="form-check-input" type="checkbox" id="Oil_Level_Main_Tank_Abnormal_Check" checked={state.Oil_Level_Main_Tank_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Level_Main_Tank_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Oil_Level_Main_Tank_Abnormal_Check">Abnormal</label>
                                    <div className="grow">
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด oil level" disabled={!state.Oil_Level_Main_Tank_Abnormal_Check} value={state.Oil_Level_Main_Tank_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Level_Main_Tank_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค oil level OLTC-------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Oil level OLTC</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="d-flex justify-content-start align-items-center mx-2">
                                    <label className="form-check-label" htmlFor="flexCheckDefault">OLTC</label>
                                    <div>
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด %" value={state.Oil_Level_OLTC} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Level_OLTC", value: e.target.value } }) }}></input>
                                    </div>
                                </div>
                                <div className="mx-2">
                                    <input className="form-check-input" type="checkbox" id="Oil_Level_OLTC_Guage" checked={state.Oil_Level_OLTC_Guage} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Level_OLTC_Guage", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Oil_Level_OLTC_Guage">Guage</label>
                                </div>
                                <div className=" mx-2">
                                    <input className="form-check-input" type="checkbox" id="Oil_Level_OLTC_High_Alarm" checked={state.Oil_Level_OLTC_High_Alarm} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Level_OLTC_High_Alarm", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Oil_Level_OLTC_High_Alarm">High alarm</label>
                                </div>
                                <div className="mx-2">
                                    <input className="form-check-input" type="checkbox" id="Oil_Level_OLTC_Low_Alarm" checked={state.Oil_Level_OLTC_Low_Alarm} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Level_OLTC_Low_Alarm", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Oil_Level_OLTC_Low_Alarm">low alarm</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center w-full m-2">
                                    <input className="form-check-input" type="checkbox" id="Oil_Level_OLTC_Abnormal_Check" checked={state.Oil_Level_OLTC_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Level_OLTC_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Oil_Level_OLTC_Abnormal_Check">Abnormal</label>
                                    <div className="grow">
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด oil level" disabled={!state.Oil_Level_OLTC_Abnormal_Check} value={state.Oil_Level_OLTC_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Oil_Level_OLTC_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------การตรวจเช็ค Cooling fan-------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">Cooling Fan</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="flex justify-center w-full flex-wrap">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="flex">
                                            <div>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">Group 1 No.</label>
                                            </div>
                                            <div>
                                                <input className="form-control" type="text" placeholder="" value={state.Cooling_Group1_1} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cooling_Group1_1", value: e.target.value } }) }}></input>
                                            </div>
                                        </div>
                                        <div className="flex mx-2">
                                            <div>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">of</label>
                                            </div>
                                            <div>
                                                <input className="form-control" type="text" placeholder="" value={state.Cooling_Group1_2} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cooling_Group1_2", value: e.target.value } }) }}></input>
                                            </div>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">units</label>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center ">
                                        <div className="flex justify-center w-full">
                                            <div className="flex">
                                                <label className="form-check-label" htmlFor="flexCheckDefault">Group 2 No.</label>
                                                <div>
                                                    <input className="form-control" type="text" placeholder="" value={state.Cooling_Group2_1} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cooling_Group2_1", value: e.target.value } }) }}></input>
                                                </div>

                                            </div>
                                            <div className="flex">
                                                <label className="form-check-label" htmlFor="flexCheckDefault">of</label>
                                                <div>
                                                    <input className="form-control" type="text" placeholder="" value={state.Cooling_Group2_2} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cooling_Group2_2", value: e.target.value } }) }}></input>
                                                </div>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">units</label>
                                            </div>
                                        </div >
                                    </div>
                                </div>

                                <div className=" mx-2">
                                    <input className="form-check-input" type="checkbox" id="Cooling_Overall" checked={state.Cooling_Overall} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cooling_Overall", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Cooling_Overall">Over all</label>
                                </div>
                                <div className="mx-2">
                                    <input className="form-check-input" type="checkbox" id="Cooling_Sounds" checked={state.Cooling_Sounds} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cooling_Sounds", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Cooling_Sounds">Sounds</label>
                                </div>
                                <div className="mx-2">
                                    <input className="form-check-input" type="checkbox" id="Cooling_Manual" checked={state.Cooling_Manual} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cooling_Manual", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Cooling_Manual">Manual</label>
                                </div>
                                <div className="mx-2">
                                    <input className="form-check-input" type="checkbox" id="Cooling_Remote" checked={state.Cooling_Remote} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cooling_Remote", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Cooling_Remote">Remote</label>
                                </div>
                                <div className="mx-2">
                                    <input className="form-check-input" type="checkbox" id="Cooling_Local" checked={state.Cooling_Local} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cooling_Local", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Cooling_Local">Local</label>
                                </div>
                                <div className="mx-2">
                                    <input className="form-check-input" type="checkbox" id="Cooling_Auto" checked={state.Cooling_Auto} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cooling_Auto", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Cooling_Auto">Auto</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center w-full m-2">
                                    <input className="form-check-input" type="checkbox" id="Cooling_Abnormal_Check" checked={state.Cooling_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cooling_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="Cooling_Abnormal_Check" >Abnormal</label>
                                    <div className="grow">
                                        <input className="form-control" type="text" placeholder="" disabled={!state.Cooling_Abnormal_Check} value={state.Cooling_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "Cooling_Abnormal_Value", value: e.target.value } }) }}></input>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------Oltc function-------------------------------------------------------- */}
                        {/* ----------------------------------------------------------Motor drive-------------------------------------------------------- */}

                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">OLTC Motor Drive</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Motor_Drive_Raise" checked={state.OLTC_Motor_Drive_Raise} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Motor_Drive_Raise", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Motor_Drive_Raise">Raise</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Motor_Drive_Low" checked={state.OLTC_Motor_Drive_Low} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Motor_Drive_Low", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Motor_Drive_Low">Lower</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Motor_Drive_Emergency" checked={state.OLTC_Motor_Drive_Emergency} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Motor_Drive_Emergency", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Motor_Drive_Emergency">Emergency</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Motor_Drive_Sounds" checked={state.OLTC_Motor_Drive_Sounds} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Motor_Drive_Sounds", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Motor_Drive_Sounds">Sounds</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Motor_Drive_Timming" checked={state.OLTC_Motor_Drive_Timming} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Motor_Drive_Timming", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Motor_Drive_Timming">Timming</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Motor_Drive_Hand_Crank" checked={state.OLTC_Motor_Drive_Hand_Crank} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Motor_Drive_Hand_Crank", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Motor_Drive_Hand_Crank">Hand Crank block</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center w-full m-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Motor_Drive_Abnormal_Check" checked={state.OLTC_Motor_Drive_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Motor_Drive_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Motor_Drive_Abnormal_Check">Abnormal</label>
                                    <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด ครีป" disabled={!state.OLTC_Motor_Drive_Abnormal_Check} value={state.OLTC_Motor_Drive_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Motor_Drive_Abnormal_Value", value: e.target.value } }) }}></input>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------RCC-------------------------------------------------------- */}

                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">OLTC RCC</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_RCC_Raise" checked={state.OLTC_RCC_Raise} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_RCC_Raise", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_RCC_Raise">Raise</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_RCC_Low" checked={state.OLTC_RCC_Low} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_RCC_Low", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_RCC_Low">Lower</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_RCC_Auto" checked={state.OLTC_RCC_Auto} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_RCC_Auto", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_RCC_Auto">Auto</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_RCC_Manual" checked={state.OLTC_RCC_Manual} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_RCC_Manual", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_RCC_Manual">Manual</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_RCC_Emergency" checked={state.OLTC_RCC_Emergency} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_RCC_Emergency", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_RCC_Emergency">Emergency</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center w-full m-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_RCC_Abnormal_Check" checked={state.OLTC_RCC_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_RCC_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_RCC_Abnormal_Check">Abnormal</label>
                                    <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด ครีป" disabled={!state.OLTC_RCC_Abnormal_Check} value={state.OLTC_RCC_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_RCC_Abnormal_Value", value: e.target.value } }) }}></input>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------Tap position-------------------------------------------------------- */}

                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">OLTC Tap Position</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Taposition_CSCS" checked={state.OLTC_Taposition_CSCS} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Taposition_CSCS", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Taposition_CSCS">CSCS</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Taposition_RCC" checked={state.OLTC_Taposition_RCC} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Taposition_RCC", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Taposition_RCC">RCC</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Taposition_Motor_Drive" checked={state.OLTC_Taposition_Motor_Drive} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Taposition_Motor_Drive", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Taposition_Motor_Drive">Motor drive</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center w-full m-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Taposition_Abnormal_Check" checked={state.OLTC_Taposition_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Taposition_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Taposition_Abnormal_Check">Abnormal</label>
                                    <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด ครีป" disabled={!state.OLTC_Taposition_Abnormal_Check} value={state.OLTC_Taposition_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Taposition_Abnormal_Value", value: e.target.value } }) }}></input>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------Over current relay block tap-------------------------------------------------------- */}


                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">OLTC Over Current Block Tap</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Current_Block_Check_normal" checked={state.OLTC_Current_Block_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Current_Block_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Current_Block_Check_normal">Normal</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center grow m-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Current_Block_Check_Abnormal" checked={!state.OLTC_Current_Block_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Current_Block_Check", value: !e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Current_Block_Check_Abnormal">Abnormal</label>
                                    <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด ครีป" disabled={state.OLTC_Current_Block_Check} value={state.OLTC_Current_Block_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Current_Block_Value", value: e.target.value } }) }}></input>
                                </div>
                            </div>
                        </div>

                        {/* ----------------------------------------------------------OLTC Hotline-------------------------------------------------------- */}

                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">OLTC Hotline</div>
                            <div className="flex flex-wrap justify-start w-full">
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Hotline_Pressure_Auto" checked={state.OLTC_Hotline_Pressure_Auto} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Hotline_Pressure_Auto", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Hotline_Pressure_Auto">auto</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Hotline_Pressure_Manual" checked={state.OLTC_Hotline_Pressure_Manual} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Hotline_Pressure_Manual", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Hotline_Pressure_Manual">Manual</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Hotline_Pressure_Overall" checked={state.OLTC_Hotline_Pressure_Overall} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Hotline_Pressure_Overall", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Hotline_Pressure_Overall">Over all</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Hotline_Pressure_Sounds" checked={state.OLTC_Hotline_Pressure_Sounds} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Hotline_Pressure_Sounds", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Hotline_Pressure_Sounds">Sounds</label>
                                </div>
                                <div className="w-full flex justify-start grow">
                                    <div className="d-flex justify-content-start align-items-start w-full mx-2 flex-wrap">
                                        <div className="flex">
                                            <input className="form-check-input" type="checkbox" id="OLTC_Hotline_Pressure_Alarm" checked={state.OLTC_Hotline_Pressure_Alarm} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Hotline_Pressure_Alarm", value: e.target.checked } }) }} />

                                            <label className="form-check-label" htmlFor="OLTC_Hotline_Pressure_Alarm">High pressure alarm</label>
                                        </div>
                                        <div className="flex">
                                            <div className="flex">
                                                <input className="form-check-input" type="checkbox" id="OLTC_Hotline_Pressure_Guage_Check" checked={state.OLTC_Hotline_Pressure_Guage_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Hotline_Pressure_Guage_Check", value: e.target.checked } }) }} />
                                                <label className="form-check-label" htmlFor="OLTC_Hotline_Pressure_Guage_Check">Pressure guage</label>
                                            </div>
                                            <div className="grow flex">
                                                <div className="grow">
                                                    <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด ครีป" disabled={!state.OLTC_Hotline_Pressure_Guage_Check} value={state.OLTC_Hotline_Pressure_Guage_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Hotline_Pressure_Guage_Value", value: e.target.value } }) }}></input>
                                                </div>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">bar</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* ----------------------------------------------------------oil purifier-------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">OLTC Oil purifier</div>
                            <div className="flex flex-wrap justify-start w-full items-center">
                                <div className="mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Oil_Purifier_Time_delay" checked={state.OLTC_Oil_Purifier_Time_delay} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Oil_Purifier_Time_delay", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Oil_Purifier_Time_delay">Time delay relay & timer function </label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center grow mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Oil_Purifier_Abnormal_Check" checked={state.OLTC_Oil_Purifier_Abnormal_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Oil_Purifier_Abnormal_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Oil_Purifier_Abnormal_Check">Abnormal</label>
                                    <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด ครีป" disabled={!state.OLTC_Oil_Purifier_Abnormal_Check} value={state.OLTC_Oil_Purifier_Abnormal_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Oil_Purifier_Abnormal_Value", value: e.target.value } }) }}></input>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------oil leak-------------------------------------------------------- */}
                        <div className="flex justify-center flex-col items-start border my-1 rounded-xl py-1">
                            <div className="font-bold self-center">OLTC Oil leak</div>
                            <div className="flex flex-wrap justify-start w-full items-center">
                                <div className="d-flex justify-content-center align-items-center mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Oil_Leak_At_Check" checked={state.OLTC_Oil_Leak_At_Check} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Oil_Leak_At_Check", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Oil_Leak_At_Check">At</label>
                                    <div>
                                        <input className="form-control" type="text" placeholder="้โปรดป้อนรายละเอียด ครีป" disabled={!state.OLTC_Oil_Leak_At_Check} value={state.OLTC_Oil_Leak_At_Value} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Oil_Leak_At_Value", value: e.target.value } }) }}></input>
                                    </div>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Degree</label>
                                </div>
                                <div className="mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Oil_Leak_Delay_Time" checked={state.OLTC_Oil_Leak_Delay_Time} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Oil_Leak_Delay_Time", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Oil_Leak_Delay_Time">Time delay relay & timer function </label>
                                </div>
                                <div className="mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Oil_Leak_Delay_Stain" checked={state.OLTC_Oil_Leak_Delay_Stain} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Oil_Leak_Delay_Stain", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Oil_Leak_Delay_Stain">Stain </label>
                                </div>
                                <div className="mx-2">
                                    <input className="form-check-input" type="checkbox" id="OLTC_Oil_Leak_Less_Than" checked={state.OLTC_Oil_Leak_Less_Than} onChange={(e) => { dispatch({ type: 'setstate', payload: { name: "OLTC_Oil_Leak_Less_Than", value: e.target.checked } }) }} />
                                    <label className="form-check-label" htmlFor="OLTC_Oil_Leak_Less_Than"> &lt; 1drop/10 sec </label>
                                </div>
                            </div>
                        </div>



                    </div>
                </form >
            </div >
            <Footer />
        </>

    )
}
export default Tranfromer