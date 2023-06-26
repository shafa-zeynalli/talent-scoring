import React from 'react';

const ChartBar = ({ currentPageIndex, maxPageIndex }) => {
  const progressPercentage = (currentPageIndex / maxPageIndex) * 100;

  const chartBarStyles = {
    width: '100%',
    height: '22px',
    backgroundColor: '#f2f6f6',
    borderRadius: '8px',
    marginBottom: '10px',
  };

  const fillStyles = {
    width: `${progressPercentage}%`,
    height: '100%',
    backgroundColor: '#038477',
    borderRadius: '8px',
  };

  return (
    <div>
      <div style={chartBarStyles}>
        <div style={fillStyles}></div>
      </div>
    </div>
  );
};

export default ChartBar;