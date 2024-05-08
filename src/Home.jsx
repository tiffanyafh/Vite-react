import React from 'react';
import home from './assets/home.png';
import feature1 from './assets/product1.webp';
import feature2 from './assets/product2.webp';
import feature3 from './assets/product3.webp';
import feature4 from './assets/product4.jpeg';
import feature5 from './assets/product5.jpeg';


const Home = () => {

    return(
        <main>
        <br></br><div className="homepic">
            <img src={home} alt="candles"/>
        </div>
           
        <div className="featured-products"><h2>PRODUCTOS DESTACADOS</h2></div>

        <div className="container">
            <div className="box">
                <img src={feature1} alt="box 1" />
                <p>BOY</p>
            </div>
            <div className="box">
                <img src={feature2} alt="box 2" />
                <p>VELA DE VARA</p>
            </div>
            <div className="box">
                <img src={feature3} alt="box 3" />
                <p>TWIST</p>
            </div>
            <div className="box">
                <img src={feature4} alt="box 4" />
                <p>GIRLY POP</p>
            </div>
            <div className="box">
                <img src={feature5} alt="box 5" />
                <p>ROCK N ROLL</p>
            </div>
        </div><br></br><br></br>
        </main>
    );
}

export default Home