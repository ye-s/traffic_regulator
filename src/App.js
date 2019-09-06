import React, { useState, useEffect, lazy, Suspense } from 'react';
import logo from './assets/logo.svg';
import './styles/general.scss';
import fetchVehicles from './api/api';
const TrafficForm = lazy(() => import('./components/modules/trafficForm/TrafficForm'));

const App = () => {

  const [trafficItems, setTrafficItems] = useState([]);
  const [isFetchFailed, setFetchFailed] = useState(false);
  useEffect(() => {
   fetchVehicles(setFetchFailed, setTrafficItems);
  }, []);

  return (
    <div className="trafficApp">
      <h2>Choose your vehicle!</h2>
      <Suspense fallback={
        <img
          src={logo}
          className="loader"
          alt="logo"
        />
      }>
        { 
          !isFetchFailed
          ? (<TrafficForm items={trafficItems} />)
          : (<div className="failMessage">We couldn't get vehicle items, please try later</div>)
        }
      </Suspense>
    </div>
  );
}

export default App;
