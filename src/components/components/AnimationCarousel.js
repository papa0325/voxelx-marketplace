import React, { memo } from "react";
import { createGlobalStyle } from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { Link } from '@reach/router';

const GlobalStyles = createGlobalStyle`
    .owl-carousel {
        position: relative;
        margin-top: -5px;
        bottom: -5px;
        margin-bottom: -15px;
    }

    .owl-nav {
        display: flex;
    }

    .owl-prev, .owl-next, .d-nav-left, .d-nav-right {
        cursor: pointer;
        position: absolute;
        top: 37.5%;
        z-index: 100;
        width: 45px;
        height: 45px;
        background-color: rgba(255, 255, 255, 1.0) !important;
        border: solid 1px #ccc !important;
    }

    .owl-prev, .d-nav-left {
        left: -12px;
        border-radius: 60px;
        padding-left: 4px;
    }

    .owl-next, .d-nav-right {
        right: -12px;
        border-radius: 60px;
        padding-right: 4px;
    }

    #items-carousel-big:hover .owl-prev, #items-carousel-big:hover .owl-next {
        opacity: 1;
    }

    #items-carousel-big .owl-prev, #items-carousel-big .owl-next {
        opacity: 0;
        top: 48%;
    }

    .owl-prev:hover, .owl-next:hover {
        transform: scale(1.1);
        -webkit-box-shadow: 5px 5px 30px 0px rgb(0 0 0 / 20%);
        -moz-box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 5px 5px 30px 0px rgb(0 0 0 / 20%);
    }
}
`;

const options = {
    animateOut: 'slideOutDown',
    animateIn: 'flipInY',
    items:1,
    margin:20,
    smartSpeed:450,
    loop: true,
    dots: false,
    nav: true,
    navElement: 'button',
    navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  };
