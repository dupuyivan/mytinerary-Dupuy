import { Accordion, Card,  Button} from "react-bootstrap"
import Rating from "react-rating"

const Itineraries = ({ data })=>{

    if(!data){ return <h1>No hay data</h1>}

return<div className="itinerary rounded m-2">

            <h2 className="t-It">{ data.title }</h2>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
                <img style={{ width:"15%" }} className="rounded" src={ data.author.img } alt="author"/>
                <h3>{ data.author.name } { data.author.last_name }</h3>
            </div>

            <div className="d-flex flex-wrap justify-content-around mt-2" >

                <div className="d-flex justify-content-center align-items-center">
                <h5>Price: </h5> 
                    <Rating readonly initialRating={ data.price }
                    emptySymbol={ <img style={{ width:"1.5rem" }} src={ process.cwd() + "./assets/moneyEmpty.svg" } className="icon" /> } 
                    fullSymbol={<img style={{ width:"1.5rem" }} src={ process.cwd() + "./assets/money.svg" } className="icon" />}
                    />                       
                </div> 
                <div className="d-flex justify-content-center">
                    <h5>Duration: </h5> 
                    <Rating readonly initialRating={ data.price }
                    emptySymbol={ <img style={{ width:"1.2rem" }} src={ process.cwd() + "./assets/clockEmpty.svg" } className="icon" /> } 
                    fullSymbol={<img style={{ width:"1.2rem" }} src={ process.cwd() + "./assets/clock.svg" } className="icon" />}
                    />
                    {/* <img style={{ width:"2rem" }} src={ process.cwd() + "./assets/clock.svg" } /> */}
                </div>
                <div className="d-flex justify-content-center align-items-center" >
                    <h5></h5>
                    <img style={{ width:"2rem",marginRight:"0.5rem" }} src={ process.cwd() + "./assets/heart.svg" } /> <span>{ data.likes.length }</span>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                { data.hashstags.map( element => <h6 className="m-2 text-info" key={ element }>#{ element }</h6> ) }
            </div>
            
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="dark" eventKey="1">
                        View more
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <div>
                            <h3>Activities</h3>
                            <div><h4>Under construction</h4></div>
                        </div>

                        <div>
                            <h3>Comments</h3>
                        </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
    </div>
}

export default Itineraries