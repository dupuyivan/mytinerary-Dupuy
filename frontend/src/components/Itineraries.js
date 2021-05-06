import { Accordion, Card,  Button} from "react-bootstrap"
import Rating from "react-rating"
import { useState } from "react";
import Comments from "./Comments";
import Activities from "./Activities";
import { connect } from "react-redux"
import itineraryAction from "../redux/actions/itinerariesAction"

const Itineraries = ({ data, fetchActivities, like_unlike })=>{
    const [ visible,setVisible ]= useState(false) 
    const [ activities, setActivities ] = useState([])
    
    const fetch = async () => setActivities( await fetchActivities() )

    const like =()=>{ like_unlike( data._id ) }
   
return<div className="itinerary rounded m-2 bg-dark" style={{ color:"#E4E6EB" }}>

            <h2 className="t-It rounded">{ data.title }</h2>
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
                    <Rating readonly initialRating={ data.duration }
                    emptySymbol={ <img style={{ width:"1.2rem" }} src="/assets/clockEmpty.svg" className="icon ml-1" alt="icon" /> } 
                    fullSymbol={<img style={{ width:"1.2rem" }} src="/assets/clock.svg" className="icon ml-1" alt="icon" />}
                    />
                </div>
                <div className="d-flex justify-content-center align-items-center" >
                    <img onClick={ like } style={{ width:"1.8rem", marginRight:"0.5rem" , cursor:"pointer" }} src={ `/assets/${ visible ? "heartFull" : "heartEmpty" }.svg` } alt="icon" /> <span>{ data.likes.length }</span>
                </div> 
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                { data.hashstags.map( element => <h6 className="m-2 text-info" key={ element }>#{ element }</h6> ) }
            </div>
            
            <Accordion defaultActiveKey="0" className="text-light " >
                <Card>
                    <Accordion.Collapse eventKey="1" >
                        <Card.Body className="pt-0 mb-0" className="bg-dark">
                          <h2 className=" bg-dark text-light rounded" >Activities</h2>
                          <Activities activities={ activities } />
                          <h2>Comments</h2>
                          <Comments itinerary={ data }  />
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-dark">
                    <Accordion.Toggle as={Button} onClick={ ()=>{ setVisible(!visible);fetch() }} variant="dark" eventKey="1" >
                        { visible ? "View less": "View more" }
                    </Accordion.Toggle>
                    </Card.Header>
                </Card>
            </Accordion>
    </div>
}

const mapdispatchToProps ={
    fetchActivities:itineraryAction.fetchActivities,
    like_unlike:itineraryAction.like_unlike
}


export default connect(null, mapdispatchToProps) (Itineraries)