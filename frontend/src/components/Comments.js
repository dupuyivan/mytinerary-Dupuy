import Coment from "./Coment"
import { connect } from "react-redux"
import ititnerariesAction from "../redux/actions/itinerariesAction"
import { useState } from "react"
const Comments = ({ itinerary, userLogued, sendComment, deleteComent, updateComment })=>{
    const [ coment, setComent ] = useState("")
    const cambiar =(e)=>{ setComent( e.target.value ) }

    const [ newItinerary, setnewItinerary ] = useState(itinerary)

    const accionComent = async (action, id_coment, comment) =>{ 

    if( action === "delete" ){ setnewItinerary( await deleteComent( itinerary._id, id_coment ) ) }

    else if( action === "update" ){ setnewItinerary( await  updateComment( itinerary._id, id_coment, comment ) )  }

    else{ setnewItinerary( await sendComment( itinerary._id, coment) );setComent("") }
    }

return <div className="d-flex flex-column" >
        { newItinerary && newItinerary.comments.map( comment =>{
            return <Coment key={ comment._id } comment={ comment } accionComent={ accionComent } /> }) }
        <div className="d-flex align-items-center" >
        <div className="mt-1 ml-2" style={{ width:"3.5rem",height:"2.5rem", backgroundSize:"cover", borderRadius:"50%", backgroundPositionX:"center",backgroundPositionY:"center", backgroundImage:`url('${ userLogued.picture }')`}} ></div>
        
        <input className="ml-2 w-100 " style={{ borderRadius:"1.5rem", border:"1px solid", outline:"none" }} 
        value={ coment } onChange={ cambiar } type="text" placeholder="  Write a comment" />

        {/* <button  > */}
        <img  onClick={ accionComent } src="/assets/send.svg" style={{ width:"1.5rem" }} />
       {/*  </button> */}
        </div>
    </div>
}

const mapStateToProps = state =>{
    return{
        userLogued:state.authReducer.userLogued
    }
}

const mapDispatchToProps = {
    sendComment: ititnerariesAction.sendComment,
    deleteComent: ititnerariesAction.deleteComent,
    updateComment: ititnerariesAction.updateComment
}

export default connect(mapStateToProps,mapDispatchToProps)( Comments)