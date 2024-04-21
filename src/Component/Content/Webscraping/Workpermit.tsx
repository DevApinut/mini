import { useReducer } from "react"
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
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
                        <div className="row my-2">
                            <div className="mx-1 col-lg-2">
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
                            <div className="d-flex justify-content-center col-lg-9">
                                <TextField className="mx-1" focused label="หน่วยงานภายใน" size="small" />
                                <TextField className="mx-1" focused label="ชื่อผู้ควบคุมงาน" size="small" />
                                <TextField className="mx-1" focused label="เบอร์โทร" size="small" />
                                <TextField className="mx-1" focused label="หน่วยงานภายนอก" size="small" />
                                <TextField className="mx-1" focused label="ชื่อผู้ควบคุมงาน" size="small" />
                                <TextField className="mx-1" focused label="เบอร์โทร" size="small" />
                                <TextField className="mx-1" focused label="จำนวนผู้ปฏิบัติงาน" size="small" />
                                
                            </div>
                            <div className="d-flex justify-content-center col-lg-1">
                                <button className="btn btn-success" onClick={() => ADD_workpermission(index + 1)}>ADD</button>
                                <button className="btn btn-danger" onClick={() => ADD_workpermission(index + 1)}>Del</button>
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