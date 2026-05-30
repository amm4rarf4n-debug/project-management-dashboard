import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './BudgetVsActuals.css';

const BudgetVsActuals = () => {
  const [budgetData] = useState([
    {
      month: 'January',
      planned: 50000,
      actual: 48000,
      variance: 2000
    },
    {
      month: 'February',
      planned: 55000,
      actual: 58000,
      variance: -3000
    },
    {
      month: 'March',
      planned: 60000,
      actual: 59500,
      variance: 500
    },
    {
      month: 'April',
      planned: 65000,
      actual: 68000,
      variance: -3000
    },
    {
      month: 'May',
      planned: 70000,
      actual: 71200,
      variance: -1200
    }
  ]);

  const totalPlanned = budgetData.reduce((sum, item) => sum + item.planned, 0);
  const totalActual = budgetData.reduce((sum, item) => sum + item.actual, 0);
  const totalVariance = totalPlanned - totalActual;
  const variancePercentage = ((totalVariance / totalPlanned) * 100).toFixed(2);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].payload.month}</p>
          <p className="planned">Planned: ${payload[0].value.toLocaleString()}</p>
          <p className="actual">Actual: ${payload[1].value.toLocaleString()}</p>
          <p className="variance">Variance: ${payload[0].payload.variance.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="budget-vs-actuals">
      <div className="section-header">
        <h2>Budget vs Actuals</h2>
        <p>Comparison of planned costs against actual spending</p>
      </div>

      <div className="budget-summary">
        <div className="budget-card">
          <h4>Total Planned</h4>
          <p className="budget-amount">${totalPlanned.toLocaleString()}</p>
        </div>
        <div className="budget-card">
          <h4>Total Actual</h4>
          <p className="budget-amount">${totalActual.toLocaleString()}</p>
        </div>
        <div className={`budget-card variance-card ${totalVariance >= 0 ? 'positive' : 'negative'}`}>
          <h4>Total Variance</h4>
          <p className="budget-amount">${totalVariance.toLocaleString()}</p>
          <p className="variance-percentage">({totalVariance >= 0 ? '+' : ''}{variancePercentage}%)</p>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={budgetData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="month" stroke="var(--text-secondary)" />
            <YAxis stroke="var(--text-secondary)" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="planned" fill="#3b82f6" name="Planned" radius={[8, 8, 0, 0]} />
            <Bar dataKey="actual" fill="#f59e0b" name="Actual" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BudgetVsActuals;
