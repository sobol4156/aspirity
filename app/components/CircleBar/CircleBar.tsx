import React from 'react';
import './CircleBar.css';

type CircleBarProps = {
  hoveredSegment: number | null;
};

const CircleBar: React.FC<CircleBarProps> = ({ hoveredSegment }) => {
  const size = 180;
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2-10;
  const circumference = 2 * Math.PI * radius;

  const segments = [
    { percentage: 60, color: '#25824F' },
    { percentage: 10, color: '#DB4546' },
    { percentage: 30, color: '#FFB649' },
  ];

  let offset = 0;

  return (
    <svg width={size} height={size} className="donut-chart" fontFamily="Poppins" >
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        {segments.map((segment, index) => {
          const dashArray = `${(segment.percentage / 100) * circumference} ${circumference}`;
          const dashOffset = offset;
          offset -= (segment.percentage / 100) * circumference;

          return (
            <circle
              key={index}
              className={`donut-segment ${hoveredSegment === index ? 'hovered' : ''}`}
              stroke={segment.color}
              cx={size / 2}
              cy={size / 2}
              r={radius }
              fill="none"
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
            />
          );
        })}
      </g>
      <text x="50%" y="40%" textAnchor="middle" dy=".3em" className="donut-text">
        32
        <tspan x="50%" dy="26px" fontSize="14px" fill='#76787A'>дня</tspan>
      </text>
    </svg>
  );
};

export default CircleBar;
