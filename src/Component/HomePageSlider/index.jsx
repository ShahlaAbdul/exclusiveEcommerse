import React from "react";
import { Carousel } from "react-carousel-minimal";

function HomePageSlide() {
  const data = [
    {
      image:""
    },
    {
      image: "homepageImg.png.jpg",
    },
    {
      image: "homepageImg.png.jpg",
    },
  ];


  return (
    <div className="Slide">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height='300px'

            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "900px",
              maxHeight: "500px",
              
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default HomePageSlide;
