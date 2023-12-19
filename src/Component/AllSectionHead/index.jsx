import React from 'react'
import './style.scss'

function AllSectionHead({sectiontext,h2text,right}) {
  return (
    <div>
           <div className="HomePageCategoriesTop">
                    <div className="categories">
                        <div className='categoriesBorder'></div>
                        <p>{sectiontext}</p>
                    </div>
                    <div className="browseByCategories">
                        <h2>{h2text}</h2>

                        <div className="browseByCategoriesRight">
                            {right}
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default AllSectionHead