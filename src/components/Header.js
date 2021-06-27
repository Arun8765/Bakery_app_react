import React from 'react'

const Header = () => {
    return (
        <div>
            <header>
        <p class="logo">Bakery</p>
        <nav>
            <ul class="list">
                <li><a href = "/">Home</a></li>
                <li><a href = "about">About</a></li>
                <li><a href = "contact">Contact Us</a></li>
                <li><a href = "sign">Sign in/Sign up</a></li>
                <li><a href="cart"><img src= "public\fav_icons\favicon-16x16.png" alt="Cart" /></a></li>
            </ul>
        </nav>
        </header>
        </div>
    )
}

export default Header
