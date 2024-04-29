import { useEffect, useReducer } from "react"
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import newAdapter from "./Test.js";
import dayjs from 'dayjs';
import Docx_export from "../Export/docx"
import axios from "axios"



const Workpermit = () => {
    // ------------------------- USe effect --------------------------------
    useEffect(() => {
        fetch_personal_data();
    }, [])

    // ------------------for haddle initial state---------------------------
    const initials = {
        work_permission_information: [{
            index_for_select_personal: 0, index_for_select_substation: 0,
            substation: "ระบุสถานี", country: "", type_substation: "", name_department_PEA: "",
            name_personal_responsible_PEA: "", number_responsible_PEA: "", name_department_corperation: "",
            name_reponsible_corperation: "", nunber_responsible_corperation: "", number_personal: "", date_from: "",
            time_from: "", date_destination: "", time_destination: "", turn_off_electrical: "ดับไฟปฏิบัติงาน",
            plan_work: "ตามแผน", work_detail: "", name_permission: "", position_permission: "", name_checkbox: false,
            name_permission_checkbox: false, index_for_select_name_permission: 0
        }],
        personal_information_database: [],
        substation_information_database: [],
        log_file_from_database: [],
        other_data: { row_for_save: 0, Name_save: "", Name_save_select: [""] },
        personal_information: [""],
        index_for_select_personal: 0,

    }
    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case "setstate": {
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, initials)
    // --------------------------------------------------------------------
    const ADD_workpermission = (index: number) => {
        const previouse_workpermit = [...state.work_permission_information]
        previouse_workpermit.splice(index, 0, initials.work_permission_information[0])
        dispatch({ type: "setstate", payload: { name: "work_permission_information", value: previouse_workpermit } })
    }
    const DEL_workpermission = (index: number) => {
        const previouse_workpermit = [...state.work_permission_information]
        previouse_workpermit.splice(index, 1)
        dispatch({ type: "setstate", payload: { name: "work_permission_information", value: previouse_workpermit } })
    }
    const Copy_workpermission = (index: number) => {
        const previouse_workpermit = [...state.work_permission_information]
        previouse_workpermit.splice(index + 1, 0, state.work_permission_information[index])
        dispatch({ type: "setstate", payload: { name: "work_permission_information", value: previouse_workpermit } })
    }

    // --------------------------Set state for data-----------------------
    const Set_state_data_for_workpermit_information = (name_data: any, value: any, index: number) => {
        const previouse_workpermit = [...state.work_permission_information]
        if (name_data == "date_from" || name_data == "date_destination" || name_data == "date_from") {
            var data_index = { ...previouse_workpermit[index], [name_data]: value.$d }
        } else {
            var data_index = { ...previouse_workpermit[index], [name_data]: value }
        }
        previouse_workpermit[index] = data_index
        dispatch({ type: "setstate", payload: { name: "work_permission_information", value: previouse_workpermit } })
    }
    const change_personal_information = (name_data: any, value: any, index: number) => {
        const previouse_workpermit = [...state.work_permission_information]
        var data_index = { ...previouse_workpermit[index], index_for_select_personal: value, name_personal_responsible_PEA: state.personal_information[parseInt(value)][1], number_responsible_PEA: state.personal_information[parseInt(value)][4], name_department_PEA: state.personal_information[parseInt(value)][3] }
        previouse_workpermit[index] = data_index
        dispatch({ type: "setstate", payload: { name: "work_permission_information", value: previouse_workpermit } })
    }
    const change_name_permission_information = (name_data: any, value: any, index: number) => {
        const previouse_workpermit = [...state.work_permission_information]
        var data_index = {
            ...previouse_workpermit[index], index_for_select_name_permission: value,
            name_permission: state.personal_information[parseInt(value)][1],
            position_permission: state.personal_information[parseInt(value)][2]
        }
        previouse_workpermit[index] = data_index
        dispatch({ type: "setstate", payload: { name: "work_permission_information", value: previouse_workpermit } })
    }
    const change_substation_information = (name_data: any, value: any, index: number) => {
        const previouse_workpermit = [...state.work_permission_information]
        var data_index = {
            ...previouse_workpermit[index], substation: state.substation_information_database[parseInt(value)][1],
            index_for_select_substation: value, country: state.substation_information_database[parseInt(value)][3],
            type_substation: state.substation_information_database[parseInt(value)][2]
        }
        previouse_workpermit[index] = data_index
        dispatch({ type: "setstate", payload: { name: "work_permission_information", value: previouse_workpermit } })
    }
    const Set_state_data_other_data = (name_data: any, value: any) => {
        var previouse_workpermit = { ...state.other_data }        
        if (name_data == "row_for_save") {
            if (value == "0") {
                var data_for_set = { ...previouse_workpermit, [name_data]: value, Name_save: "ระบุรายการบันทึก" }                  
                dispatch({ type: "setstate", payload: { name: "work_permission_information", value: initials.work_permission_information } })              
            }
            else {
                var data_for_set = { ...previouse_workpermit, [name_data]: value, Name_save: state.other_data.Name_save_select[parseInt(value)][0] }                 
                dispatch({ type: "setstate", payload: { name: "work_permission_information", value: JSON.parse(state.other_data.Name_save_select[parseInt(value)][2]) } })
            }
        } else {
            var data_for_set = { ...previouse_workpermit, [name_data]: value }
        }
        dispatch({ type: "setstate", payload: { name: "other_data", value: data_for_set } })
        

    }
    // ------------------------------- Axios ----------------------------
    const fetch_personal_data = () => {
        axios.get('https://script.google.com/macros/s/AKfycbx72G920yz-q7jMGDk_nUgghARF456apwxRB7e0sTvdpYmO7n3XuKefGVtgccZO3-gw/exec')
            .then(res => {
                dispatch({ type: "setstate", payload: { name: "personal_information_database", value: res.data.data_personal_information } })
                dispatch({ type: "setstate", payload: { name: "substation_information_database", value: res.data.data_location } })
                dispatch({ type: "setstate", payload: { name: "personal_information", value: res.data.data_personal_information } })
                Set_state_data_other_data("Name_save_select", res.data.data_log_file)
            })
    }

    const Save_data_google_sheet = () => {
        let formData = new FormData()
        formData.append('work_permission_information', state.other_data.work_permission_information)
        formData.append('Name_Save', state.other_data.Name_save)
        formData.append('row_for_save', state.other_data.row_for_save)
        axios.post("https://script.google.com/macros/s/AKfycbx72G920yz-q7jMGDk_nUgghARF456apwxRB7e0sTvdpYmO7n3XuKefGVtgccZO3-gw/exec", formData)
            .then((res) => {
                alert("สำเร็จ")
                fetch_personal_data();
            })
            .catch((err) => {

            })
    }


    const Save_AS_data_google_sheet = () => {
        let formData = new FormData()
        formData.append('work_permission_information', JSON.stringify(state.work_permission_information))
        formData.append('Name_Save', state.other_data.Name_save)
        formData.append('row_for_save', "0")
        axios.post("https://script.google.com/macros/s/AKfycbx72G920yz-q7jMGDk_nUgghARF456apwxRB7e0sTvdpYmO7n3XuKefGVtgccZO3-gw/exec", formData)
            .then((res) => {
                alert("สำเร็จ")
                fetch_personal_data();
            })
            .catch((err) => {

            })
    }

    const handle_to_del_data_google_sheet = () => {
        let formData = new FormData()
        formData.append('Del', 'Del')
        formData.append('row_for_save', state.other_data.row_for_save)

        axios.post("https://script.google.com/macros/s/AKfycbx72G920yz-q7jMGDk_nUgghARF456apwxRB7e0sTvdpYmO7n3XuKefGVtgccZO3-gw/exec", formData)
            .then((res) => {
                alert("สำเร็จ")
                fetch_personal_data();
            })
            .catch((err) => {

            })

    }

    return (
        <div>
            <div className="d-flex flex-column">
                <div>
                    <h3 className="text-center">Work permit</h3>
                </div>
                <div className="d-flex justify-content-left">
                    <TextField className="mx-1 my-1 col-lg-1" focused label="การบันทึก" size="small" value={state.other_data.Name_save} onChange={(e) => { Set_state_data_other_data("Name_save", e.target.value) }} />
                    <div className="mx-1 my-1 col-lg-2 d-flex justify-content-center align-items-center">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" size="small">เลือกการบันทึก</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state.other_data.row_for_save}
                                label="สถานีไฟฟ้า"
                                size="small"
                                onChange={(item) => { Set_state_data_other_data("row_for_save", item.target.value); }}
                            >
                                <MenuItem key={"0_name_save"} value={"0"}>ระบุรายการบันทึก</MenuItem>
                                {state.other_data.Name_save_select.map((data: any, index: number) => {
                                    if (index > 0) { return <MenuItem key={`${index}_name_save`} value={`${index}`}>{data[0]}</MenuItem> }
                                })}

                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>



            {state.work_permission_information.map((data: any, index: number) => {
                return (
                    <>
                        <div className="row my-2">
                            <div className="mx-1 my-1 col-lg-2 d-flex justify-content-center align-items-center">
                                <div className="mx-3"><h4>{index + 1}</h4></div>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" size="small">สถานีไฟฟ้า</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={data.index_for_select_substation}
                                        label="สถานีไฟฟ้า"
                                        size="small"
                                        onChange={(item) => change_substation_information("personal_information", item.target.value, index)}
                                    >
                                        <MenuItem key={"0_name_save"} value={"0"}>ระบุสถานี</MenuItem>
                                        {state.substation_information_database.map((data: any, index: number) => {
                                            if (index > 0) { return <MenuItem key={`${index}_substation`} value={`${index}`}>{data[1]}</MenuItem> }
                                        })}
                                    </Select>
                                </FormControl>
                            </div>

                            <TextField className="mx-1 my-1 col-lg-1" focused label="หน่วยงานภายใน" size="small" value={state.work_permission_information[index].name_department_PEA} onChange={(item) => Set_state_data_for_workpermit_information("name_department_PEA", item.target.value, index)} />
                            <div className="mx-1 my-1 col-lg-2 d-flex justify-content-center">
                                <input type="checkbox" className="mx-2 align-items-center" onChange={(e) => { Set_state_data_for_workpermit_information("name_checkbox", e.target.checked, index) }} />
                                {data.name_checkbox && <TextField focused label="ชื่อผู้ควบคุมงาน" size="small" value={state.work_permission_information[index].name_personal_responsible_PEA} onChange={(item) => Set_state_data_for_workpermit_information("name_personal_responsible_PEA", item.target.value, index)} />}
                                {!data.name_checkbox && <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" size="small">ชื่อผู้ควบคุมงาน</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={data.index_for_select_personal}
                                        label="สถานีไฟฟ้า"
                                        size="small"
                                        onChange={(item) => change_personal_information("personal_information", item.target.value, index)}
                                    >
                                        <MenuItem key={"0_name_save"} value={"0"}>ระบุชื่อ</MenuItem>
                                        {state.personal_information.map((data: any, index: number) => {
                                            if (index > 0) { return <MenuItem key={`${index}_personal_information`} value={`${index}`}>{data[1]}</MenuItem> }
                                        })}
                                    </Select>
                                </FormControl>}
                            </div>
                            <TextField className="mx-1 my-1 col-lg-1" focused label="เบอร์โทร" size="small" value={state.work_permission_information[index].number_responsible_PEA} onChange={(item) => Set_state_data_for_workpermit_information("number_responsible_PEA", item.target.value, index)} />
                            <TextField className="mx-1 my-1 col-lg-1" focused label="หน่วยงานภายนอก" size="small" value={state.work_permission_information[index].name_department_corperation} onChange={(item) => Set_state_data_for_workpermit_information("name_department_corperation", item.target.value, index)} />
                            <TextField className="mx-1 my-1 col-lg-2" focused label="ชื่อผู้ควบคุมงาน" size="small" value={state.work_permission_information[index].name_reponsible_corperation} onChange={(item) => Set_state_data_for_workpermit_information("name_reponsible_corperation", item.target.value, index)} />
                            <TextField className="mx-1 my-1 col-lg-1" focused label="เบอร์โทร" size="small" value={state.work_permission_information[index].nunber_responsible_corperation} onChange={(item) => Set_state_data_for_workpermit_information("nunber_responsible_corperation", item.target.value, index)} />
                            <TextField className="mx-1 my-1 col-lg-1" focused label="จำนวนผู้ปฏิบัติงาน" size="small" value={state.work_permission_information[index].number_personal} onChange={(item) => Set_state_data_for_workpermit_information("number_personal", item.target.value, index)} />

                            <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                <DatePicker
                                    label="วันที่เริ่ม"
                                    format="DD MMMYYYY"
                                    onChange={(item) => { Set_state_data_for_workpermit_information("date_from", item, index) }}
                                    value={dayjs(new Date(state.work_permission_information[index].date_from))}
                                    slotProps={{ textField: { size: 'small' } }}
                                    className="col-lg-2 mx-1 my-1"
                                />
                            </LocalizationProvider>

                            <TextField className="mx-1 col-lg-1" focused label="เวลา" size="small" value={state.work_permission_information[index].time_from} onChange={(item) => Set_state_data_for_workpermit_information("time_from", item.target.value, index)} />
                            <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                <DatePicker
                                    label="วันที่สิ้นสุด"
                                    format="DD MMMYYYY"
                                    onChange={(item) => Set_state_data_for_workpermit_information("date_destination", item, index)}
                                    value={dayjs(new Date(state.work_permission_information[index].date_destination))}
                                    slotProps={{ textField: { size: 'small' } }}
                                    className="col-lg-2 mx-1 my-1"
                                />
                            </LocalizationProvider>

                            <TextField className="mx-1 my-1 col-lg-1" focused label="เวลา" size="small" value={state.work_permission_information[index].time_destination} onChange={(item) => Set_state_data_for_workpermit_information("time_destination", item.target.value, index)} />


                            <div className="mx-1 my-1 col-lg-2">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" size="small">การดับไฟ</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={state.work_permission_information[index].turn_off_electrical}
                                        label="แผนดับไฟ"
                                        size="small"
                                        defaultValue={"ดับไฟปฏิบัติงาน"}
                                        onChange={(item) => Set_state_data_for_workpermit_information("turn_off_electrical", item.target.value, index)}
                                    >
                                        <MenuItem value={"ดับไฟปฏิบัติงาน"}>ดับไฟปฏิบัติงาน</MenuItem>
                                        <MenuItem value={"ไม่ดับไฟปฏิบัติงาน"}>ไม่ดับไฟปฏิบัติงาน</MenuItem>

                                    </Select>
                                </FormControl>
                            </div>

                            <div className="mx-1 my-1 col-lg-2">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" size="small">แผนดับไฟ</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={state.work_permission_information[index].plan_work}
                                        label="แผนดับไฟ"
                                        size="small"
                                        defaultValue={"ตามแผน"}
                                        onChange={(item) => Set_state_data_for_workpermit_information("plan_work", item.target.value, index)}
                                    >
                                        <MenuItem value={"ตามแผน"}>ตามแผน</MenuItem>
                                        <MenuItem value={"นอกแผน"}>นอกแผน</MenuItem>
                                        <MenuItem value={"กรณีฉุกเฉิน"}>กรณีฉุกเฉิน</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>


                            <TextField className="mx-1 my-1 col-lg-3" focused label="รายการปฏิบัติงาน" size="small" value={state.work_permission_information[index].work_detail} onChange={(item) => Set_state_data_for_workpermit_information("work_detail", item.target.value, index)} />

                            <div className="mx-1 my-1 col-lg-2 d-flex justify-content-center">
                                <input type="checkbox" className="mx-2 align-items-center" onChange={(e) => { Set_state_data_for_workpermit_information("name_permission_checkbox", e.target.checked, index) }} />
                                {data.name_permission_checkbox && <TextField focused label="ผู้ขออนุญาติ" size="small" value={data.name_permission} onChange={(item) => Set_state_data_for_workpermit_information("name_permission", item.target.value, index)} />}
                                {!data.name_permission_checkbox && <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" size="small">ผู้ขออนุญาติ</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={data.index_for_select_name_permission}
                                        label="สถานีไฟฟ้า"
                                        size="small"
                                        onChange={(item) => change_name_permission_information("index_for_select_name_permission", item.target.value, index)}
                                    >
                                        <MenuItem key={"0_name_save"} value={"0"}>ระบุชื่อ</MenuItem>
                                        {state.personal_information.map((data: any, index: number) => {
                                            if (index > 0) { return <MenuItem key={`${index}_personal_information`} value={`${index}`}>{data[1]}</MenuItem> }
                                        })}
                                    </Select>
                                </FormControl>}
                            </div>


                            {/* <TextField className="mx-1 my-1 col-lg-2" focused label="ผู้ขออนุญาติ" size="small" value={state.work_permission_information[index].name_permission} onChange={(item) => Set_state_data_for_workpermit_information("name_permission", item.target.value, index)} /> */}




                            <TextField className="mx-1 my-1 col-lg-1" focused label="ตำเเหน่ง" size="small" value={state.work_permission_information[index].position_permission} onChange={(item) => Set_state_data_for_workpermit_information("position_permission", item.target.value, index)} />



                            <div className="d-flex justify-content-center align-items-center mx-4 col-lg-2">
                                <button className="btn btn-success mx-1" onClick={() => ADD_workpermission(index + 1)}>ADD</button>
                                <button className="btn btn-warning mx-1" onClick={() => Copy_workpermission(index)}>COPY</button>
                                {state.work_permission_information.length > 1 && <button className="btn btn-danger mx-1" onClick={() => DEL_workpermission(index)}>Del</button>}

                            </div>


                        </div>

                        <hr />


                    </>

                )
            })}
            <div className="d-flex justify-content-center align-items-center">
                {parseInt(state.other_data.row_for_save) > 0 && <button className="btn btn-success mx-1" onClick={() => { Save_data_google_sheet() }}>Save</button>}
                {parseInt(state.other_data.row_for_save) >= 0 && <button className="btn btn-warning mx-1" onClick={() => { Save_AS_data_google_sheet() }}>Save AS</button>}
                {parseInt(state.other_data.row_for_save) > 0 && <button className="btn btn-danger mx-1" onClick={() => { handle_to_del_data_google_sheet() }}>Del</button>}
                <button className="btn btn-primary mx-1" onClick={() => { Docx_export({ ...state }) }}>Export to Word</button>

            </div>

        </div >
    )
}

export default Workpermit