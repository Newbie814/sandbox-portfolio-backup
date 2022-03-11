import React from 'react';
import './work.css';

export default function Work() {
  return (
    <>
      <div className='d-flex flex-column'>
        <div className='education-one my-4 justify-content-between d-flex flex-row'>
          <div className='d-flex flex-column new-one'>
            <span className='business-name'>
              Self-employed, Personal Trainer
            </span>
            <span className='duties-list'>
              Research, Individualized training programs and adjustments
            </span>
          </div>
          <div>
            <span className='year-worked'>2012-present</span>
          </div>
        </div>
        <div className='education-one my-4 justify-content-between d-flex flex-row'>
          <div className='d-flex flex-column new-one'>
            <span className='business-name'>Gold's Gym, Personal Trainer</span>
            <span className='duties-list'>
              Research, Trainer Education, Individualized training programs and
              adjustments
            </span>
          </div>
          <div>
            <span className='year-worked'>2010-2016</span>
          </div>
        </div>
      </div>
    </>
  );
}
