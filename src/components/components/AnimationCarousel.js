import React, { memo } from "react";
import { createGlobalStyle } from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from '@reach/router';

const GlobalStyles = createGlobalStyle`
    // .owl-prev {
    //     margin-left: 10px;
    //     cursor: pointer;
    //     position: absolute;
    //     top: 37.5%;
    //     z-index: 100;
    //     width: 50px;
    //     height: 50px;
    //     background-color: rgba(255, 255, 255, 1.0) !important;
    //     border: solid 1px #ccc !important;
    //     border-radius: 50% !important;
    // }
    // .owl-nav.disabled {
    //     display: inline-block !important;

    // }
    // .owl-nav span {
    //     font-weight: 700 !important;
    // }
    // .d-title {
    //     font-weight: 400 !important;
    // }
   .author_list_info {
        .username:hover {
            color: #f70dff;
        }
    }
}
`;

const options = {
    loop: true,
    margin: 10,
    items: 1
  };
const AnimationCarousel = () => {
    return (
        <div className='nft-big'>
            <GlobalStyles/>
            <section id="section-hero" className="no-bottom">
                <div className="container">
                    <OwlCarousel className="owl-theme owl-carousel" {...options} id="items-carousel-big">
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
                                                <a className="username">Luka Birkin</a>
                                                <span>@lukabirkin</span>
                                            </div>
                                        </div>
                                        <div className="d-attr">
                                            <div>
                                                <span className="d-title">Current Bid</span>
                                                <h3>2.59 ETH</h3>
                                                <h5>($8935,37)</h5>
                                            </div>
                                            <div className="d-attr-right">
                                                <span className="d-title">Auction end in</span>
                                                 <h3>17d  21h  41m  18s</h3>
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
                                                <a href="author.html">
                                                    <img className="lazy" src="img/author/author-1.jpg" alt="" />
                                                    <i className="fa fa-check"></i>
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="author.html" className="username">Luka Birkin</a>
                                                <span>@lukabirkin</span>
                                            </div>
                                        </div>
                                        <div className="d-attr">
                                            <div className="d-attr-left">
                                                <span className="d-title">Current Bid</span>
                                                <h3>3.14 ETH</h3>
                                                <h5>($10793,69)</h5>
                                            </div>
                                            <div className="d-attr-right">
                                                <span className="d-title">Auction end in</span>
                                                <h3>17d  21h  41m  18s</h3>
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
                                                <a href="author.html">
                                                    <img className="lazy" src="img/author/author-4.jpg" alt="" />
                                                    <i className="fa fa-check"></i>
                                                </a>
                                            </div>
                                            <div className="author_list_info">
                                                <a href="author.html" className="username">Lori Hart</a>
                                                <span>@lorihart</span>
                                            </div>
                                        </div>
                                        <div className="d-attr">
                                            <div>
                                                <span className="d-title">Current Bid</span>
                                                <h3>2.25 ETH</h3>
                                                <h5>($7734,33)</h5>
                                            </div>
                                            <div className="d-attr-right">
                                                <span className="d-title">Auction end in</span>
                                                <h3>17d  21h  41m  18s</h3>
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

