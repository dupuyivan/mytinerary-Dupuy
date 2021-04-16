import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { NavLink } from "react-router-dom"

export default class Cities extends React.Component{

   state = { data:[], resultado:[],visible:false }

   componentDidMount(){
    fetch("http://localhost:4000/api/cities")
    .then( data => data.json() )
    .then( data =>{ this.setState({ data: data.result })})
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
            else if( item.length > 3 ) {
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

    return(<div className="black">

            <Header logo={ true} />
                <div>
                    <div className="fondo-cities" >
                        <h2>Cities</h2>
                        <input type="text" style={{ width:"40rem" }} className="form-control" onChange={ this.busqueda } placeholder="Ingrese el nombre de una ciudad" />
                    </div>
                
                    <div className="d-flex justify-content-center flex-wrap" >
                    {
                        array.length === 0 && this.state.visible ? <div><h1>No hay resultados</h1></div>
                        
                        : array.map( element =>{
                            return <div key={ element.city } className="C-igms rounded" style={{ backgroundImage:`url('${ element.img }')` }} >
                                       <NavLink to={ "/city/"+ element._id } >
                                        <h1>{ element.city }</h1>
                                       </NavLink>
                                   </div>
                        })
                    }
                    </div>
                </div>
            <Footer />
           </div>)
    }
}
