import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='banner'>
      <Navbar/>
       <div className="banner__content">
           <div className='container'>
               <div className="banner__text">
               <h3>Pizza Delivery</h3>
               <h1>Italian Pizza </h1>
               <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
               <div className="banner__btn">
                 <a href=''className='btn btn-smart'>Delivery Now</a>
               </div>
               </div>
              
           </div>
       </div>
        </div>
  )
}

export default Header