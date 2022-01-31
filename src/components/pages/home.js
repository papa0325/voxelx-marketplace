import React from 'react';
import FeatureBox from '../components/FeatureBox';
import CarouselCollectionRedux from '../components/CarouselCollectionRedux';
import CarouselNewRedux from '../components/CarouselNewRedux';
import AuthorListRedux from '../components/AuthorListRedux';
import SliderMainParticle from '../components/SliderMainParticle';
import AnimationCarousel from '../components/AnimationCarousel';


const home= () => (
  <div>
      <section className="jumbotron breadcumb no-bg h-vh">
        <SliderMainParticle/>
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

      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Join the Voxel X Army</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
      </section>

      <section className='container no-top no-bottom'>
        <FeatureBox/>
      </section>
  </div>
);
export default home;