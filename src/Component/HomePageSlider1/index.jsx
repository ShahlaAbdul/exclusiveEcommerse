import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
       <img src="https://images.pexels.com/photos/2323432/pexels-photo-2323432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div>
       <img src="https://images.pexels.com/photos/2323432/pexels-photo-2323432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div>
       <img src="https://images.pexels.com/photos/2323432/pexels-photo-2323432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div>
       <img src="https://images.pexels.com/photos/2323432/pexels-photo-2323432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div>
       <img src="https://images.pexels.com/photos/2323432/pexels-photo-2323432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div>
       <img src="https://images.pexels.com/photos/2323432/pexels-photo-2323432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </Slider>
  );
}