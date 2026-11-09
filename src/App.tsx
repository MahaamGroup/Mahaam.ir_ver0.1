import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AudiencesHubPage } from './pages/AudiencesHubPage';
import { AudienceDetailPage } from './pages/AudienceDetailPage';
import { PathwaysHubPage } from './pages/PathwaysHubPage';
import { DiscoveryJourneyPage } from './pages/DiscoveryJourneyPage';
import { ExperiencesJourneyPage } from './pages/ExperiencesJourneyPage';
import { DecisionMatrixPage } from './pages/DecisionMatrixPage';
import { DecisionEnginePage } from './pages/DecisionEnginePage';
import { AssessmentPage } from './pages/AssessmentPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getInitialRoute = (): PageRoute => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home',
        'about',
        'how-it-works',
        'audiences',
        'audiences/physicians',
        'audiences/attorneys',
        'audiences/executives',
        'audiences/founders',
        'audiences/specialists',
        'pathways',
        'pathways/discovery',
        'pathways/experiences',
        'decision-matrix',
        'decision-engine',
        'assessment',
        'contact',
      ];
      if (validRoutes.includes(hash)) {
        return hash;
      }
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);

  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined') {
      window.location.hash = route;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (hash) {
        setCurrentRoute(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onRouteChange={handleRouteChange} />;
      case 'about':
        return <AboutPage onRouteChange={handleRouteChange} />;
      case 'how-it-works':
        return <HowItWorksPage onRouteChange={handleRouteChange} />;
      case 'audiences':
        return <AudiencesHubPage onRouteChange={handleRouteChange} />;
      case 'audiences/physicians':
        return <AudienceDetailPage audienceKey="physicians" onRouteChange={handleRouteChange} />;
      case 'audiences/attorneys':
        return <AudienceDetailPage audienceKey="attorneys" onRouteChange={handleRouteChange} />;
      case 'audiences/executives':
        return <AudienceDetailPage audienceKey="executives" onRouteChange={handleRouteChange} />;
      case 'audiences/founders':
        return <AudienceDetailPage audienceKey="founders" onRouteChange={handleRouteChange} />;
      case 'audiences/specialists':
        return <AudienceDetailPage audienceKey="specialists" onRouteChange={handleRouteChange} />;
      case 'pathways':
        return <PathwaysHubPage onRouteChange={handleRouteChange} />;
      case 'pathways/discovery':
        return <DiscoveryJourneyPage onRouteChange={handleRouteChange} />;
      case 'pathways/experiences':
        return <ExperiencesJourneyPage onRouteChange={handleRouteChange} />;
      case 'decision-matrix':
        return <DecisionMatrixPage onRouteChange={handleRouteChange} />;
      case 'decision-engine':
        return <DecisionEnginePage onRouteChange={handleRouteChange} />;
      case 'assessment':
        return <AssessmentPage onRouteChange={handleRouteChange} />;
      case 'contact':
        return <ContactPage onRouteChange={handleRouteChange} />;
      default:
        return <HomePage onRouteChange={handleRouteChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-[#1a1c1a] font-sans selection:bg-[#004778] selection:text-white" dir="rtl">
      {/* Top Bar adhering to Top Bar contract */}
      <Navbar currentRoute={currentRoute} onRouteChange={handleRouteChange} />

      {/* Main Dynamic View Area with smooth page transition */}
      <main className="flex-1 w-full flex flex-col">
        <PageTransition idKey={currentRoute}>
          {renderContent()}
        </PageTransition>
      </main>

      {/* Institutional Corporate Footer */}
      <Footer onRouteChange={handleRouteChange} />
    </div>
  );
}
