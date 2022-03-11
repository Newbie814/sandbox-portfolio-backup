import React from 'react';
import './programs.css';
export default function Programming() {
  const value = [
    {
      text: 'javascript',
      percentage: 80,
    },
    {
      text: 'CSS',
      percentage: 80,
    },
    {
      text: 'HTML',
      percentage: 80,
    },
    {
      text: 'Node.js',
      percentage: 80,
    },
    {
      text: 'React JS',
      percentage: 80,
    },
    {
      text: 'MongoDB',
      percentage: 80,
    },
    {
      text: 'Redux',
      percentage: 80,
    },
  ];

  return (
    <>
      <div>
        <div className='row'>
          {value.map((value, index) => {
            return (
              <>
                <div className='col-lg-6 col-mg-6 col-sm-12 my-2'>
                  <span className='language'>{value.text} </span>
                  <div className='progress-some'>
                    <div
                      className='progress-new'
                      style={{ width: `${value.percentage}%` }}
                    >
                      {' '}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
