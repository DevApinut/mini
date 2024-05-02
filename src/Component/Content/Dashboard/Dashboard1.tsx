import Chart from 'chart.js/auto'
import { Bar, Pie } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';


const Dashboard = () => {
    Chart.register(ChartDataLabels);
    return (
        <div className='container'>
            <div className='text-center'>
                <h3>DashBoard</h3>
            </div>
            {/* --------------------------------------รายการ Navbar เล็กสำหรับแสดงข้อมูลในภาพรวม-------------------- */}
            <div className='d-flex '>
                <div className='border mx-2 pointer-menu' style={{ height: "20vh", width: "20vw", marginBottom: "1%", padding: "1%", borderRadius: "20px" }}>
                    <div className='absolute top-0 left-auto'>จำนวนสถานีทั้งหมด</div>
                    <div className='d-flex flex-column align-items-center size-full justify-content-center' >
                        <h5 className='text-red-600'>37</h5>
                        <h5 className='text-green-900'>สถานี</h5>
                    </div>
                    <div className='text-red-600 text-sm absolute bottom-0 left-auto'>หมายเหตุ เป็นรายงานประจำเดือน มกราคม</div>
                </div>
                <div className='border mx-2 pointer-menu' style={{ height: "20vh", width: "20vw", marginBottom: "1%", padding: "1%", borderRadius: "20px" }}>
                    <div className='absolute top-0 left-auto'>อุปกรณ์ในความรับผิดชอบ</div>
                    <div className='d-flex flex-column align-items-center size-full justify-content-center' >
                        <h5 className='text-red-600'>999</h5>
                        <h5 className='text-green-900'>รายการ</h5>
                    </div>
                    <div className='text-red-600 text-sm absolute bottom-0 left-auto'>หมายเหตุ เป็นรายงานประจำเดือน มกราคม</div>
                </div>
                <div className='border mx-2 pointer-menu' style={{ height: "20vh", width: "20vw", marginBottom: "1%", padding: "1%", borderRadius: "20px" }}>
                    <div className='absolute top-0 left-auto'>รายการอุปกรณ์ชำรุด</div>
                    <div className='d-flex flex-column align-items-center size-full justify-content-center' >
                        <h5 className='text-red-600'>แล้วเสร็จ 230 รายการ</h5>
                        <h5 className='text-green-900'>ยังไม่ได้ดำเนินการ 230 รายการ</h5>
                    </div>
                    <div className='text-red-600 text-sm absolute bottom-0 left-auto'>หมายเหตุ เป็นรายงานประจำเดือน มกราคม</div>
                </div>
                <div className='border mx-2 pointer-menu' style={{ height: "20vh", width: "20vw", marginBottom: "1%", padding: "1%", borderRadius: "20px" }}>
                    <div className='absolute top-0 left-auto'>รายการอุปกรณ์ชำรุด</div>
                    <div className='d-flex flex-column align-items-center size-full justify-content-center' >
                        <h5 className='text-red-600'>999</h5>
                        <h5 className='text-green-900'>รายการ</h5>
                    </div>
                    <div className='text-red-600 text-sm absolute bottom-0 left-auto'>หมายเหตุ เป็นรายงานประจำเดือน มกราคม</div>
                </div>
            </div>


            <div className='d-flex justify-content-center border flex-column'>
                <h2 className='border text-center'>รายงานการบำรุงรักษาสถานีประจำปี</h2>
                {/* <div style={{ height: "60vh", marginBottom: "1%", padding: "1%" }}> */}
                {/* <Bar
                        data={{
                            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                            datasets: [
                                {
                                    label: '# of Votes',
                                    data: [3, 19, 3, 5, 2, 3],
                                    borderWidth: 1
                                }
                            ]
                        }}
                    /> */}
                {/* </div> */}


                <div className='d-flex justify-content-center align-items-center border'>
                    <div className='d-flex'>
                        <div className='table border' style={{  marginBottom: "1%", padding: "1%", borderRadius: "20px" }} >
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
                </div>


            </div>
        </div>
    )

}
export default Dashboard