const AnimationCarousel = () => {
    return (
        <div className='nft-big'>
            <GlobalStyles/>
            <section id="section-hero" className="no-bottom">
                <div className="container animation-section">
                    <OwlCarousel className="owl-theme owl-carousel" {...options} id="items-carousel-big" >
                    {/* <div id="items-carousel-big" className="owl-carousel"> */}
                        <div className="nft__item_lg">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <img src="img/carousel/crs-7.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-desc">
                                        <h2>The Voxel X Cowboy</h2>
                                        <div className="d-author">
                                            <div className="author_list_pp">
                                                <Link to="/Author/1">
                                                    <img className="lazy" src="img/author/author-1.jpg" alt="" />
                                                    <i className="fa fa-check"></i>
                                                </Link>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="" className="username">Luka Birkin</a>
                                                <span>@lukabirkin</span>
                                            </div>
                                        </div>
                                        <div className="d-attr">
                                            <div>
                                                <span className="d-title">Current Bid</span>
                                                 <div className="de_countdown is-countdown">
                                                    <h3>3.14 ETH</h3>
                                                    <h5>($10793,69)</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="d-title">Auction end in</span>
                                                <div className="de_countdown is-countdown">
                                                    <span className="countdown-row countdown-show4">
                                                        <span className="countdown-section">
                                                            <span className="countdown-amount">17d</span>
                                                        </span>
                                                        <span className="countdown-section">
                                                            <span className="countdown-amount">21h</span>
                                                        </span>
                                                        <span className="countdown-section">
                                                            <span className="countdown-amount">41m</span>
                                                        </span>
                                                        <span className="countdown-section">
                                                            <span className="countdown-amount">18s</span>
                                                        </span>
                                                    </span>
                                                </div>

                                                <h5>(November 16, 2021)</h5>
                                            </div>
                                        </div>
                                        <div className="spacer-10"></div>
                                        <div className="d-buttons">
                                            <a href="/" className="btn-main">Place a bid</a>&nbsp;
                                            <a href="/ItemDetail/1" className="btn-main btn-light">View artwork</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="nft__item_lg">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <img src="img/carousel/crs-8.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-desc">
                                        <h2>The Voxel X Clown</h2>
                                        <div className="d-author">
                                            <div className="author_list_pp">
                                                <Link to="/Author/1">
                                                    <img className="lazy" src="img/author/author-1.jpg" alt="" />
                                                    <i className="fa fa-check"></i>
                                                </Link>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="author.html" className="username">Luka Birkin</a>
                                                <span>@lukabirkin</span>
                                            </div>
                                        </div>
                                        <div className="d-attr">
                                            <div>
                                                <span className="d-title">Current Bid</span>
                                                <div className="de_countdown is-countdown">
                                                    <h3>3.14 ETH</h3>
                                                    <h5>($10793,69)</h5>
                                                </div>

                                            </div>
                                            <div>
                                                <span className="d-title">Auction end in</span>
                                                <div className="de_countdown is-countdown">
                                                    <span className="countdown-row countdown-show4">
                                                        <span className="countdown-section">
                                                            <span className="countdown-amount">17d</span>
                                                        </span>
                                                        <span className="countdown-section">
                                                            <span className="countdown-amount">21h</span>
                                                        </span>
                                                        <span className="countdown-section">
                                                            <span className="countdown-amount">41m</span>
                                                        </span>
                                                        <span className="countdown-section">
                                                            <span className="countdown-amount">18s</span>
                                                        </span>
                                                    </span>
                                                </div>
                                                {/* <div className="de_countdown" data-year="2022" data-month="2" data-day="14" data-hour="8"></div> */}
                                                <h5>(November 14, 2021)</h5>
                                            </div>
                                        </div>
                                        <div className="spacer-10"></div>
                                        <div className="d-buttons">
                                            <a href="wallet.html" className="btn-main">Place a bid</a>&nbsp;
                                            <a href="item-details.html" className="btn-main btn-light">View artwork</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="nft__item_lg">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <img src="img/carousel/crs-9.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-desc">
                                        <h2>Cute Island</h2>
                                        <div className="d-author">
                                            <div className="author_list_pp">
                                                <Link to="/Author/1">
                                                    <img className="lazy" src="img/author/author-4.jpg" alt="" />
                                                    <i className="fa fa-check"></i>
                                                </Link>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="author.html" className="username">Lori Hart</a>
                                                <span>@lorihart</span>
                                            </div>
                                        </div>
                                        <div className="d-attr">
                                            <div>
                                                <span className="d-title">Current Bid</span>
                                                 <div className="de_countdown is-countdown">
                                                    <h3>3.14 ETH</h3>
                                                    <h5>($10793,69)</h5>
                                                </div>
                                            </div>
                                            <div >
                                                <span className="d-title">Auction end in</span>
                                                <div className="de_countdown is-countdown">
                                                    <span className="countdown-row countdown-show4">
                                                        <span className="countdown-section">
                                                            <span className="countdown-amount">17d</span>
                                                        </span>
                                                        <span className="countdown-section">
                                                            <span className="countdown-amount">21h</span>
                                                        </span>
                                                        <span className="countdown-section">
                                                            <span className="countdown-amount">41m</span>
                                                        </span>
                                                        <span className="countdown-section">
                                                            <span className="countdown-amount">18s</span>
                                                        </span>
                                                    </span>
                                                </div>

                                                {/* <div className="de_countdown" data-year="2022" data-month="2" data-day="6" data-hour="8"></div> */}
                                                <h5>(November 6, 2021)</h5>
                                            </div>
                                        </div>
                                        <div className="spacer-10"></div>
                                        <div className="d-buttons">
                                            <a href="wallet.html" className="btn-main">Place a bid</a>&nbsp;
                                            <a href="item-details.html" className="btn-main btn-light">View artwork</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    {/* </div> */}
                </div>
            </section>
        </div>
    );

}


export default memo(AnimationCarousel);

