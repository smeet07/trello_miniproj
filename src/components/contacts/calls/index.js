import React from 'react';
import Header from '../common/header';

import RightFold from './right-fold/index';
import './calls.css';
function Calls() {
  return (
    <div className='calls-container'>
      <Header />
      <div className='calls-body'>
        <div className='calls-rightFold'>
          <RightFold />
        </div>
      </div>
    </div>
  );
}

export default Calls;
