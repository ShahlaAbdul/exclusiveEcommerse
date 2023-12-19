import React from 'react';
import HomePageDropDown1 from '../../Component/HomePageSlideSection';
import TodaySection from '../../Component/TodaysSection';
import SimpleSlider from '../../Component/HomePageSlider1';
import HomePageCategories from '../../Component/HomePageCategories';
import AllSectionHead from '../../Component/AllSectionHead';
import HomePageBestSelling from '../../Component/HomePageBestSelling';

function HomePage() {
  return (
    <div>
      <HomePageDropDown1></HomePageDropDown1>
      <TodaySection></TodaySection>
      <HomePageCategories></HomePageCategories>
     <HomePageBestSelling></HomePageBestSelling>
    </div>
  );
}

export default HomePage;
