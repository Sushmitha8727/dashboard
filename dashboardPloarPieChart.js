import React from 'react';
import { Chart } from 'primereact/chart';

const PolarAreaChartDemo = () => {
    const chartData = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726",
                "#26C6DA",
                "#7E57C2"
            ],
            label: 'My dataset'
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ]
    };

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    return (
        <div className="card p-d-flex p-jc-center">
            <Chart type="polarArea" data={chartData} options={lightOptions} style={{ position: 'relative', width: '100%', height:'50%' }} />
        </div>
    );
}


export default PolarAreaChartDemo;