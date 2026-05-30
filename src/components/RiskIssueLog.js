import React, { useState } from 'react';
import { AlertTriangle, AlertCircle, Zap } from 'lucide-react';
import './RiskIssueLog.css';

const RiskIssueLog = () => {
  const [issues] = useState([
    {
      id: 1,
      type: 'risk',
      title: 'Resource Availability',
      description: 'Key developer unavailable during critical phase',
      severity: 'high',
      status: 'mitigating',
      owner: 'John Doe',
      dueDate: '2024-06-15'
    },
    {
      id: 2,
      type: 'issue',
      title: 'Technical Debt Accumulation',
      description: 'Increased technical debt in legacy module',
      severity: 'medium',
      status: 'open',
      owner: 'Sarah Smith',
      dueDate: '2024-06-20'
    },
    {
      id: 3,
      type: 'risk',
      title: 'Budget Overrun',
      description: 'Project costs exceeding budget allocation',
      severity: 'high',
      status: 'mitigating',
      owner: 'Michael Johnson',
      dueDate: '2024-06-10'
    },
    {
      id: 4,
      type: 'issue',
      title: 'Vendor Delay',
      description: 'Third-party vendor delayed API delivery',
      severity: 'medium',
      status: 'open',
      owner: 'Emma Wilson',
      dueDate: '2024-06-25'
    },
    {
      id: 5,
      type: 'risk',
      title: 'Scope Creep',
      description: 'Additional requirements impacting timeline',
      severity: 'low',
      status: 'mitigating',
      owner: 'David Brown',
      dueDate: '2024-07-01'
    }
  ]);

  const getSeverityColor = (severity) => {
    const colors = {
      high: '#ef4444',
      medium: '#f59e0b',
      low: '#fbbf24'
    };
    return colors[severity] || '#6b7280';
  };

  const getStatusBadge = (status) => {
    const badges = {
      open: { label: 'Open', color: '#ef4444' },
      mitigating: { label: 'Mitigating', color: '#f59e0b' },
      resolved: { label: 'Resolved', color: '#10b981' }
    };
    return badges[status] || badges.open;
  };

  const getIcon = (type) => {
    return type === 'risk' ? AlertTriangle : AlertCircle;
  };

  return (
    <div className="risk-issue-log">
      <div className="section-header">
        <h2>Risk & Issue Log</h2>
        <p>Open risks and issues with mitigation status and ownership</p>
      </div>

      <div className="issues-container">
        <div className="issues-table">
          {issues.map((issue) => {
            const Icon = getIcon(issue.type);
            const statusBadge = getStatusBadge(issue.status);
            const severityColor = getSeverityColor(issue.severity);

            return (
              <div key={issue.id} className="issue-row">
                <div className="issue-type">
                  <Icon 
                    size={20} 
                    style={{ color: issue.type === 'risk' ? '#f59e0b' : '#3b82f6' }}
                  />
                </div>
                <div className="issue-main">
                  <h4 className="issue-title">{issue.title}</h4>
                  <p className="issue-description">{issue.description}</p>
                </div>
                <div className="issue-meta">
                  <div className="meta-item">
                    <span className="meta-label">Severity</span>
                    <span 
                      className="severity-badge" 
                      style={{ color: severityColor }}
                    >
                      {issue.severity.toUpperCase()}
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Status</span>
                    <span 
                      className="status-badge-log" 
                      style={{ backgroundColor: statusBadge.color }}
                    >
                      {statusBadge.label}
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Owner</span>
                    <span className="owner-name">{issue.owner}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Due Date</span>
                    <span className="due-date">{issue.dueDate}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RiskIssueLog;
