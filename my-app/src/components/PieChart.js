import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri'],
        datasets: [
            {
                label: 'Attendance for Week 1',
                data: [25, 24, 25, 25, 6],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(232,99,132,1)',
                    'rgba(232,211,6,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,159,64,1)',
                    'rgba(153,102,255,1)'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
                width: ['450px'],
            }

        ]
    }
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Pie Chart',
                color: 'blue',
                font: {
                    size: 34
                },
                padding: {
                    top: 30,
                    bottom: 30
                },
                responsive: true,
                animation: {
                    animateScale: true,
                }
            }
        }

    }
    return (
        <React.Fragment>
                    <div className="container-fluid mb-3 mt-3 homepg">
        <h1 className="text-center mt-3 mb-3"> My Pie Chart </h1>
            <div className="row">
            <div className="col-md-4">
            <Pie data={data} options={options} />
            </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default PieChart