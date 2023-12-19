import React from 'react'
import './style.scss'
import CategoryCard from '../HomePageCategoriesFootCard'

function HomePageCategories() {
    return (
        <div>
            <div className="HomePageCategories">
                <div className="HomePageCategoriesTop">
                    <div className="categories">
                        <div className='categoriesBorder'></div>
                        <p>Categories</p>
                    </div>
                    <div className="browseByCategories">
                        <h2>Browse by Category</h2>

                        <div className="browseByCategoriesIcons">
                            <div className='browseByCategoriesIcon'>
                            <i class="fa-solid fa-arrow-left"></i>
                            </div>
                            <div className='browseByCategoriesIcon'>
                            <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="HomePageCategoriesFoot">
                    <div className="HomePageCategoriesFootCards">
                        <CategoryCard
                            text={'phone'}
                            image={<i className="fa-solid fa-mobile"></i>}
                        ></CategoryCard>
                        <CategoryCard
                            text={'phone'}
                            image={<i class="fa-solid fa-desktop"></i>}
                        ></CategoryCard>
                        <CategoryCard
                            text={'phone'}
                            image={<i class="fa-solid fa-camera-retro"></i>}
                        ></CategoryCard>
                        <CategoryCard
                            text={'phone'}
                            image={<i class="fa-solid fa-headphones"></i>}
                        ></CategoryCard>
                        <CategoryCard
                            text={'phone'}
                            image={<i class="fa-solid fa-gamepad"></i>}
                        ></CategoryCard>
                        <CategoryCard
                            text={'phone'}
                            image={<i class="fa-solid fa-tv"></i>}
                        ></CategoryCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageCategories