import React from 'react'
import Product from './Product'
const Products = () => {
    return (
        <div className="allProducts">
            {/* <ul>{ products.map((product) =>{
                <li><Product key={product.id} name= {product.name} imageurl={product.image} price={product.price} /></li>
            }) }</ul> */}
            <ul>
            <li><Product name="Cake" price="300" imageurl="https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg" /></li>
            <li><Product name="Patties" price="25" imageurl="https://brijwasi-images.s3.ap-south-1.amazonaws.com/snacks/1-aloo-patties.jpg" /></li>
            </ul>
        </div>
    )
}

export default Products
