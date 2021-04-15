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
    
        if ( e.target.value === "" ){ this.setState({ resultado:[] });return } 
    
        let item = e.target.value.split(" ").join("")
    
        item = item.toLowerCase()
    
        this.state.data.map( city =>{
    
            let ciudad = city.city.split(" ").join("") 
    
            ciudad = ciudad.toLowerCase()
    
            if ( item.length === 1 ) {
                if ( ciudad[0] === item[0] ) {encontrado.push( city ) }
            }
            else if( item.length === 2 ){
                if ( ciudad[0] === item[0] && ciudad[1] === item[1] ) { encontrado.push( city ) }
            }
            else if(ciudad[0] === item[0] && ciudad[1] === item[1] &&  ciudad.includes( item ) ) {
                encontrado.push( city )
            }
            return []
        }) 
        if ( encontrado.length === 0 ) {
            this.setState({ visible:true, data:this.state.data })
        }else{
            this.setState({ resultado: encontrado, visible:false })
        }
    
    }

    render(){
        let array

        if ( this.state.resultado.length > 0 ) { array = this.state.resultado }

        else if( this.state.resultado.length === 0 && this.state.visible ){ return <h1>no hay resultado</h1> }
       
        else{ array = this.state.data }

    return(<>
            <Header logo={ true} />
                <div>
                    <div  className="fondo-cities" style={{ backgroundImage:"url('https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')"}}>
                        <h2>Cities</h2>
                        <input type="text" onChange={ this.busqueda } placeholder="Ingrese el nombre de una ciudad"  /> 
                    </div>
                
                    <div className="d-flex justify-content-center flex-wrap" >
                    { 
                        array.map( element =>{
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
           </>)
    }
}


/* state={ data:[], resultado:[],visible:false  }

componentDidMount(){
    fetch("http://localhost:4000/api/cities")
    .then( data => data.json() )
    .then( data =>{ this.setState({ data: data.result })})
}

busqueda = (e)=>{
    let resultado = []

    if ( e.target.value === "" ){this.setState({ resultado:[] });console.log("no buscaron nada");return} 

    let item = e.target.value.split(" ").join("")

    item = item.toLowerCase()

    this.state.data.map( city =>{

        let ciudad = city.city.split(" ").join("") 

        ciudad = ciudad.toLowerCase()

        if ( item.length === 1 ) {
            if ( ciudad[0] === item[0] ) {resultado.push( city ) }
        }
        else if( item.length === 2 ){
            if ( ciudad[0] === item[0] && ciudad[1] === item[1] ) { resultado.push( city ) }
        }
        else if(ciudad[0] === item[0] && ciudad[1] === item[1] &&  ciudad.includes( item ) ) {
            resultado.push( city )
        }
        return []
    }) 

    if ( resultado.length > 0  ) {
        this.setState({ resultado: resultado })
    }
    else{
        console.log("no tengo ninguno")
        this.setState({ visible:true }) 
        }
}

render(){
  
console.log(this.state.data)


return(
    <>
        <Header logo={ true } />
        <div>
            <div style={{ height:"10rem" ,backgroundPositionY:"center", backgroundPositionX:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundImage:"url('https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')"}}>
                <h1 style={{ padding:"2% 46%", fontWeight:"700", fontSize:"3rem", color:"black" }}>Cities</h1>
                <div style={{ padding:"0 43.5%"}}><input type="text" onChange={ this.busqueda } placeholder="Ingrese el nombre de una ciudad"  /> </div>
            </div>

            <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"center" }}>
            {
                
                this.state.resultado.length > 0 ? console.log(this.state.resultado,this.state.visible)
                : console.log( this.state.data, this.state.visible )

                this.state.resultado.length === 0 && this.state.visible ?
                console.log("hola"): "hola"

            }   
             </div>
        </div>
        <Footer />
        </>
    )
} */
