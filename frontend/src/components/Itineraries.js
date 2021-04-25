import { Accordion, Card,  Button} from "react-bootstrap"
import Rating from "react-rating"

const Itineraries = ({ data })=>{

    if(!data){ return <h1>No hay data</h1>}

return<div className="itinerary rounded m-2 bg-dark text-white">

            <h2 className="t-It">{ data.title }</h2>
            <div className="d-flex flex-column flex-wrap justify-content-center align-items-center mb-2">
                <img className="img-autor" src={ data.author.img } alt="author"/>
                <h3>{ data.author.name } { data.author.last_name }</h3>
            </div>

            <div className="d-flex flex-wrap justify-content-around mt-2" >
                <div className="d-flex justify-content-center align-items-center">
                <h5>Price: </h5> 
                    <Rating readonly initialRating={ data.price }
                    emptySymbol={ <img style={{ width:"1.5rem" }} src="/assets/moneyEmpty.svg"  className="icon ml-1"  alt="icon" /> } 
                    fullSymbol={<img style={{ width:"1.5rem" }} src="/assets/money.svg"  className="icon ml-1" alt="icon" />}
                    />                       
                </div> 
                <div className="d-flex justify-content-center">
                    <h5>Duration: </h5> 
                    <Rating readonly initialRating={ data.price }
                    emptySymbol={ <img style={{ width:"1.2rem" }} src="/assets/clockEmpty.svg" className="icon ml-1" alt="icon" /> } 
                    fullSymbol={<img style={{ width:"1.2rem" }} src="/assets/clock.svg" className="icon ml-1" alt="icon" />}
                    />
                </div>
                <div className="d-flex justify-content-center align-items-center" >
                    <img style={{ width:"1.8rem",marginRight:"0.5rem" }} src={ process.cwd() + "./assets/heart.svg" } alt="icon" /> <span>{ data.likes.length }</span>
                </div> 
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                { data.hashstags.map( element => <h6 className="m-2 text-info" key={ element }>#{ element }</h6> ) }
            </div>
            
            <Accordion defaultActiveKey="0" className="text-dark">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="dark" eventKey="1">
                        View more
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <div className="d-flex justify-content-center align-items-center">
                            <h2>Under construction</h2>
                            <img src="/assets/underConstruction.svg" style={{ width:"4rem" }} alt="icon"  />
                        </div>

                
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
    </div>
}

export default Itineraries