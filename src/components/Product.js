import React from 'react'

const Product = ({name,price ,imageurl}) => {

    return (
        <div className="eachProduct" >
            <img src={imageurl} alt="Item" />
            <p id="productName">{name}</p>
            <p id="productPrice">₹ {price}.00</p>
            <form action="AddToCart.js" method="POST">
                {/* Qty: <input type="text" pattern="[0-9]"/><br/> */}
                <label for="quantity">Qty: </label>
                <input type="number" id="quantity" name= "quantity" min="0" defaultValue= "0" className="qty" /><br/>
                <input type="hidden" name="name" value={name}/>
                
                <input type="hidden" name="price" value={price}/>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    )
}

export default Product
