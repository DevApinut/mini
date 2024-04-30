import Chart from 'chart.js/auto'
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';


const Dashboard = () => {
    Chart.register(ChartDataLabels);
    return(
        <div>
        <Bar data={{
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
    </div>
    )
    
}
export default Dashboard