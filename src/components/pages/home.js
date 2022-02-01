import React from 'react';
import FeatureBox from '../components/FeatureBox';
import CarouselCollectionRedux from '../components/CarouselCollectionRedux';
import CarouselNewRedux from '../components/CarouselNewRedux';
import AuthorListRedux from '../components/AuthorListRedux';
import SliderMainParticle from '../components/SliderMainParticle';
import AnimationCarousel from '../components/AnimationCarousel';
import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  #section_1 {
    background: url(img/background/vxl.jpg) center bottom / cover;
  }
  #section-intro{
    background: url(img/background/13.jpg) center top / cover;
  }
`

const home= () => (
  <div>
    <section id='section_1' className='no-top no-bottom vh-100'>
      <div className='v-center'>
          <GlobalStyles />
          <SliderMainParticle/>
      </div>

      </section>
      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <AnimationCarousel />
          </div>
        </div>
      </section>

      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Hot Collections</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <CarouselCollectionRedux/>
          </div>
        </div>
      </section>

      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>New Items</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
          <CarouselNewRedux/>
          </div>
        </div>
      </section>

      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Top Sellers</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <AuthorListRedux/>
          </div>
        </div>
      </section>

    <section id='section-intro'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Join the Voxel X Army</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        <FeatureBox/>
      </div>

      </section>

  </div>
);
export default home;