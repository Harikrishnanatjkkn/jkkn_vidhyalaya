import React from 'react';
import Announcement from '@/components/Announcement';

const sampleEvents = [
  {
    id: '1',
    title: 'Annual School Festival',
    date: 'June 15, 2024',
    link: '/events/festival'
  },
  {
    id: '2',
    title: 'Parent-Teacher Meeting',
    date: 'June 20, 2024',
    link: '/events/ptm'
  },
  {
    id: '3',
    title: 'Sports Day',
    date: 'June 25, 2024',
    link: '/events/sports'
  }
];

function App() {
  return (
    <div>
      <section className="mt-8">
        <Announcement events={sampleEvents} />
      </section>
    </div>
  );
}

export default App; 