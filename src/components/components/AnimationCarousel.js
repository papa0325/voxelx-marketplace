import React, { memo } from "react";
import { createGlobalStyle } from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from '@reach/router';

const GlobalStyles = createGlobalStyle`
    #items-carousel-big:hover .owl-prev, #items-carousel-big:hover .owl-next {
        opacity: 1;
    }

    #items-carousel-big .owl-prev, #items-carousel-big .owl-next {
        opacity: 0;
        top: 48%;
    }

    .owl-carousel .owl-animated-out {
        z-index: 1;
    }

    .owl-carousel .owl-animated-in {
        z-index: 200;
    }
    .owl-carousel .animated {
        animation-duration: 1000ms;
        animation-fill-mode: both;
    }

    .owl-prev, .owl-next {
        width: 50px !important;
        height: 50px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border: 1px solid #ddd !important;
        border-radius: 50% !important;
        z-index: 2 !important;
        //opacity: 0 !important;
    }
    .owl-prev > span, .owl-next > span {
        font-size: 40px !important;
    }
    .owl-nav {
        position: absolute;
        width: 100%;
        top: 45%;
        margin: auto;
        display: flex !important;
        justify-content: space-between;
        align-items: center;
    }

    .owl-theme .owl-nav {
        margin-left: -20px;
    }

    .owl-nav span {
        font-weight: 500 !important;

    }

    .d-title {
        font-weight: 400 !important;
    }

   .author_list_info {
        .username:hover {
            color: #f70dff;
        }
    }
    .owl-item:hover {
        opacity: 1;
    }

}
`;

const options = {
    animateOut: 'slideOutDown',
    animateIn: 'flipInY',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    loop: true,

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

