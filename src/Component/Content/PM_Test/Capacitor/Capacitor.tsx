import Navbar1 from "../../Navbar/Navbar1"
import Footer from "../../Footer/Footer"
import Capacitorsub from "./Capacitorsub1"
import Capacitorsub2 from "./Capacitorsub2"
import Result from "./Result"
import { useReducer, useEffect } from "react"
import axios from "axios"
import { Audio, BallTriangle } from 'react-loader-spinner'
import Swal from "sweetalert2"
const Capacitor = () => {

    useEffect(() => {
        FetchData()
    }, [])


    interface State {
        Substationselect: string;
        Yearselect: string;
    }

    const FetchData = (substation: string | null = null, year: string | null = null): void => {

        // ตรวจสอบค่าที่รับเข้ามา, ถ้าไม่มีการรับค่าส่งเข้ามาให้ใช้ค่าใน state
        const params = {
            Substation: substation || state.Substationselect,
            Dateforsearch: year || state.Yearselect
        };

        axios.get('https://script.google.com/macros/s/AKfycbw96SGVCfHskrWYhrU5dMq6mtDFhljmy9ZZHGOhBZ1tfZ23fcYIb-RYcC-Lvnl8X7Y8/exec', { params })
            .then(res => {
                console.log(res);
                // dispatch ค่าต่างๆ
                dispatch({ type: "setstate", payload: { name: "Substation", value: res.data.substation } });
                dispatch({ type: "setstate", payload: { name: "loadingStatus", value: false } });
            })
            .catch(err => {
                console.error("Error fetching data", err);
                dispatch({ type: "setstate", payload: { name: "loadingStatus", value: true } });
            });
    }

    const initials = {
        NumberofCapacitor: 4
        , loadingStatus: true
        , StepOfCapacitor: "Step1"
        , numberOfCap: "Cap1"
        , switchGearOrCap: 0
        , NamepersonelTest: ""
        , Substation: [[""]]
        , Substationselect: ""
        , Yearselect: `${new Date().getFullYear() + 543}`
        , Vaccuum: [["", "", ""], ["", "", ""], ["", "", ""]]
        , Contact: [["", "", ""], ["", "", ""], ["", "", ""]]
        , Insulation: [["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]]
        , Counter: [[""], [""], [""]]
        , Remark: [[""], [""], [""]]
    }

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case 'setstate':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
        }
    }

    const [state, dispatch] = useReducer(reducer, initials)

    // สำหรับเมื่อมีการเปลี่ยนแปลงข้อมูล
    const onChngeData = (TypeofTest: any, DatafromChange: any, numberPhase: number, numberofStep: number) => {
        let Datafrompass = [[""]]
        let Contact = [...state.Contact]
        let Insulation = [...state.Insulation]
        let Vaccuum = [...state.Vaccuum]
        let Counter = [...state.Counter]
        let Remark = [...state.Remark]

        if (TypeofTest == "Contact") {
            Contact[numberofStep][numberPhase] = DatafromChange
            Datafrompass = Contact
        }
        else if (TypeofTest == "Insulation") {
            Insulation[numberofStep][numberPhase] = DatafromChange
            Datafrompass = Insulation
        }
        else if (TypeofTest == "Vaccuum") {
            Vaccuum[numberofStep][numberPhase] = DatafromChange
            Datafrompass = Vaccuum
        }
        else if (TypeofTest == "Counter") {
            Counter[numberofStep][numberPhase] = DatafromChange
            Datafrompass = Counter
        }
        else if (TypeofTest == "Remark") {
            Remark[numberofStep][numberPhase] = DatafromChange
            Datafrompass = Remark
        }
        dispatch({ type: "setstate", payload: { name: TypeofTest, value: Datafrompass } })
    }

    const data: { [key: string]: string[][] } = {
        Vaccuum: [...state.Vaccuum],
        Contact: [...state.Contact],
        Insulation: [...state.Insulation],
        Counter: [...state.Counter],
        Remark: [...state.Remark],
    }

    const submitdata = async (e: React.FormEvent) => {

        //เขียนย่อให้ chatGPT ช่วยเขียน
        if (state.Substationselect !== "") {
            let formData1 = new FormData();
            formData1.append("Substation", state.Substationselect)
            formData1.append("Step", state.StepOfCapacitor)
            formData1.append("Capacitor", state.numberOfCap)
            formData1.append("Counter", state.Counter)
            formData1.append("Remark", state.Remark)

            // ใช้ forEach กับ Object.keys เพื่อวนผ่านข้อมูลใน `data`
            Object.keys(data).forEach((key: string) => {
                // วนลูปผ่านแต่ละแถวใน array (มิติที่ 1)
                data[key].forEach((row: string[], rowIndex: number) => {
                    // วนลูปผ่านแต่ละค่าในแถว (มิติที่ 2)
                    row.forEach((value: string, colIndex: number) => {
                        // สร้างชื่อ key ที่มีรูปแบบเช่น "Vaccuum00", "Vaccuum01", "Contact10", ...
                        const paramName = `${key}${rowIndex}${colIndex}`;
                        formData1.append(paramName, value);
                    });
                });
            });
            // เนื่องจาก Form Data ไม่สามารถที่จะเข้าถึงข้อมูลได้ตรงๆจึงต้องทำการเข้าดูข้อมูลเเบบเเยกเพื่อให้สามารถที่จะทำการดูข้อมูลได้
            // ใช้ Array.from() เพื่อแปลง FormData.entries() เป็น array
            // Array.from(formData1.entries()).forEach(([key, value]) => {
            //     console.log(key + ": " + value);
            // });
            const scriptURL = 'https://script.google.com/macros/s/AKfycbw96SGVCfHskrWYhrU5dMq6mtDFhljmy9ZZHGOhBZ1tfZ23fcYIb-RYcC-Lvnl8X7Y8/exec'
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: formData1 })
                .then((response: any) => {
                    console.log(response)
                })
                .catch(error => console.error('Error!', error.message))
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "โปรดเลือกสถานีก่อนกดSubmit",                
              });
        }

    }
    // สมมุติว่า data เป็น array ของปีหรือค่าที่คุณต้องการ
    const dataYear = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() + 543 - index);

    return (
        <>
            <Navbar1 />
            {state.loadingStatus && <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
                <div className="flex justify-center border p-20 w-56 h-56 items-center rounded-2xl bg-slate-200 flex-col">
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#4fa94d"
                        ariaLabel="ball-triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                    <div className="w-48 text-center my-3 font-bold">Loading Data</div>
                </div>
            </div>}



            <div className="grow container justify-center text-center">
                <div className="text-xl font-bold my-2">Capacitor Test</div>
                {/* Path of selector */}
                <div className="flex justify-center items-center flex-wrap">
                    <div className="flex justify-end w-56 my-1">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            สถานี
                        </label>
                        <select className="rounded-xl w-1/2 border" onChange={async (e) => {
                            await dispatch({ type: "setstate", payload: { name: "Substationselect", value: e.target.value } })
                            await FetchData(e.target.value)
                        }}>
                            <option value={''} >โปรดระบุสถานี</option>
                            {state.Substation.map((data: any, index: number) => {
                                return (
                                    <option value={data[0]} key={`${data[0]}${data[1]}`}>{data[0]}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="flex justify-end w-56 my-1">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Capacitor
                        </label>
                        <select className="rounded-xl w-1/2 border" defaultValue={"Cap1"} value={state.numberOfCap} onChange={async (e) => {
                            await dispatch({ type: "setstate", payload: { name: "numberOfCap", value: e.target.value } })
                        }}>
                            <option value="Cap1" key={`Cap1`}>Cap1</option>
                            <option value="Cap2" key={`Cap2`}>Cap2</option>
                            <option value="Cap3" key={`Cap3`}>Cap3</option>
                        </select>
                    </div>
                    <div className="flex justify-end w-56 my-1">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            step
                        </label>
                        <select className="rounded-xl w-1/2 border" defaultValue={"Step1"} value={state.StepOfCapacitor} onChange={async (e) => {
                            await dispatch({ type: "setstate", payload: { name: "StepOfCapacitor", value: e.target.value } })
                        }}>
                            <option value="Step1" key={`Step1`}>Step1</option>
                            <option value="Step2" key={`Step2`}>Step2</option>
                            <option value="Step3" key={`Step3`}>Step3</option>
                        </select>
                    </div>
                    <div className="flex justify-end w-56 my-1">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            ปี
                        </label>
                        <select className="rounded-xl w-1/2 border" defaultValue={new Date().getFullYear() + 543} value={state.Yearselect}
                            onChange={async (e) => {
                                await dispatch({ type: "setstate", payload: { name: "Yearselect", value: e.target.value } })
                                await FetchData(state.Substationselect, e.target.value)
                            }}>
                            {dataYear.map((year: any, index: number) => (
                                <option value={year} key={`${year}${index}`}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="mx-2 btn btn-warning my-4" onClick={() => dispatch({ type: "setstate", payload: { name: "switchGearOrCap", value: 0 } })}>SwitchGear Step</div>
                    <div className="mx-2 btn btn-warning my-4" onClick={() => dispatch({ type: "setstate", payload: { name: "switchGearOrCap", value: 1 } })}>Capacitor Step</div>
                    <div className="mx-2 btn btn-warning my-4" onClick={() => dispatch({ type: "setstate", payload: { name: "switchGearOrCap", value: 2 } })}>Result</div>
                </div>

                {state.switchGearOrCap == 0 && <div className="flex w-full">
                    {/*Step1 */}
                    <Capacitorsub Step={1} onChngeData={onChngeData} />

                    {/*Step2 */}
                    <Capacitorsub Step={2} onChngeData={onChngeData} />

                    {/*Step3 */}
                    <Capacitorsub Step={3} onChngeData={onChngeData} />
                </div>}

                {/* {state.switchGearOrCap == 1 && <div className="flex justify-center">
                    <div className="mx-2 btn btn-warning my-4">2</div>
                    <div className="mx-2 btn btn-warning my-4">4</div>
                </div>} */}
                {state.switchGearOrCap == 1 && <div className="flex w-full">
                    {/*Step1 */}
                    <Capacitorsub2 Step={1} />

                    {/*Step2 */}
                    <Capacitorsub2 Step={2} />

                    {/*Step3 */}
                    <Capacitorsub2 Step={3} />
                </div>}
                {state.switchGearOrCap == 2 && <div className="flex w-full">
                    {/*Step1 */}
                    <Result Step={1} />

                    {/*Step2 */}
                    <Result Step={2} />

                    {/*Step3 */}
                    <Result Step={3} />
                </div>}

                <div className="btn btn-success my-4" onClick={submitdata}>
                    Submit
                </div>


                <div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Capacitor