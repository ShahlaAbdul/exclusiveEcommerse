import React from 'react'
import './style.scss'

function CategoryCard({image,text}) {
  return (
    <div className='CategoryCard'>
        <div className="CategoryCardImg">
            {image}
        </div>
        <div className="CategoryCardText">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default CategoryCard