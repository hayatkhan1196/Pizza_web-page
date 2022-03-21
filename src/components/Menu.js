import React from 'react'

function Menu() {
    return (
        <div className='about'>
            <div className="continer">
                <div className="row">

                    <div className="col-6">
                        <div className="about__image">
                            <img src="img/pizza.jpg" alt="pizza" />
                        </div>
                    </div>
                    <div className="col-6 p-25"><h3>The Pizza Menu </h3>
                        <h1>Chicago Thin Crust</h1>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        <div className="about__btn">
                            <a href="" className='btn btn-smart'>View More</a>
                        </div></div>
                </div>
            </div>
        </div>
    )
}

export default Menu