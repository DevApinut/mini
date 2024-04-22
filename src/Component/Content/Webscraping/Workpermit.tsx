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
        work_permission_information: [{ substation: "", country: "", type_substation: "", name_responsible_PEA: "", number_responsible_PEA: "", name_reponsible_corperation: "", nunber_responsible_corperation: "", number_personal: "", date_form: "", time_form: "", date_destination: "", time_destination: "", turn_off_electrical: false, turn_on_electrical: false, in_of_plan: true, out_of_plan: false, scada_decision: false, work_detail: [{}], name_permission: "", position_permission: "" }]
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


    return (
        <div>
            <div>
                <h3 className="text-center">Work permit</h3>
            </div>
            {state.work_permission_information.map((item: any, index: number) => {
                return (
                    <>
                        <div className="row my-2 container">
                            <div className="mx-1 my-1 col-lg-2">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" size="small">สถานีไฟฟ้า</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={"age"}
                                        label="สถานีไฟฟ้า"
                                        size="small"
                                    // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <TextField className="mx-1 my-1 col-lg-1" focused label="หน่วยงานภายใน" size="small" />
                            <TextField className="mx-1 my-1 col-lg-1" focused label="ชื่อผู้ควบคุมงาน" size="small" />
                            <TextField className="mx-1 my-1 col-lg-1" focused label="เบอร์โทร" size="small" />
                            <TextField className="mx-1 my-1 col-lg-1" focused label="หน่วยงานภายนอก" size="small" />
                            <TextField className="mx-1 my-1 col-lg-1" focused label="ชื่อผู้ควบคุมงาน" size="small" />
                            <TextField className="mx-1 my-1 col-lg-1" focused label="เบอร์โทร" size="small" />
                            <TextField className="mx-1 my-1 col-lg-1" focused label="จำนวนผู้ปฏิบัติงาน" size="small" />

                            <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                    <DatePicker
                                        label="วันที่เริ่ม"
                                        format="DD MMMYYYY"
                                        onChange={(newValue) => {  }}
                                        defaultValue={dayjs(new Date())}
                                        value={dayjs(new Date())}
                                        slotProps={{ textField: { size: 'small' } }}
                                        className="col-lg-1 mx-1 my-1"
                                    />
                                </LocalizationProvider>

                            <TextField className="mx-1 col-lg-1" focused label="เวลา" size="small" />
                            <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                    <DatePicker
                                        label="วันที่สิ้นสุด"
                                        format="DD MMMYYYY"
                                        onChange={(newValue) => {  }}
                                        defaultValue={dayjs(new Date())}
                                        value={dayjs(new Date())}
                                        slotProps={{ textField: { size: 'small' } }}
                                        className="col-lg-1 mx-1 my-1"
                                    />
                                </LocalizationProvider>

                            <TextField className="mx-1 my-1 col-lg-1" focused label="เวลา" size="small" />
                            <div className="mx-1 my-1 col-lg-2">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" size="small">การดับไฟ</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={"ดับไฟปฏิบัติงาน"}
                                        label="แผนดับไฟ"
                                        size="small"
                                        defaultValue={"ดับไฟปฏิบัติงาน"}
                                    // onChange={handleChange}
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
                                        value={"ตามแผน"}
                                        label="แผนดับไฟ"
                                        size="small"
                                        defaultValue={"ตามแผน"}
                                    // onChange={handleChange}
                                    >
                                        <MenuItem value={"ตามแผน"}>ตามแผน</MenuItem>
                                        <MenuItem value={"นอกแผน"}>นอกแผน</MenuItem>
                                        <MenuItem value={"กรณีฉุกเฉิน"}>กรณีฉุกเฉิน</MenuItem>                                        
                                    </Select>
                                </FormControl>
                            </div>

                            <TextField className="mx-1 my-1 col-lg-3" focused label="แผนการปฏิบัติงาน" size="small" />
                            <TextField className="mx-1 my-1 col-lg-1" focused label="ผู้ขออนุญาติ" size="small" />
                            <TextField className="mx-1 my-1 col-lg-1" focused label="ตำเเหน่ง" size="small" />



                            <div className="d-flex justify-content-center mx-4 col-lg-1">
                                <button className="btn btn-success mx-1" onClick={() => ADD_workpermission(index + 1)}>ADD</button>
                                <button className="btn btn-danger mx-1" onClick={() => ADD_workpermission(index + 1)}>Del</button>
                            </div>

                        </div>




                    </>

                )
            })}
            <hr />
        </div >
    )
}

export default Workpermit