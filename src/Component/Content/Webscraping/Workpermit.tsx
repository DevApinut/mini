import { useReducer } from "react"
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import newAdapter from "./Test.js";
import dayjs from 'dayjs';
const Workpermit = () => {

    // ------------------for haddle initial state---------------------------
    const initials = {
        work_permission_information: [{ substation: "ระบุสถานี", country: "", type_substation: "", name_department_PEA: "", name_personal_responsible_PEA: "", number_responsible_PEA: "", name_department_corperation: "", name_reponsible_corperation: "", nunber_responsible_corperation: "", number_personal: "", date_from: "", time_from: "", date_destination: "", time_destination: "", turn_off_electrical: "ดับไฟปฏิบัติงาน", plan_work: "ตามแผน", work_detail: [{}], name_permission: "", position_permission: "" }]
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
            console.log(222)
        } else {
            var data_index = { ...previouse_workpermit[index], [name_data]: value }
        }

        previouse_workpermit[index] = data_index
        dispatch({ type: "setstate", payload: { name: "work_permission_information", value: previouse_workpermit } })
    }




    return (
        <div>
            <div>
                <h3 className="text-center">Work permit</h3>
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
                                        value={state.work_permission_information[index].substation}
                                        label="สถานีไฟฟ้า"
                                        size="small"
                                        onChange={(item) => Set_state_data_for_workpermit_information("substation", item.target.value, index)}
                                    >
                                        <MenuItem value={"ระบุสถานี"}>ระบุสถานี</MenuItem>
                                        <MenuItem value={"โพธาราม"}>Twenty</MenuItem>
                                        <MenuItem value={"ระนอง"}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <TextField className="mx-1 my-1 col-lg-1" focused label="หน่วยงานภายใน" size="small" value={state.work_permission_information[index].name_department_PEA} onChange={(item) => Set_state_data_for_workpermit_information("name_department_PEA", item.target.value, index)} />
                            <TextField className="mx-1 my-1 col-lg-2" focused label="ชื่อผู้ควบคุมงาน" size="small" value={state.work_permission_information[index].name_personal_responsible_PEA} onChange={(item) => Set_state_data_for_workpermit_information("name_personal_responsible_PEA", item.target.value, index)} />
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

                            <TextField className="mx-1 col-lg-1" focused label="เวลา" size="small" value={state.work_permission_information[index].time_from}onChange={(item) => Set_state_data_for_workpermit_information("time_from", item.target.value, index)} />
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

                            
                            <TextField className="mx-1 my-1 col-lg-2" focused label="ผู้ขออนุญาติ" size="small" value={state.work_permission_information[index].name_permission} onChange={(item) => Set_state_data_for_workpermit_information("name_permission", item.target.value, index)} />
                            <TextField className="mx-1 my-1 col-lg-1" focused label="ตำเเหน่ง" size="small"  value={state.work_permission_information[index].position_permission}  onChange={(item) => Set_state_data_for_workpermit_information("position_permission", item.target.value, index)} />



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
                <button className="btn btn-success mx-1" onClick={() => { }}>Save</button>
                <button className="btn btn-warning mx-1" onClick={() => { }}>Save AS</button>
                <button className="btn btn-primary mx-1" onClick={() => { }}>Export to Word</button>
            </div>

        </div >
    )
}

export default Workpermit