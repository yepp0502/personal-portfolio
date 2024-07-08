import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './Pages/Home'
import Education from './Pages/Education';
import Projects from './Pages/Projects'
import WorkExperience from './Pages/WorkExperience'
import Header from './Layout/Header'
import RoomElement from './Layout/RoomElement';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Header />}>
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work-experience" element={<WorkExperience />} />
        </Route>
      </Routes>
      <RoomElement />
    </BrowserRouter>
  );
 }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
