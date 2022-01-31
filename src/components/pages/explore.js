import React from 'react';
import ColumnNewRedux from '../components/ColumnNewRedux';
import { createGlobalStyle } from 'styled-components';
import TopFilterBar from '../components/TopFilterBar';

const GlobalStyles = createGlobalStyle`
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const explore= () => (
<div>
  <GlobalStyles />
  <section className='jumbotron breadcumb no-bg'>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12'>
            <h1 className='text-center' style={{color: 'black'}}>Explore</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
    <div className='row'>
      <div className='col-lg-12'>
        <TopFilterBar />
      </div>
    </div>
      <ColumnNewRedux />
  </section>
</div>

);
export default explore;