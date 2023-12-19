import React from 'react'
import './style.scss'

function HomePageProductCard() {
  return (
    <div>
         <div className="flashSaleCardContent">

<div className="flashSaleCardImg">
    <div className="flashSaleCardCount">
        {(((x.price / x.oldPrice) - 1) * 100).toFixed(1)}
    </div>
    <div className="flashSaleCardContentIcons">
        <i className="fa-regular fa-eye"></i>
        <i class="fa-regular fa-heart"></i>
    </div>
    <img src={x.image} alt="img" />

</div>
<div className="flashSaleCardAdd">
    <p>Add To Card</p>
</div>
<ul className='flashCardContentText'>
    <li className='flashSaleName' key={uuidv4}>{x.name}</li>
    <li className='flashSalePrice'>
        <li className='flashSaleNewPrice'>${x.price}</li>
        <li className='flashSaleOldPrice'>${x.oldPrice}</li>
    </li>
    <li className='flashSaleCommentary'>
        <div className='flashSaleCommentarystars'>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </div>
        <div className="flashSaleComment">({x.comments})
        </div>
    </li>
</ul>
</div>

    </div>
  )
}

export default HomePageProductCard