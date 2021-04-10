import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default class Cities extends React.Component{

    render(){

        return (
            <div style={{ backgroundColor:"black" }}>
                
            <Header />
            <h1 style={{ color:"white" }}>Cities</h1>
            <Footer />
            </div>
        )

    }


}