import Footer from "../components/Footer"
import Header from "../components/Header"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import Itineraries from "../components/Itineraries"
import itinerariesAction from "../redux/actions/itinerariesAction"

const City = ({ cities, fetchItineraries , itineraries, history , match:{ params:{ id } } }) =>{

  const [ city, setcity ] = useState({})

  useEffect(()=>{
    window.scrollTo(0,0)
    fetchItineraries( id )
    setcity( cities.find( element => element._id === id ) )
  },[fetchItineraries, id,cities ])

  if(!cities.length){ history.push("/cities") }

  return<>
          <Header />
              <div className="main prueba" >
                  <div className="fondo-city" style={{ backgroundImage:`url('${ city.img }')` }} >    
                      <div className="d-flex align-items-center justify-content-center" >
                        <h1 className="t-city rounded text-white p-1">{ city.city }</h1>
                      </div>  
                  </div>
                  <div className="d-flex flex-column align-items-center">
                  { 
                    itineraries.length 
                    ? itineraries.map( (object,i) => <Itineraries key={ i } data={ object } /> )
                    : <div className="alert alert-warning mt-4" role="alert">
                        Sorry, we do not have itineraries for { city.city }.Keep looking
                      </div> 
                  }
                  </div> 
                  <div className="text-center m-3">
                    <NavLink to="/cities" >
                      <button className="btn btn-info text-white">Back to cities</button>
                    </NavLink>
                  </div>

              </div>
          <Footer />  
      </>
}

const mapStateToProps = state =>{
  return{
    cities: state.citiesReducer.cities,
    itineraries: state.itinerariesReducer.itineraries
  }
}

const mapDispatchToProps = {
  fetchItineraries :itinerariesAction.fetchItineraries
}

export default connect(mapStateToProps,mapDispatchToProps)( City ) 