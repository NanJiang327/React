import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoPlaySpeed: 1000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img alt='' className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4620/c56b295694e97397f9845c532122994cdca622a7.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          </div>
          <div>
            <img alt='' className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4619/667c4f9446720ed3a12690580eb534cef8b58192.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          </div>
          <div>
            <img alt='' className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          </div>
          <div>
            <img alt='' className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4617/8c9d800fc5f4b636dfccf4494159a3b8c22897c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          </div>
        </Slider>
      </div>
    );
  }
}

