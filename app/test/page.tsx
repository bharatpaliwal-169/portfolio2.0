// components/Timeline.tsx
import React from 'react';

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  description: string;
  side: 'left' | 'right';
  bgColor: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Event One',
    date: 'January 2023',
    description: 'This is the description for the first timeline event.',
    side: 'right',
    bgColor: 'bg-gray-400',
  },
  {
    id: 2,
    title: 'Event Two',
    date: 'February 2023',
    description: 'This is the description for the second timeline event.',
    side: 'left',
    bgColor: 'bg-red-400',
  },
  {
    id: 3,
    title: 'Event Three',
    date: 'March 2023',
    description: 'This is the description for the third timeline event.',
    side: 'right',
    bgColor: 'bg-gray-400',
  },
  {
    id: 4,
    title: 'Event Four',
    date: 'April 2023',
    description: 'This is the description for the fourth timeline event.',
    side: 'left',
    bgColor: 'bg-red-400',
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="container bg-gray-200 mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        {/* Center line */}
        <div
          className="border-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: '50%' }}
        ></div>

        {/* Timeline Items */}
        {timelineData.map((item) => (
          <div
            key={item.id}
            className={`mb-8 flex justify-between items-center w-full ${
              item.side === 'left' ? 'flex-row-reverse' : ''
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">{item.id}</h1>
            </div>
            <div
              className={`order-1 ${item.bgColor} rounded-lg shadow-xl w-5/12 px-6 py-4`}
            >
              <h3 className="mb-3 font-bold text-xl text-white">{item.title}</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
