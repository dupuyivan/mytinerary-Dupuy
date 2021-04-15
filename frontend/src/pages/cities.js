import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

/* import { NavLink } from "react-router-dom" */

export default class Cities extends React.Component{

    state={ data:[], resultado:[],visible:false  }

    componentDidMount(){
        fetch("http://localhost:4000/api/cities")
        .then( data => data.json() )
        .then( data =>{ this.setState({ data: data.cities })
        })
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
            this.setState({ visible:true }) }
    }

render(){
      
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
                    
                   /*  this.state.resultado.length > 0 ? console.log(this.state.resultado,this.state.visible)
                    : console.log( this.state.data, this.state.visible ) */

                    this.state.resultado.length === 0 && this.state.visible ?
                    console.log("hola")


                }
                 </div>
            </div>
            <Footer />
            </>
        )
    }
}


/* {  
                        this.state.resultado.length > 0 && this.state.sinResultado === false ?

                        this.state.resultado.map( element =>{
                            return<>
                                    <div key={ element.country } style={{ width:"45% ",height:"15rem",backgroundPositionY:"center",backgroundRepeat:"no-repeat", margin:"0.5rem", backgroundImage:`url('${ element.img }')` }}>
                                        <NavLink key={ element.id } to={"city/"+ element.id} >
                                            <h1 style={{ margin:"30% 30%", backgroundColor:"rgba(0,0,0,.540)",color:"white" }}>{ element.city }</h1>
                                        </NavLink>
                                    </div>
                                </>
                        })
                        : <h1>No hay resultados</h1>
                    } */