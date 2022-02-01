import React from 'react';
import ColumnNewRedux from '../components/ColumnNewRedux';
import { createGlobalStyle } from 'styled-components';
import TopFilterBar from '../components/TopFilterBar';

const GlobalStyles = createGlobalStyle`
    #section-explore{
      background: url(img/background/subheader.jpg) center top / cover;
    }

    .text-light h1, .text-light h2, .text-light h3, .text-light h4, .text-light h5, .text-light h6 {
        color: #fff;
    }

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
  <section id="section-explore" className='jumbotron breadcumb no-bg text-light' >
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <h1 className='text-center' >Explore</h1>
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