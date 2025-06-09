import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Announcement from './components/Announcement';
import EducationalStories from './components/EducationalStories';
import About from './pages/About';
import Welcome from './pages/about/Welcome';
import VisionMission from './pages/about/VisionMission';
import WhyJKKN from './pages/about/WhyJKKN';
import Management from './pages/about/Management';
import ChairmanMessage from './components/ChairmanMessage';
import Curriculum from './components/Curriculum';
import AcademicCalendar from './components/AcademicCalendar';
import Timings from './components/Timings';
import Clubs from './components/Clubs';
import MandatoryPublicDisclosure from './components/MandatoryPublicDisclosure';
import Infrastructure from './components/Infrastructure';
import LifeAtJKKN from './components/LifeAtJKKN';
import AdmissionProcess from './pages/admission/AdmissionProcess';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';
import './App.css';

const sampleEvents = [
  {
    id: '1',
    title: 'Annual Science Exhibition 2024',
    date: 'June 15, 2024',
    link: '/events/science-expo'
  },
  {
    id: '2',
    title: 'Parent-Teacher Meeting (Classes VI-XII)',
    date: 'June 20, 2024',
    link: '/events/ptm-secondary'
  },
  {
    id: '3',
    title: 'Inter-School Sports Championship',
    date: 'June 25, 2024',
    link: '/events/sports-championship'
  },
  {
    id: '4',
    title: 'Cultural Fest "Kalakrithi 2024"',
    date: 'July 5, 2024',
    link: '/events/cultural-fest'
  },
  {
    id: '5',
    title: 'Summer Camp Registration Opens',
    date: 'July 10, 2024',
    link: '/events/summer-camp'
  },
  {
    id: '6',
    title: 'Career Counseling Workshop',
    date: 'July 15, 2024',
    link: '/events/career-workshop'
  }
];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Announcement events={sampleEvents} />
                <EducationalStories />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/about/welcome" element={<Welcome />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/why-jkkn" element={<WhyJKKN />} />
            <Route path="/about/management" element={<Management />} />
            <Route path="/about/chairmans-message" element={<ChairmanMessage />} />
            <Route path="/academics/curriculum" element={<Curriculum />} />
            <Route path="/academics/calendar" element={<AcademicCalendar />} />
            <Route path="/academics/timings" element={<Timings />} />
            <Route path="/academics/clubs" element={<Clubs />} />
            <Route path="/disclosure" element={<MandatoryPublicDisclosure />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/life-at-jkkn" element={<LifeAtJKKN />} />
            <Route path="/admission/process" element={<AdmissionProcess />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
