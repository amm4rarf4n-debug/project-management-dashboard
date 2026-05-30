import React, { useState } from 'react';
import './Dashboard.css';
import StatusIndicator from './StatusIndicator';
import TaskTimeline from './TaskTimeline';
import BudgetVsActuals from './BudgetVsActuals';
import KPIMetrics from './KPIMetrics';
import RiskIssueLog from './RiskIssueLog';

const Dashboard = () => {
  const [projectData] = useState({
    status: 'amber',
    completion: 65,
    upcomingActions: [
      'Review Phase 2 deliverables',
      'Schedule stakeholder meeting',
      'Finalize budget allocation'
    ]
  });

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Project Management Dashboard</h1>
        <p>Real-time project execution monitoring and analytics</p>
      </header>

      <div className="dashboard-grid">
        {/* Status Overview */}
        <section className="dashboard-section status-section">
          <StatusIndicator projectData={projectData} />
        </section>

        {/* KPI Metrics */}
        <section className="dashboard-section kpi-section">
          <KPIMetrics />
        </section>

        {/* Task Timeline */}
        <section className="dashboard-section full-width">
          <TaskTimeline />
        </section>

        {/* Budget vs Actuals */}
        <section className="dashboard-section full-width">
          <BudgetVsActuals />
        </section>

        {/* Risk & Issue Log */}
        <section className="dashboard-section full-width">
          <RiskIssueLog />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
