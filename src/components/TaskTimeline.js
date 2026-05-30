import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TaskTimeline.css';

const TaskTimeline = () => {
  const [tasks] = useState([
    {
      id: 1,
      name: 'Design Phase',
      start: 0,
      duration: 15,
      status: 'complete',
      team: 'Design Team'
    },
    {
      id: 2,
      name: 'Development Phase',
      start: 10,
      duration: 25,
      status: 'in_progress',
      team: 'Dev Team'
    },
    {
      id: 3,
      name: 'Testing Phase',
      start: 30,
      duration: 12,
      status: 'pending',
      team: 'QA Team'
    },
    {
      id: 4,
      name: 'Deployment',
      start: 42,
      duration: 5,
      status: 'pending',
      team: 'DevOps Team'
    }
  ]);

  const getStatusBadge = (status) => {
    const badges = {
      complete: { label: 'Completed', color: '#10b981' },
      in_progress: { label: 'In Progress', color: '#f59e0b' },
      pending: { label: 'Pending', color: '#6b7280' },
      overdue: { label: 'Overdue', color: '#ef4444' }
    };
    return badges[status] || badges.pending;
  };

  return (
    <div className="task-timeline">
      <div className="section-header">
        <h2>Task Timeline</h2>
        <p>Visual representation of active tasks with status indicators</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-list">
          {tasks.map((task) => {
            const badge = getStatusBadge(task.status);
            return (
              <div key={task.id} className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-info">
                    <h4>{task.name}</h4>
                    <p className="timeline-team">{task.team}</p>
                  </div>
                  <div className="timeline-status">
                    <span 
                      className="status-badge" 
                      style={{ backgroundColor: badge.color }}
                    >
                      {badge.label}
                    </span>
                  </div>
                </div>
                <div className="timeline-bar-wrapper">
                  <div className="timeline-bar-background"></div>
                  <div 
                    className="timeline-bar" 
                    style={{
                      left: `${task.start * 2}%`,
                      width: `${task.duration * 2}%`,
                      backgroundColor: badge.color
                    }}
                  >
                    <span className="timeline-duration">{task.duration} days</span>
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

export default TaskTimeline;
