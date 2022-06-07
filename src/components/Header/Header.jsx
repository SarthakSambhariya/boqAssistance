import React from 'react'

const Header = () => {
  return (
    <React.Fragment><header class="header" id="header">
    <nav class="navbar container">
       <a href="./index.html" class="brand">Brand</a>
       <div class="burger" id="burger">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
       </div>
       <span class="overlay"></span>
       <div class="menu" id="menu">
          <ul class="menu-inner">
             <li class="menu-item"><a class="menu-link" href="#">Home</a></li>
             <li class="menu-item"><a class="menu-link" href="#">Profile</a></li>
             <li class="menu-item"><a class="menu-link" href="#">Pricing</a></li>
             <li class="menu-item"><a class="menu-link" href="#">Project</a></li>
             <li class="menu-item"><a class="menu-link" href="#">Contact</a></li>
          </ul>
       </div>
       <button><i class="bx bx-search search-toggle"></i></button>
       <form class="search-block">
          <span><i class="bx bx-arrow-back search-cancel"></i></span>
          <input type="search" name="search" class="search-input" placeholder="Search here..." autofocus/>
       </form>
    </nav>
 </header></React.Fragment>
  )
}

export default Header