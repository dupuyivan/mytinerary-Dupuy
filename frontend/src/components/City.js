import React,{ useEffect , useState} from "react"
import { NavLink } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const City = (props) =>{

  const { id } = props.match.params

  const [ data, dataF ] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/api/cities/"+ id)
    .then( data => data.json() )
    .then( data => dataF( data.result ) )
    .catch( error => console.log(error) )
  },[id])

  return<>
          <Header />
              <div className="main">
                <div className="fondo-city" style={{ backgroundImage:`url('${ data.img }')` }} >
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
                      <h1 className="t-city">{ data.city }</h1>
                    </div>  
                </div>

                <div className="text-center">
                  <h3>Under Construction</h3>
                </div>
              </div>
          <Footer />
      </>
}

export default City