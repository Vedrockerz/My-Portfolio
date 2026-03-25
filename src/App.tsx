import React, { lazy, Suspense, useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PageLoader from './components/PageLoader';
import ScrollProgress from './components/ScrollProgress';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const CertificationsAndAchievements = lazy(() => import('./components/CertificationsAndAchievements'));
const Contact = lazy(() => import('./components/Contact'));


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 750);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 font-body ${
      darkMode ? 'dark' : ''
    }`}>
      <ScrollProgress />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <Suspense fallback={<div className="h-24" />}>
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Education darkMode={darkMode} />
          <CertificationsAndAchievements darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </Suspense>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;