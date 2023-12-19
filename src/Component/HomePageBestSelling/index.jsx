import React, { useEffect } from 'react'
import './style.scss'
import AllSectionHead from '../AllSectionHead'
import Button1 from '../buttn'

function HomePageBestSelling() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('')
        .then((res)=>res.json())
        .then((data)=>setProduct(data))
    }, [third])
    
    return (
        <div>
            <div className="homePageBestSelling">
                <AllSectionHead 
                sectiontext={'This Month'} 
                h2text={"Best Selling Products"} 
                right={
                <Button1 
                text={"View All product"}
                />}
                />
                <div className="homePageBestSellingCards">
                    {product.map((x)=>{
                        <ul>
                            <li>{x.name}</li>
                        </ul>
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomePageBestSelling