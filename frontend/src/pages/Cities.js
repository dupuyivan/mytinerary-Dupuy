import React from "react"   
import Header from "../components/Header"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import citiesAction from "../redux/actions/citiesAction"

class Cities extends React.Component{

   componentDidMount(){ this.props.fetchear() }

    render(){
    
    return <>
            <Header />
                <div className="black main" >
                        <div className="fondo-cities" >
                            <h2>Cities</h2>
                            <input type="text" style={{ width:"57%",textAlign:"center" }} className="form-control" onChange={ this.props.buscar } placeholder="Search a city" />
                        </div>
                    
                        <div className="d-flex justify-content-center flex-wrap mb-2 mt-2" >

                            { !this.props.cities.length &&
                                <div className="d-flex justify-content-center m-2">
                                    <div className="spinner-border text-light" role="status"></div>
                                </div>
                            }
                            {
                              this.props.cities.length && !this.props.citiesFiltered.length
                                ? <div className="alert alert-danger mt-4" role="alert">
                                    oops!! it seems there are no results 
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                                            </svg>
                                        </span>
                                    </div>
                                : this.props.citiesFiltered.map( element =>{
                                    return<div key={ element.city } className="C-igms rounded pointer" onClick={ ()=> this.props.history.push("/city/"+ element._id) } 
                                    style={{ backgroundImage:`url('${ element.img }')` }} >
                                            <h2 className="city text-white rounded p-1">{ element.city }</h2>
                                          </div>    
                                })
                            }
                        </div>
                </div>
            <Footer />
         </>
    }
}

const mapStateToProps =( state )=>{
    return{
        cities: state.citiesReducer.cities,
        citiesFiltered: state.citiesReducer.citiesFiltered
    }
}

const mapDispatchToProps={
    fetchear: citiesAction.fetchear,
    buscar: citiesAction.buscador,
}


export default connect(mapStateToProps,mapDispatchToProps)( Cities )
