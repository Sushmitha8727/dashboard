import * as React from 'react';
import './dashboard.scss';
import DashboardBarChart from './dashboardBarChart';
import DashboardTable from './dashboardTable';
import PolarAreaChartDemo from './dashboardPloarPieChart';

function Dashboard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <PolarAreaChartDemo />
                </div>
                <div className="col-3">
                    <DashboardBarChart />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <DashboardTable />
                </div>
   
            </div>
        </div>
    );
}

export default Dashboard;
