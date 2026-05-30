import React from 'react';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import './StatusIndicator.css';

const StatusIndicator = ({ projectData }) => {
  const getStatusDetails = (status) => {
    const statuses = {
      green: {
        label: 'On Track',
        color: '#10b981',
        icon: CheckCircle,
        description: 'Project is progressing as planned'
      },
      amber: {
        label: 'At Risk',
        color: '#f59e0b',
        icon: AlertTriangle,
        description: 'Some concerns that need attention'
      },
      red: {
        label: 'Off Track',
        color: '#ef4444',
        icon: AlertCircle,
        description: 'Significant issues require immediate action'
      }
    };
    return statuses[status];
  };

  const statusDetails = getStatusDetails(projectData.status);
  const StatusIcon = statusDetails.icon;

  return (
    <div className="status-indicator">
      <div className="status-header">
        <h2>Project Status</h2>
      </div>
      
      <div className="status-display" style={{ borderColor: statusDetails.color }}>
        <div className="status-icon" style={{ color: statusDetails.color }}>
          <StatusIcon size={48} />
        </div>
        <div className="status-info">
          <div className="status-label" style={{ color: statusDetails.color }}>
            {statusDetails.label}
          </div>
          <div className="status-description">{statusDetails.description}</div>
        </div>
      </div>

      <div className="completion-tracker">
        <div className="completion-header">
          <span>Completion Progress</span>
          <span className="completion-percentage">{projectData.completion}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${projectData.completion}%`,
              backgroundColor: statusDetails.color
            }}
          />
        </div>
      </div>

      <div className="upcoming-actions">
        <h3>Upcoming Actions</h3>
        <ul className="actions-list">
          {projectData.upcomingActions.map((action, index) => (
            <li key={index}>
              <span className="action-bullet">•</span>
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatusIndicator;
