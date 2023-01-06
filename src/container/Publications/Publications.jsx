import React from 'react';

import './Publications.scss';

const Publications = () => {
  return (
      <>
        <div id='publications' className='publication__section'>
          <h1>Publictions</h1>
          <div className='publication__one'>
            <div className='first__header'>
              <h3>DGSD: Distributed graph representation via graph statistical properties</h3>
              <p>Said, A., Hassan, S. U., Tuarob, S., Nawaz, R., & Shabbir, M. (2021) Future Generation Computer Systems, 119, 166-175</p>
            </div>
            <div className='btns'>
              <button className='btn__danger'>PDF</button>
              <button className='btn__smart'>Source Code</button>
            </div>
          </div>

          <div className='publication__one'>
            <div className='first__header'>
              <h3>Detailed analysis of Ethereum network on transaction behavior, community structure and link prediction.</h3>
              <p>Said, Anwar, et al (2021) PeerJ Computer Science 7 : e815</p>
            </div>
            <div className='btns'>
              <button className='btn__danger'>PDF</button>
              <button className='btn__smart'>Source Code</button>
            </div>
          </div>

          <div className='publication__one'>
            <div className='first__header'>
              <h3>NetKI: A kirchhoff index based statistical graph embedding in nearly linear time..</h3>
              <p>Said, A., Hassan, S. U., Abbas, W., & Shabbir, M. (2021), Neurocomputing, 433, 108-118.</p>
            </div>
            <div className='btns'>
              <button className='btn__danger'>PDF</button>
              <button className='btn__smart'>Source Code</button>
            </div>
          </div>

          <div className='publication__one'>
            <div className='first__header'>
              <h3>Leveraging deep learning and SNA approaches for smart city policing in the developing world.</h3>
              <p>Hassan, S. U., Shabbir, M., Iqbal, S., Said, A., Kamiran, F., Nawaz, R., & Saif, U. (2019),International Journal of Information Management, 102045.</p>
            </div>
            <div className='btns'>
              <button className='btn__danger'>PDF</button>
            </div>
          </div>

          <div className='publication__one'>
            <div className='first__header'>
              <h3>Exploiting social networks of Twitter in altmetrics big data</h3>
              <p>Imran, M., Akhtar, A., Said, A., Safder, I., Hassan, S. U., & Aljohani, N. R. (2018, September) In 23rd international conference on science and technology indicators (STI 2018) (pp. 12-14).</p>
            </div>
            <div className='btns'>
              <button className='btn__danger'>PDF</button>
            </div>
          </div>

          <div className='publication__one'>
            <div className='first__header'>
              <h3>Mining network-level properties of Twitter altmetrics data.</h3>
              <p>Said, A., Bowman, T. D., Abbasi, R. A., Aljohani, N. R., Hassan, S. U., & Nawaz, R. (2019) Mining network-level properties of Twitter altmetrics data. Scientometrics, 120(1), 217-235.</p>
            </div>
            <div className='btns'>
              <button className='btn__danger'>PDF</button>
            </div>
          </div>

          <div className='publication__one'>
            <div className='first__header'>
              <h3>Proactive caching at the edge leveraging influential user detection in cellular D2D networks.</h3>
              <p>Said, A., Shah, S. W. H., Farooq, H., Mian, A. N., Imran, A., & Crowcroft, J. (2018). Future Internet, 10(10), 93.</p>
            </div>
            <div className='btns'>
              <button className='btn__danger'>PDF</button>
            </div>
          </div>

          <div className='publication__one'>
            <div className='first__header'>
              <h3>CC-GA: A clustering coefficient based genetic algorithm for detecting communities in social networks.</h3>
              <p>Said, A., Abbasi, R. A., Maqbool, O., Daud, A., & Aljohani, N. R. (2018). Applied Soft Computing, 63, 59-70.</p>
            </div>
            <div className='btns'>
              <button className='btn__danger'>PDF</button>
              <button className='btn__smart'>Source Code</button>
            </div>
          </div>
        </div> <br />
        <hr />
      </>
  );
}

export default Publications;
