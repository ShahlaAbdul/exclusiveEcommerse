import React from 'react';
import HomePageDropDown1 from '../../Component/HomePageSlideSection';
import TodaySection from '../../Component/TodaysSection';
import SimpleSlider from '../../Component/HomePageSlider1';

function HomePage() {
  return (
    <div>
      <HomePageDropDown1></HomePageDropDown1>
      <TodaySection></TodaySection>
      <SimpleSlider></SimpleSlider>
     
    </div>
  );
}

export default HomePage;
