import React, { useState } from 'react';
import { TrendingUp, Users, CheckCircle, Target } from 'lucide-react';
import './KPIMetrics.css';

const KPIMetrics = () => {
  const [kpis] = useState([
    {
      id: 1,
      label: 'Project Completion',
      value: '65%',
      target: '100%',
      trend: 'up',
      icon: CheckCircle,
      color: '#3b82f6'
    },
    {
      id: 2,
      label: 'SLA Compliance',
      value: '98.5%',
      target: '95%',
      trend: 'up',
      icon: Target,
      color: '#10b981'
    },
    {
      id: 3,
      label: 'Customer Satisfaction',
      value: '4.7/5',
      target: '4.5/5',
      trend: 'up',
      icon: Users,
      color: '#f59e0b'
    },
    {
      id: 4,
      label: 'Team Utilization',
      value: '87%',
      target: '90%',
      trend: 'down',
      icon: TrendingUp,
      color: '#06b6d4'
    }
  ]);

  return (
    <div className="kpi-metrics">
      <div className="kpi-header">
        <h2>KPI Metrics</h2>
        <p>Key performance indicators</p>
      </div>
      
      <div className="kpi-grid">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.id} className="kpi-card">
              <div className="kpi-icon" style={{ color: kpi.color }}>
                <Icon size={24} />
              </div>
              <div className="kpi-content">
                <div className="kpi-label">{kpi.label}</div>
                <div className="kpi-value" style={{ color: kpi.color }}>
                  {kpi.value}
                </div>
                <div className="kpi-details">
                  <span className="kpi-trend" style={{ color: kpi.trend === 'up' ? '#10b981' : '#ef4444' }}>
                    {kpi.trend === 'up' ? '↑' : '↓'}
                  </span>
                  <span className="kpi-target">Target: {kpi.target}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KPIMetrics;
