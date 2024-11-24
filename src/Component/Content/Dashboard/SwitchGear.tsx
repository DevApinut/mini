import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
import axios from "axios"
import { useEffect, useReducer } from "react"
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
        , DuplicateSubstation: [""]
        , NumberofSwitchGear: ["test"]
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


    // สำหรับเเยกตัวซ้ำออกจาก Array สองมิติ สามารถนำมาใช้ประโยชน์คือนับจำนวนข้อมูลใน Array
    const duplicateArray = (index_data: number) => {
        // index_data 0 = ชื่อสถานี 1= ชื่อย่อภาษาอังกฤษ 2= ขื่อรหัสสถานี  , 7 = ผลิตภัณฑ์ 
        const duplicates = state.switchGearInformation.filter((item: any, index: any) => index > 1 && findIndexDuplicate(item[index_data], index_data) === index);
        // dispatch({ type: "setstate", payload: { name: "DuplicateSubstation", value: duplicates } })    
        Finddata(duplicates, index_data)
        // console.log(duplicates)
    }
    const findIndexDuplicate = (data: any, index: any) => {
        for (let i = 0; i <= state.switchGearInformation.length; i++) {
            if (state.switchGearInformation[i][index] == data) { return i }
        }
    }


    // การเลือกเฉพาะข้อมูลนั้นเช่นเลือกเฉพาะข้อมูลจาก บ้านโป่ง
    // const Finddata = (data: string, index1: number) => {
    const Finddata = (data1: any, index1: number) => {

        var newData = [[""]]
        data1.map((data: any, index: number) => {            
            const finddata = state.switchGearInformation.filter((item: any, index: any) => item[index1] === data[index1]);          
            newData.push([data[index1],finddata.length])  
        })        

        console.log(newData)
        // console.log(data[0][0])

    }


    // การเลือกเฉพาะข้อมูลนั้นเช่นเลือกเฉพาะข้อมูลจาก บ้านโป่ง
    // const Finddata = (data: string, index1: number) => {
    const Finddata1 = (data: string, index1: number) => {

        const finddata = state.switchGearInformation.filter((item: any, index: any) => item[index1] === data);
        dispatch({ type: "setstate", payload: { name: "DuplicateSubstation", value: finddata } })
    }

    // // สำหรับสร้าง Array ขึ้นมาใหม่เพื่อทำการนับข้อมูล
    const CountArray = (data: any, arrayData: any) => {
        let NumberofSwitchGear = state.NumberofSwitchGear
    }





    return (
        <>
            <Navbar1 />
            <div className="grow flex container flex-col">
                <div className="flex justify-center w-full text-xl font-bold">
                    SwitchGear 22/33 kV
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-1/4 h-12 mx-2 rounded-xl border flex justify-center items-center flex-col py-8">
                        <div className="font-bold">
                            จำนวนสถานีทั้งหมด
                        </div>
                        <div className="text-lg"> 40 </div>
                    </div>
                    <div className="w-1/4 h-12 mx-2 rounded-xl border flex justify-center items-center flex-col py-8">
                        <div className="font-bold">
                            จำนวนอุปกรณ์ 22/33 kV
                        </div>
                        <div className="text-lg"> 40 </div>
                    </div>
                    <div className="w-1/4 h-12 mx-2 rounded-xl border flex justify-center items-center flex-col py-8">
                        <div className="font-bold">
                            บำรุงรักษาเเล้ว
                        </div>
                        <div className="text-lg"> 40 </div>
                    </div>
                    <div className="w-1/4 h-12 mx-2 rounded-xl border flex justify-center items-center py-8">
                        <div className="w-2/4 flex justify-center items-center flex-col">
                            <div className="font-bold">
                                ที่ใช้งานได้
                            </div>
                            <div className="text-lg"> 40 </div>
                        </div>
                        <div className="w-2/4 flex justify-center items-center flex-col">
                            <div className="font-bold">
                                รอการซ่อมเเซม
                            </div>
                            <div className="text-lg"> 40 </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div>
                        <button className="btn btn-success" onClick={() => { duplicateArray(0) }}>finddata</button>
                    </div>
                    <div>
                        <button className="btn btn-success" onClick={() => { CountArray("บ้านโป่ง2", 0) }}>InsertArrayData</button>
                    </div>
                </div>

                {/* ใช้การหาข้อมูลที่ซับซ้อนของสถานีก่อนจากนั้นนำข้อมูลดังกล่าวมาทำการหาข้อมูลเฉพาะตัวนั้นเพื่อทำการนับข้อมูล */}
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