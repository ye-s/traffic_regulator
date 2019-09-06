import React from 'react';
import logo from '../../assets/logo.svg';

const Loader = (props) => {

  return (
    <div className="itemsLoaderBlock">
      <img
        src={logo}
        alt="spinner"
        className="itemsLoader loader"
      />
      <p>Loading vehicles...</p>
    </div>
  );
}

export default Loader;