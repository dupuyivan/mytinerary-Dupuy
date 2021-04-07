const hero = () =>{

    return(
        <div style={{ color:"white" }}>

            <h1 style={{ fontSize:"4rem", textAlign:"center", fontWeight:"600" }}>Mytinerary</h1>
            
            <hr style={{ width:"25rem",  }} />
            <hr style={{ width:"25rem",  }} />
        
            <p style={{ fontSize:"2.5rem", fontWeight:"400" }}>Find your perfect trip, designed by insiders who knows and love their cities!</p>

            <div style={{ display:"flex", justifyContent:"center" }}>

            <div className="circulo" style={{ display:"flex", justifyContent:"center",alignItems:"center", fontSize:"2.5rem", cursor:"pointer" }} >
                <h6 style={{ fontSize:"2rem" }}>Start</h6>
            </div>
            </div>

        </div>


    )

}


export default hero