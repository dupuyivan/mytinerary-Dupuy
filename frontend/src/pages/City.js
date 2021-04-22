import Footer from "../components/Footer"
import Header from "../components/Header"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import citiesAction from "../redux/actions/citiesAction"
import { useEffect } from "react"


const City = ({ city,buscarCity, match:{ params:{ id } } }) =>{

  buscarCity( id )

  return<>
          <Header />
              <div className="main">
                <div className="fondo-city" style={{ backgroundImage:`url('${ city.img }')` }} >
                    <div>
                        <NavLink to="/cities">
                          <button type="button" className="btn btn-outline-danger m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                          </button>
                        </NavLink>
                    </div>     
                    <div className="d-flex align-items-center justify-content-center" >
                      <h1 className="t-city rounded text-white p-1">{ city.city }</h1>
                    </div>  
                </div>

                <div className="text-center">
                  <h4>Citycomponent</h4>
                </div>
              </div>
          <Footer />
      </>
}

const mapStateToProps = state =>{
  return{
    city: state.MasterReducer.city
  }
}

const mapDispatchToProps ={
   buscarCity: citiesAction.buscarCity
}


export default connect(mapStateToProps,mapDispatchToProps)( City ) 