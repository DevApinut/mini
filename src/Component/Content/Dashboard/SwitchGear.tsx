import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
import axios from "axios"
import { useReducer } from "react"
const SwitchGearDashboard = () => {
    const initials = {
        switchGearInformation: [""]
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

    axios.get(`https://script.google.com/macros/s/AKfycbzSh7EVC-cVVK6XUSoWCOLubD9vCieJsUNFmFIgiu4DDfUwNuLS7Am4Jt5g1ypGWH1P4A/exec`)
        .then(res => {
            dispatch({ type: "setstate", payload: { name: "switchGearInformation", value: res.data.SwitchGear } })                 
        })
    
        const duplicateArray = () =>{
            const duplicates = state.switchGearInformation.filter((item:any, index:any) => state.switchGearInformation.indexOf(item) !== index);
        }

    return (
        <>
            <Navbar1 />
            <div className="grow flex container flex-col">
                <div className="flex justify-center w-full text-xl font-bold">
                    SwitchGear 22/33 kV
                </div>

            </div>
            <Footer />
        </>
    )
}

export default SwitchGearDashboard 