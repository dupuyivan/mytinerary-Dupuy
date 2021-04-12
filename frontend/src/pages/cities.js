import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default class Cities extends React.Component{

    render(){

        return (
            <>
            <div className="main" style={{ backgroundColor:"black" }}>
                <Header logo={ true } />
                <h1 className="text-white text-center">Cities</h1>
            </div>
            <Footer />
            </>
        )

    }


}