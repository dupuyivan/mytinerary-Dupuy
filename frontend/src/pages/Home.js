import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"

export class Home extends React.Component {

    render(){
        return(<>
                <div className="fondo-home" style={{ backgroundImage: "url('./eiffel-tower.jpg')" }}>
                    <Header />
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        <Hero />
                    </div>
                </div> 
                <div className="black ">
                    <h2 className="t-car text-white pt-3">Popular Mytineraries</h2>
                    <Carousel /> 
                </div>
                <Footer />
        </>)
    }
}

