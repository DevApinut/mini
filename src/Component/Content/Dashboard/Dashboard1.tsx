import Chart from 'chart.js/auto'
import { Bar, Pie } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';


const Dashboard = () => {
    Chart.register(ChartDataLabels);
    return (
        <div>
            <Bar
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
            />

            <Pie
                data={{
                    labels: ['Success', 'Not success'],
                    datasets: [{
                        label: `จำนวน`,
                        data: [12, 19],
                        borderWidth: 1
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
                            text: `PM ประจำปี 2467`,
                            position: 'top'
                        },
                        datalabels: {
                            labels: {
                                // index: {
                                //     color: '#404040',
                                //     font: {
                                //         size: 18,
                                //     },
                                //     // See https://chartjs-plugin-datalabels.netlify.app/guide/options.html#option-context
                                //     formatter: (val, ctx) => ctx.chart.data.labels[ctx.dataIndex],
                                //     align: 'end',
                                //     anchor: 'end',
                                // },                                
                                name: {
                                    // color: (ctx) => ctx.dataset.backgroundColor,************
                                    font: {
                                        size: 10,
                                    },
                                    backgroundColor: '#404040',
                                    borderRadius: 4,
                                    offset: 0,
                                    padding: 2,
                                    // formatter: (val, ctx) => `#${ctx.chart.data.labels[ctx.dataIndex]}`,
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
                            formatter: (val, ctx) => {
                                // Grab the label for this value
                                // const label = ctx.chart.data.labels[ctx.dataIndex];***********

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
    )

}
export default Dashboard