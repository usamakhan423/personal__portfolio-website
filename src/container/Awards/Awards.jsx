import React from 'react';

import { images } from '../../constant';

import './Awards.scss';

const Awards = () => {
  return (
    <>
      <div id='awards' className='award__container'>
        <h3>Awards</h3>
        <div className='award__category'>
          <div>
            <img src={images.award} alt="award" />
            <p>Recipient of the Vanderbilt University, Postdoctoral research scholar fellowship.</p>
          </div>

          <div>
            <img src={images.award} className="customize__award" alt="award" />
            <p>Recipient of the travel grant for attending the “Youth in High-dimensions: Machine Learning, High-dimensional Statistics and Inference for the New Generation” Conference, 2020, ICTP, Trieste, Italy.</p>
          </div>

          <div>
            <img src={images.award} alt="award" />
            <p>Recipient of the Information Technology University, Ph.D. Fellowship 2017-2021.</p>
          </div>

          <div>
            <img src={images.award} alt="award" className="customize__award-2"/>
            <p>Recipient of the Gold Medal from University of Swat for achieving highest academic ranking</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
