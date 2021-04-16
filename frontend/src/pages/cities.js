import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { NavLink } from "react-router-dom"

export default class Cities extends React.Component{

   state = { data:[], resultado:[], visible:false }

   componentDidMount(){
    fetch("http://localhost:4000/api/cities")
    .then( data => data.json() )
    .then( data => this.setState({ data: data.result }) )
    .catch( error => console.log( error ) )
    }

    busqueda = (e)=>{
        let encontrado = []
    
        if ( e.target.value === "" ){ this.setState({ resultado:[],visible:false });return } 
        let item = e.target.value.split(" ").join("").toLowerCase()
        this.state.data.map( city =>{
            let ciudad = city.city.split(" ").join("").toLowerCase()
            if ( item.length === 1 ) {
                ciudad[0] === item[0] &&  encontrado.push( city ) 
            }
            else if( item.length === 2 ){
                ciudad[0] === item[0] && ciudad[1] === item[1] && encontrado.push( city ) 
            }
            else if( item.length > 2 ) {
                ciudad[0] === item[0] && ciudad[1] === item[1] && ciudad.includes( item ) && encontrado.push( city )
            }
            return []
        }) 
        if ( encontrado.length === 0 ) { this.setState({ visible:true, data:this.state.data }) }
        else{ this.setState({ resultado: encontrado, visible:false }) }
    }

    render(){
        let array
        if ( this.state.resultado.length > 0 ) { array = this.state.resultado }
        else if( this.state.resultado.length === 0 && this.state.visible ){ array = this.state.resultado }
        else{ array = this.state.data }

    return(<>
            <Header logo={ true }/>
                <div className="black main" >
                    
                        <div className="fondo-cities" >
                            <h2>Cities</h2>
                            <input type="text" style={{ width:"57%" }} className="form-control" onChange={ this.busqueda } placeholder="Ingrese el nombre de una ciudad" />
                        </div>
                    
                        <div className="d-flex justify-content-center flex-wrap mb-2 mt-2" >
                            { this.state.data.length === 0 &&
                                <div className="d-flex justify-content-center m-2">
                                    <div className="spinner-border text-light" role="status"></div>
                                </div>
                            }
                            {
                              this.state.visible ? 
                                <div className="alert alert-danger mt-4" role="alert">
                                    oops!! it seems there are no results <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                                    </svg>
                                </span>
                                </div>
                                : array.map( element =>{
                                    return <div key={ element.city } className="C-igms rounded" style={{ backgroundImage:`url('${ element.img }')` }} >
                                                <NavLink to={ "/city/"+ element._id } >
                                                    <h2 className="city rounded p-1">{ element.city }</h2>
                                                </NavLink>
                                            </div>
                                })
                            }
                        </div>
                </div>
            <Footer />
         </>)
    }
}
