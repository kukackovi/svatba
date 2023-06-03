import React from 'react';
import './App.css';
import FourthPage from './comp/final/FourthPage';
import LocationPage from './comp/final/LocationPage';
import PageHeading from './comp/final/PageHeading';
import SecondPage from './comp/final/SecondPage';
import ThirdPage from './comp/final/ThirdPage';
import GettingReadyPage from './comp/temporary/GettingReadyPage';

function App() {
  return (
    <>
      <div className="card">
        <PageHeading />
      </div>
      <div className="card">
        <LocationPage />
      </div>
      <div className="card">
        <SecondPage />
      </div>
      <div className="card">
        <FourthPage />
      </div>
      <div className="card">
        <ThirdPage />
      </div>
    </>
  )
}

export default App;
