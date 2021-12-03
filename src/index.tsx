import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import useAckee from 'use-ackee';
import { AboutPage, LoadingPage, SettingsPage } from './pages';
import { Menubar } from './components';
import App from './App';
import 'normalize.css';
import reportWebVitals from './reportWebVitals';
import './localisation/i18n';

const Main = () => (
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <Router>
        <Content />
      </Router>
    </Suspense>
  </React.StrictMode>
)

const Content = () => {
  const location = useLocation();

  useAckee(location.pathname, {
    server: 'https://ackee.grovecastle.me',
    domainId: 'ae65943e-cd8e-4141-900a-12973a1f661f'
  }, {
    detailed: true
  });

  return (
    <>
      <section className="app-content">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </section>
      <Menubar />
    </>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
