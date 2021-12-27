import React from 'react';
import Header from '../common/header';

import RightFold from './right-fold/index';
import './calls.css';
import {useParams} from 'react-router-dom'
function Calls() {
// const idf=this.props.match.params.id
let { id } = useParams();
  return (
    <div className='calls-container'>
      <Header />
      <div className='calls-body'>
        <div className='calls-rightFold'>
          <RightFold idf={id}/>
        </div>
      </div>
    </div>
  );
}

export default Calls;
