import React from 'react';
import './style.scss'
import HomePageSlide from '../HomePageSlider';


function HomePageDropDown1() {
  return (
    <section id="HomePageSlideSection">
      <div className="HomePageSlide_Section">
        <div className="dropdown">
          <p>Woman's fashion</p>
          <p>Man's fashion</p>
          <p>Electronics</p>
          <p>Home&Lifestyle</p>
          <p>medicine</p>
          <p>Sports</p>
          <p>Baby's toys</p>
          <p>Grociers&Pets</p>
          <p>Health& Beauty</p>
        </div>
        <div className="homePageSlide">
          <HomePageSlide></HomePageSlide>
        </div>
      </div>
    </section>
  );
}

export default HomePageDropDown1;
