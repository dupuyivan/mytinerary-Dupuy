import { Accordion, Card,  Button} from "react-bootstrap"
import Rating from "react-rating"
import { useEffect, useState } from "react";
import Comments from "./Comments";
import Activities from "./Activities";
import { connect } from "react-redux";
import itinerariesAction from "../redux/actions/itinerariesAction";
import { useToasts } from "react-toast-notifications"

const Itineraries = ({ data, fetchActivities, userLoggued, like_unlike })=>{
    const [ state, setState ] = useState({ activities:[], liked:true, likes:data.likes,send:false })
    const [ visible, setVisible ] = useState( true )
   /*  const [ send, setSend ] = useState( false ) */
    const { addToast } = useToasts()

    useEffect(()=>{
        if( userLoggued && state.likes.includes( userLoggued._id ) ){ setState({ ...state, liked:true }) }
        else{ setState({ ...state, liked:false }) }
    },[ state.likes, data,userLoggued ])

    const fetch = async () =>{ visible && setState({ ...state,activities: await fetchActivities( data._id ) }) }

    const Like_Unlike = async ()=>{   
    if(userLoggued){ 
        state.liked 
        ? setState({ ...state, likes: state.likes.filter( id => id !== userLoggued._id ) })
        : setState({ ...state,likes: [...state.likes,userLoggued._id] }) 

        if( !state.send ){
            setState({ ...state, likes: await like_unlike( data._id ),send:true })
            /* setSend( true ) */
        }
         
    }else{ addToast("You must be logued",{ appearance:"error", autoDismiss:true }) }

    }

return<div className="itinerary rounded m-2 bg-dark">

            <h2 className="t-It rounded">{ data.title }</h2>
            <div className="d-flex flex-column flex-wrap justify-content-center align-items-center mb-2">
                <img className="img-autor" src={ data.author.img } alt="author"/>
                <h3>{ data.author.name } { data.author.last_name }</h3>
            </div>

            <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-around mt-2" >
                <div className="d-flex justify-content-center align-items-center">
                    <h5>Price: </h5> 
                    <Rating readonly initialRating={ data.price }
                    emptySymbol={ <img src="/assets/moneyEmpty.svg"  className="icon ml-1 money"  alt="icon" /> } 
                    fullSymbol={<img src="/assets/money.svg"  className="icon ml-1 money" alt="icon" />}
                    />                       
                </div> 
                <div className="d-flex justify-content-center">
                    <h5>Duration: </h5> 
                    <Rating readonly initialRating={ data.duration }
                    emptySymbol={ <img src="/assets/clockEmpty.svg" className="icon ml-1 clock" alt="icon" /> } 
                    fullSymbol={<img src="/assets/clock.svg" className="icon ml-1 clock" alt="icon" />}
                    />
                </div>
                <div className="d-flex justify-content-center align-items-center" >
                    <img onClick={ Like_Unlike } className="money pointer" src={ `/assets/${ userLoggued && state.liked ? "heartFull" : "heartEmpty" }.svg` } alt="icon" /> 
                    <span className="ml-1">
                        { state.likes.length }
                    </span>
                </div> 
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                { data.hashstags.map( element => <h6 className="m-2 text-info" key={ element }>#{ element }</h6> ) }
            </div>
            
            <Accordion defaultActiveKey="0" className="text-light " >
                <Card>
                    <Accordion.Collapse eventKey="1" >
                        <Card.Body className="pt-0 mb-0 bg-dark" >
                          <h2 className=" bg-dark text-light rounded" >Activities</h2>
                          <Activities activities={ state.activities } />
                          <h2>Comments</h2>
                          <Comments itinerary={ data }  />
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-dark">
                    <Accordion.Toggle as={Button} onClick={ ()=>{ setVisible( !visible );fetch() }} variant="dark" eventKey="1" >
                        { !visible ? "View less": "View more" }
                    </Accordion.Toggle>
                    </Card.Header>
                </Card>
            </Accordion>
    </div>
}

const mapStateToProps = state =>{
    return{
        userLoggued:state.authReducer.userLogued
    }
}


const mapdispatchToProps ={
    fetchActivities:itinerariesAction.fetchActivities,
    like_unlike:itinerariesAction.like_unlike,
}


export default connect(mapStateToProps, mapdispatchToProps) (Itineraries)