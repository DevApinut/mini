import { useReducer } from "react"
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
        previouse_workpermit.splice(index, 0,initials.work_permission_information[0])
        dispatch({ type: "setstate", payload: { name: "work_permission_information", value: previouse_workpermit } })
    }


    return (
        <div>
            <div>
                <h3 className="text-center">Work permit</h3>
            </div>
            {state.work_permission_information.map((item: any, index: number) => {
                return(

                    <button onClick={() => ADD_workpermission(index+1)}>test function</button>
                )
            })}
            <hr />
        </div>
    )
}

export default Workpermit