import React from 'react';
import './education.css';
export default function Education() {
  return (
    <>
      <div className='d-flex flex-column'>
        <div className='education-one my-4 justify-content-between d-flex flex-row'>
          <div className='d-flex flex-column new-one'>
            <span className='university-name'>
              University of Life, Hard Knock Campus
            </span>
            <span className='university-degree'>
              Phd, Poor Man's Ingenuity and Solutions Theory
            </span>
          </div>
          <div>
            <span className='year-passedout'>1977-present</span>
          </div>
        </div>
      </div>
    </>
  );
}
