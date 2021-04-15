import React,{ useEffect , useState} from "react"

const City = (props) =>{

const { id } = props.match.params

const  [data, dataF ] = useState([])

    useEffect(()=>{

        fetch("http://localhost:4000/api/cities/"+ id)
        .then( data => data.json() )
        .then( data => dataF( data.result[0] ) )
    },[])

    return <>
            <div style={{ height:"20rem",width:"100%", display:"flex",alignItems:"center",justifyContent:"center",backgroundPositionX:"center", backgroundImage:`url('${ data.img }')` }} >
              <h1 style={{color:"white",fontSize:"4rem", fontFamily:"Josefin Sans", fontWeight:"600" }}>{ data.city }</h1>
            </div>
            
            
            <div>
                
            <h3>{ data.city }</h3>

            </div>
    </>


}

export default City