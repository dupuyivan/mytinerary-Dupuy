import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Carousel from "../components/carousel"

export class Home extends React.Component {

    render(){
        return(
            <>
                <div className="fondo-home" style={{ backgroundImage: "url('./eiffel-tower.jpg')" }}>
                    <Header />
                    <div className="h-100 d-flex justify-content-center align-items-center">
                            <Hero />
                    </div>
                </div> 
                    
                    <div >
                        <h2 className="t-car">Popular MYtineraries</h2>

                    < Carousel /> 
        
                    </div>
                <Footer />
            </>
        )
    }



}

