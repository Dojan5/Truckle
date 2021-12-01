import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage, LoadingPage, SettingsPage } from './pages';
import { Menubar } from './components';
import App from './App';
import 'normalize.css';
import reportWebVitals from './reportWebVitals';
import './localisation/i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <Router>
        <section className="app-content">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </section>
        <Menubar />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
