# Project Management Dashboard

A comprehensive, real-time project management dashboard built with React, featuring status tracking, task timelines, budget analytics, KPI metrics, and risk management.

## Features

### 📊 Dashboard Components

1. **Project Status Indicator**
   - Red/Amber/Green (RAG) status visualization
   - Project completion percentage tracking
   - Upcoming actions list

2. **Task Timeline**
   - Visual representation of active tasks
   - Status indicators (Complete, In Progress, Pending, Overdue)
   - Task duration and team ownership

3. **Budget vs Actuals**
   - Monthly budget comparison chart
   - Financial deviation analysis
   - Total variance calculation with percentage

4. **KPI Metrics**
   - Project Completion Percentage
   - SLA Compliance Tracking
   - Customer Satisfaction Scores
   - Team Utilization Metrics
   - Trend indicators (up/down)

5. **Risk & Issue Log**
   - Risk and issue tracking with severity levels
   - Mitigation status management
   - Team member ownership assignment
   - Due date tracking

### 🌙 Theme Support

- **Light Mode**: Clean, professional appearance for daytime use
- **Dark Mode**: Easy on the eyes for low-light environments
- Smooth theme transitions

## Tech Stack

- **Frontend**: React 18
- **Charts**: Recharts
- **Icons**: Lucide React
- **Styling**: CSS3 with CSS Variables
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd project-management-dashboard

# Install dependencies
npm install

# Start the development server
npm start
```

The dashboard will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Dashboard.js              # Main dashboard component
│   ├── StatusIndicator.js        # RAG status indicator
│   ├── TaskTimeline.js           # Task timeline visualization
│   ├── BudgetVsActuals.js        # Budget analysis chart
│   ├── KPIMetrics.js             # Key performance indicators
│   ├── RiskIssueLog.js           # Risk and issue tracking
│   └── [component].css           # Component-specific styles
├── App.js                        # Main app component with theme toggle
├── App.css                       # App-level styles and theme variables
└── index.js                      # React entry point
```

## Key Features

### Status Tracking
The dashboard uses a Red/Amber/Green (RAG) system to quickly communicate project health:
- 🟢 **Green**: Project on track
- 🟡 **Amber**: Project at risk, attention needed
- 🔴 **Red**: Project off track, immediate action required

### Real-time Metrics
View key performance indicators at a glance:
- Project completion progress
- SLA compliance rates
- Customer satisfaction scores
- Team utilization metrics

### Budget Management
Compare planned vs. actual spending with:
- Monthly breakdown charts
- Variance analysis
- Financial deviation alerts

### Risk Management
Track and manage project risks and issues:
- Severity classification (High, Medium, Low)
- Mitigation status monitoring
- Team member accountability
- Due date tracking

## Theme Customization

Edit the CSS variables in `App.css` to customize colors:

```css
:root {
  --primary-color: #3b82f6;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --danger-color: #ef4444;
  --info-color: #06b6d4;
}
```

## Responsive Design

The dashboard is fully responsive and adapts to:
- Desktop displays (1200px+)
- Tablets (768px - 1024px)
- Mobile devices (< 768px)

## Data Integration

The dashboard currently uses mock data. To integrate with real data sources:

1. Replace the `useState` hooks with data from your API
2. Implement `useEffect` to fetch data from your backend
3. Add error handling and loading states
4. Consider implementing real-time updates with WebSockets

## Future Enhancements

- [ ] Real-time data integration
- [ ] Export reports to PDF/Excel
- [ ] User authentication and role-based access
- [ ] Customizable dashboard layouts
- [ ] Historical data trends and forecasting
- [ ] Team collaboration features
- [ ] Mobile app version
- [ ] Notification system

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the repository.
