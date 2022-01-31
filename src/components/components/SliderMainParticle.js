import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import { createGlobalStyle } from 'styled-components';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const GlobalStyles = createGlobalStyle`
   .hero-image {
      max-height: 550px!important;
      transform: translate3d(0, 0, 0) perspective(300px) rotateY(-10deg) scale(.95)!important;
      animation: backgrounda 2s ease-in-out infinite alternate!important;
      -webkit-box-shadow: 2px 2px 30px 0px rgba(20, 20, 20, 0.1)!important;
      -moz-box-shadow: 2px 2px 30px 0px rgba(20, 20, 20, 0.1)!important;
      box-shadow: 2px 2px 30px 0px rgba(20, 20, 20, 0.1)!important;
      transition: all .6s;
      -webkit-transition: all .6s;
      animation: animate 1s linear infinite;
      perspective: 800px;
   }
   .hero-image:hover {
      transform: translate3d(0, 0, 0) perspective(300px) rotateY(0deg) scale(1.05) !important;
   }
`;
const slidermainparticle= () => (
  <div className="container">
    <GlobalStyles />
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="spacer-single"></div>
        <h6><span className="text-uppercase color" style={{letterSpacing: '-1px', fontWeight: '900'}}>POWERED BY VOXEL X NETWORK</span></h6>
        <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
          <h1 className="col-black" style={{color: 'black'}}>SuperKluster NFT<br /> Marketplace</h1>
        </Reveal>
        <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
          <p className="lead col-black">
            SuperKluster NFT Marketplace - designed to maximize play-to-earn (P2E) capability for game creators, fans, and investors alike. Create, sell,
            and trade in-game NFT assets with cross platform compatibility with no services*.
            <br /><br />
            SuperKluster is Powered by Voxel X and is 100% community owned.
          </p>
        </Reveal>
        <div className="spacer-10"></div>
        <Reveal className='onStep d-inline' keyframes={inline} delay={800} duration={900} triggerOnce>
          <span onClick={()=> window.open("#", "_self")} className="btn-main inline lead text-white">Explore</span>
          <span onClick={()=> window.open("#", "_self")} className="btn-main inlines d-inline-block text-black" style={{backgroundColor: 'rgb(224, 221, 235)'}}>Create</span>
          <div className="mb-sm-30"></div>
        </Reveal>
      </div>
      <div className='col-md-6 px-0'>
        <img src="/img/bg-shape.jpg" className="lazy img-fluid hero-image wow fadeIn animated" data-wow-delay="1.25s" alt=""/>
      </div>
      </div>
    </div>
);
export default slidermainparticle;