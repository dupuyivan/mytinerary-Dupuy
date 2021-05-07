import Coment from "./Coment"
import { connect } from "react-redux"
import ititnerariesAction from "../redux/actions/itinerariesAction"
import { useState } from "react"
const Comments = ({ itinerary, userLogued, sendComment, deleteComent, updateComment })=>{
    const [ coment, setComent ] = useState("")
    const [ newComents, setNewComents ] = useState(itinerary.comments)

    const accionComent = async (action, id_coment, comment) =>{ 

        if( action === "delete" ){ setNewComents( await deleteComent( itinerary._id, id_coment ) ) }

        else if( action === "update" && comment !== "" ){ 
        setNewComents( await updateComment( itinerary._id, id_coment, comment ) ) }

        else{  coment !== "" && setNewComents( await sendComment( itinerary._id, coment) );setComent("") }
    }

return <div className="d-flex flex-column" >

        { newComents && newComents.map( comment =>{
            return <Coment key={ comment._id } comment={ comment } accionComent={ accionComent } /> }) 
        }
            <div>
                <div className="d-flex align-items-center mt-2" >
                 { userLogued 
                    ? <div className="picture-user" style={{ backgroundImage:`url('${ userLogued.picture }')` }} ></div>
                    : <div className="picture-user bg-white" style={{ backgroundImage:`url('/assets/user.png')` }} ></div>
                }
                <input className="ml-2 w-100 inputComent" disabled={ !userLogued && true } 
                value={ coment } onChange={ e =>setComent( e.target.value ) } type="text" placeholder="  Write a comment" />
        
                <img onClick={ accionComent } src="/assets/send.svg" className="pointer money" alt="send" />
                </div>
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