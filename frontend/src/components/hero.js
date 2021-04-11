import { Link } from "react-router-dom"

const Hero = () =>{

    return(
        <div className="hero">

        <div>
            <img src="./traveller.svg" alt="logo" className="logo" />
            <h1 className="text-light">Mytinerary</h1>
        </div>
        
            <p>Find your perfect trip, designed by insiders who knows and love their cities!</p>

            <div className=" d-flex justify-content-center">

            <Link to="/cities">
            <div className="circulo" >
                <h6>Let's begin</h6>
            </div>
            </Link>
            </div>

        </div>


    )

}


export default Hero