import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
import axios from "axios"
import { useReducer } from "react"
import Chart from 'chart.js/auto'
import { Bar, Pie, Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
const SwitchGearDashboard = () => {

    // Chart JS Config Test
    Chart.register(ChartDataLabels);
    const percentage = '75%'

    const styles = {
        progressBar: {
            height: 250,
            '& progress-bar': {
                backgroundColor: 'black'
            },
        }
    }




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
            // console.log(res.data.SwitchGear)                 
        })

    const duplicateArray = (index_data: number) => {
        // index_data 0 = ชื่อสถานี 1= ชื่อย่อภาษาอังกฤษ 2= ขื่อรหัสสถานี   
        const duplicates = state.switchGearInformation.filter((item: any, index: any) => index > 1 && findIndexDuplicate(item[index_data], index_data) === index);
        console.log(duplicates)
    }
    const findIndexDuplicate = (data: any, index: any) => {
        for (let i = 0; i <= state.switchGearInformation.length; i++) {
            if (state.switchGearInformation[i][index] == data) { return i }
        }

    }

    return (
        <>
            <Navbar1 />
            <div className="grow flex container flex-col">
                <div className="flex justify-center w-full text-xl font-bold">
                    SwitchGear 22/33 kV
                </div>
                <div>
                    <button onClick={() => duplicateArray(0)} className="btn btn-success">
                        Duplicate
                    </button>
                </div>
                <div className='w-full'>
                    <Bar width="100%" height="100%"
                        data={{
                            labels: [`TP(ABB)`, `CB 22 kV(ABB)`, `CB 22 kV(Schneider)`, 'Green', 'Purple', 'Orange'],
                            datasets: [
                                {
                                    label: '# ผลิตภัณฑ์ Circuit Breaker SwitchGear',
                                    data: [3, 19, 3, 5, 2, 3],
                                    borderWidth: 1,
                                    backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
                                }
                            ]
                        }}
                    />
                </div>



            </div>
            <Footer />
        </>
    )
}

export default SwitchGearDashboard 