import { Link } from "react-router-dom"

const hero = () =>{

    return(
        <div className="hero">

        <div >
            <img src="./traveller.svg" alt="logo" style={{ width:"4rem", marginBottom:"1.3rem" }} />
            <h1>Mytinerary</h1>
        </div>
        
            <hr />
            <hr />
        
            <p >Find your perfect trip, designed by insiders who knows and love their cities!</p>

            <div className=" d-flex justify-content-center">

            <Link to="/cities">
            <div className="circulo" >
                <h6 >Start</h6>
            </div>
            </Link>
            </div>

        </div>


    )

}


export default hero