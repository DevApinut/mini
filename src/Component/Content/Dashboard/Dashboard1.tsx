import Chart from 'chart.js/auto'
import { Bar, Pie, Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import '../../../CSS/Dashboard.CSS'
import { Link } from 'react-router-dom';
import NavBar1 from '../Navbar/Navbar1'




const Dashboard = () => {
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
    return (
        <div className='container'>
            <NavBar1/>

            <div className='text-center'>
                <h3>DashBoard</h3>
            </div>
            <div className='w-full'>
                <div className='w-1/4'>
                    <div className='w-1/4 my-2 input-group'>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">รายงานผลผระจำปี</span>
                        </div>
                        <input type="number" className="form-control" defaultValue="2567"placeholder="ปีการทดสอบ" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>

            </div>
            {/* --------------------------------------รายการ Navbar เล็กสำหรับแสดงข้อมูลในภาพรวม-------------------- */}
            <div className='d-flex '>
                <div className='pointer-menu'>
                    <div className='absolute top-0 left-auto text-lg'>จำนวนสถานีทั้งหมด</div>
                    <div className='d-flex flex-column align-items-center size-full justify-content-center' >
                        <h5 className='text-red-600'>37</h5>
                        <h5 className='text-green-900'>สถานี</h5>
                    </div>
                    <div className='text-red-600 text-sm absolute bottom-0 left-auto'>หมายเหตุ เป็นรายงานประจำเดือน มกราคม</div>
                </div>
                <div className='pointer-menu'>
                    <div className='absolute top-0 left-auto text-lg'>อุปกรณ์ในความรับผิดชอบ</div>
                    <div className='d-flex flex-column align-items-center size-full justify-content-center' >
                        <h5 className='text-red-600'>999</h5>
                        <h5 className='text-green-900'>รายการ</h5>
                    </div>
                    <div className='text-red-600 text-sm absolute bottom-0 left-auto'>หมายเหตุ เป็นรายงานประจำเดือน มกราคม</div>
                </div>
                <div className='pointer-menu'>
                    <div className='absolute top-0 left-auto text-lg'>รายการอุปกรณ์ชำรุด</div>
                    <div className='d-flex flex-column align-items-center size-full justify-content-center' >
                        <div className='flex justify-center w-full'>
                            <div className='w-1/4'>ทั้งหมด</div>
                            <div className='w-1/5 text-center'>12</div>
                            <div className='w-1/4'>รายการ</div>
                        </div>
                        <div className='flex justify-center w-full'>
                            <div className='w-1/4'>เเล้วเสร็จ</div>
                            <div className='w-1/5 text-center'>12</div>
                            <div className='w-1/4'>รายการ</div>
                        </div>
                        <div className='flex justify-center w-full'>
                            <div className='w-1/4'>คงค้าง</div>
                            <div className='w-1/5 text-center'>12</div>
                            <div className='w-1/4'>รายการ</div>
                        </div>
                        {/* <h5 className='text-red-600'>แล้วเสร็จ 230 รายการ</h5>
                        <h5 className='text-green-900'>ยังไม่ได้ดำเนินการ 230 รายการ</h5> */}
                    </div>
                    <div className='text-red-600 text-sm absolute bottom-0 left-auto'>หมายเหตุ เป็นรายงานประจำเดือน มกราคม</div>
                </div>
                <div className='pointer-menu' >
                    <div className='absolute top-0 left-auto text-lg'>ความคืบหน้าการบำรุงรักษาปี 2567</div>
                    <div className='d-flex flex-column align-items-center size-full justify-content-center' >
                        <div className='size-full h-fit'>
                            <div className='w-3/4 text-xs mt-3'>หม้อแปลงไฟฟ้ากำลัง</div>
                            <div className="progress w-full">
                                <div className="progress-bar bg-success" style={{ width: `${percentage}` }}>{percentage}</div>
                            </div>
                        </div>
                        <div className='size-full h-fit'>
                            <div className='w-3/4 text-xs'>อุปกรณ์ป้องกัน 22/33 kV</div>
                            <div className="progress w-full">
                                <div className="progress-bar bg-primary" style={{ width: `${percentage}` }}>{percentage}</div>
                            </div>
                        </div>
                        <div className='size-full h-fit'>
                            <div className='w-3/4 text-xs '>Auto voltage regulator</div>
                            <div className="progress w-full">
                                <div className="progress-bar bg-warning" style={{ width: `${percentage}` }}>{percentage}</div>
                            </div>
                        </div>
                        <div className='size-full'>
                            <div className='w-3/4 text-xs '>Capacitor Bank</div>
                            <div className="progress w-full">
                                <div className="progress-bar bg-danger" style={{ width: `${percentage}` }}>{percentage}</div>
                            </div>
                        </div>

                    </div>
                    {/* <div className='text-red-600 text-sm absolute bottom-0 left-auto'>หมายเหตุ เป็นรายงานประจำเดือน มกราคม</div> */}
                </div>
            </div>


            <div className='d-flex justify-content-center  flex-column'>
                <h2 className=' text-center'>รายงานการบำรุงรักษาสถานีประจำปี 2567</h2>

                <div className='flex justify-center w-full'>
                    <div className='w-1/4'>
                        <Bar width="100%" height="100%"
                            data={{
                                labels: [`TP(ABB)`, `CB 22 kV(ABB)`, `CB 22 kV(Schneider)`, 'Green', 'Purple', 'Orange'],
                                datasets: [
                                    {
                                        label: '# รายงานการบำรุงรักษาเเต่ละผลิตภัณฑ์ (Power transformer)',
                                        data: [3, 19, 3, 5, 2, 3],
                                        borderWidth: 1,
                                        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
                                    }
                                ]
                            }}
                        />
                    </div>
                    <div className='w-1/4'>
                        <Bar width="100%" height="100%"
                            data={{
                                labels: [`TP(ABB)`, `CB 22 kV(ABB)`, `CB 22 kV(Schneider)`, 'Green', 'Purple', 'Orange'],
                                datasets: [
                                    {
                                        label: '# รายงานการบำรุงรักษาเเต่ละผลิตภัณฑ์ (AVR)',
                                        data: [3, 19, 3, 5, 2, 3],
                                        borderWidth: 1,
                                        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
                                    }
                                ]
                            }}
                        />
                    </div>
                    <div className='w-1/4'>
                        <Bar width="100%" height="100%"
                            data={{
                                labels: [`TP(ABB)`, `CB 22 kV(ABB)`, `CB 22 kV(Schneider)`, 'Green', 'Purple', 'Orange'],
                                datasets: [
                                    {
                                        label: '# รายงานการบำรุงรักษาเเต่ละผลิตภัณฑ์ (CB22kV,33kV,115kV)',
                                        data: [3, 19, 3, 5, 2, 3],
                                        borderWidth: 1,
                                        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
                                    }
                                ]
                            }}
                        />
                    </div>
                    <div className='w-1/4'>
                        <Bar width="100%" height="100%"
                            data={{
                                labels: [`TP(ABB)`, `CB 22 kV(ABB)`, `CB 22 kV(Schneider)`, 'Green', 'Purple', 'Orange'],
                                datasets: [
                                    {
                                        label: '# รายงานการบำรุงรักษาเเต่ละผลิตภัณฑ์ (CapacitorBank)',
                                        data: [3, 19, 3, 5, 2, 3],
                                        borderWidth: 1,
                                        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
                                    }
                                ]
                            }}
                        />
                    </div>

                </div>

                {/* -------------------------------------------- Power Transformer-------------------------------------- */}
                <div className='flex justify-center'>
                    <div className='w-1/4 h-96 bg-slate-100 mx-1'>
                        <div className='flex justify-between h-1/6'>
                            <div className='mx-2 my-2'>Highlight(TP)</div>
                            <div className='mx-2 my-2'><Link className='no-underline' to={"#"}>ดูทั้งหมด</Link></div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2'>ปากท่อ</div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2'>หัวหิน4</div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div ><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2'>ดำเนินสะดวก</div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2'>โพธาราม</div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div ><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------------------------------- AVR ----------------------------------------- */}
                    <div className='w-1/4 h-96 bg-slate-100 mx-1'>
                        <div className='flex justify-between h-1/6'>
                            <div className='mx-2 my-2'>Highlight(AVR)</div>
                            <div className='mx-2 my-2'><Link className='no-underline' to={"#"}>ดูทั้งหมด</Link></div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2'>เขื่อนเพชร</div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2'>หนองพลับ</div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div ><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2'>นิดา</div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2'>ถ้ำธง</div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div ><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>

                        {/* ----------------------------------------------- Switchgear / Switchyard ----------------------------------------- */}
                    </div>
                    <div className='w-1/4 h-96 bg-slate-100 mx-1'>
                        <div className='flex justify-between h-1/6'>
                            <div className='mx-2 my-2'>Highlight(อุปกรณ์ป้องกัน)</div>
                            <div className='mx-2 my-2'><Link className='no-underline' to={"#"}>ดูทั้งหมด</Link></div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div>ปากท่อ</div>
                                    <div className='text-xs'>ระบบ 22 kV</div>
                                </div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div>โพธาราม1</div>
                                    <div className='text-xs'>ระบบ 115 kV</div>
                                </div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div ><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div>ดำเนินสะดวก</div>
                                    <div className='text-xs'>ระบบ 115 kV</div>
                                </div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>

                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div>โพธาราม2</div>
                                    <div className='text-xs'>ระบบ 115 kV</div>
                                </div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div ><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='w-1/4 h-96 bg-slate-100 mx-1'>
                        <div className='flex justify-between h-1/6'>
                            <div className='mx-2 my-2'>Highlight(Capacitor Bank)</div>
                            <div className='mx-2 my-2'><Link className='no-underline' to={"#"}>ดูทั้งหมด</Link></div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2'>ปากท่อ</div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2'>หัวหิน4</div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div ><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2'>ดำเนินสะดวก</div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2'>
                            <div className='flex justify-between h-1/4 border items-center w-4/5 rounded-md'>
                                <div className='mx-2 my-2'>โพธาราม</div>
                                <div className='mx-2 my-2 flex flex-col items-center'>
                                    <div ><Link className='no-underline' to={"#"}>ผลการดำเนินงาน</Link></div>
                                    <div className='text-xs'>ข้อมูลเมื่อ 1 ม.ค. 67</div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>




                {/* <div className='d-flex justify-content-center align-items-center '>
                    <div className='d-flex'>
                        <div className='table-data' >
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: "center" }}>สถานี</th>
                                        <th style={{ textAlign: "center" }}>วันที่ดำเนินการล่าสุด</th>
                                        <th style={{ textAlign: "center" }}>สถานะปัจจุบัน</th>
                                        <th style={{ textAlign: "center" }}>Work permit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: "center" }}>ปากท่อ</td>
                                        <td style={{ textAlign: "center" }}>22 ก.ย. 67</td>
                                        <td style={{ textAlign: "center" }}>รอดำเนินการ</td>
                                        <td style={{ textAlign: "center" }}>test1</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: "center" }}>ปากท่อ</td>
                                        <td style={{ textAlign: "center" }}>22 ก.ย. 67</td>
                                        <td style={{ textAlign: "center" }}>รอดำเนินการ</td>
                                        <td style={{ textAlign: "center" }}>test1</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: "center" }}>ปากท่อ</td>
                                        <td style={{ textAlign: "center" }}>22 ก.ย. 67</td>
                                        <td style={{ textAlign: "center" }}>รอดำเนินการ</td>
                                        <td style={{ textAlign: "center" }}>test1</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: "center" }}>ปากท่อ</td>
                                        <td style={{ textAlign: "center" }}>22 ก.ย. 67</td>
                                        <td style={{ textAlign: "center" }}>รอดำเนินการ</td>
                                        <td style={{ textAlign: "center" }}>test1</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-light mx-2'>1</button>
                                <button className='btn btn-light mx-2'>2</button>
                                <button className='btn btn-light mx-2'>3</button>
                                <button className='btn btn-light mx-2'>4</button>
                                <button className='btn btn-light mx-2'>...</button>
                                <button className='btn btn-light mx-2'>15</button>
                            </div>
                        </div>
                    </div>

                    <div style={{ height: "60vh", marginBottom: "1%", padding: "1%", display: 'flex', alignItems: "center" }}>
                        <Pie
                            data={{
                                labels: ['แล้วเสร็จ', 'ยังไม่ได้ดำเนินการ', 'อื่น', 'กำลังดำเนินการ'],
                                datasets: [{
                                    label: `จำนวน`,
                                    data: [12, 19, 3, 9],
                                    borderWidth: 1,
                                    //เป็นการกำหนดสีให้กับกราฟเเต่ละกราฟ
                                    backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B",]
                                }]
                            }}
                            options={{
                                scales: {
                                    y: {
                                        display: false,
                                        beginAtZero: true,
                                        grid: {
                                            display: false,
                                        }
                                    },
                                },
                                plugins: {
                                    legend: {
                                        display: false,
                                        position: 'right',
                                        labels: {
                                            color: 'rgb(255, 99, 132)',
                                            boxWidth: 10,
                                        }
                                    },
                                    title: {
                                        display: true,
                                        text: `งานบำรุงรักษาสถานีประจำปี 2567`,
                                        position: 'bottom'
                                    },
                                    datalabels: {
                                        labels: {
                                            // index: {
                                            //     color: '#404040',
                                            //     font: {
                                            //         size: 18,
                                            //     },
                                            //     // See https://chartjs-plugin-datalabels.netlify.app/guide/options.html#option-context
                                            //     formatter: (val: any, ctx: any) => ctx.chart.data.labels[ctx.dataIndex],
                                            //     align: 'end',
                                            //     anchor: 'end',
                                            // },
                                            name: {
                                                // color: (ctx) => ctx.dataset.backgroundColor,************
                                                font: {
                                                    size: 10,
                                                },
                                                backgroundColor: '#F4F8E3',
                                                borderRadius: 4,
                                                offset: 0,
                                                padding: 2,
                                                formatter: (val: any, ctx: any) => `#${ctx.chart.data.labels[ctx.dataIndex]}`,
                                                align: 'top',
                                            },
                                            value: {
                                                color: '#404040',
                                                backgroundColor: '#fff',
                                                borderColor: '#fff',
                                                borderWidth: 2,
                                                borderRadius: 4,
                                                padding: 0,
                                                align: 'bottom',
                                            },
                                        },
                                        formatter: (val: any, ctx: any) => {
                                            // Grab the label for this value
                                            // const label = ctx.chart.data.labels[ctx.dataIndex];

                                            // Format the number with 2 decimal places
                                            const formattedVal = Intl.NumberFormat('en-US', {
                                                minimumFractionDigits: 2,
                                            }).format(val);

                                            // Put them together
                                            return `${formattedVal}`;
                                        }
                                    }
                                }

                            }}
                        />
                    </div>
                </div> */}
            </div>
            <footer className='w-full h-8 bg-purple-300 flex justify-center'>
                <div>COPY right 2023</div>
            </footer>
        </div>
    )

}
export default Dashboard