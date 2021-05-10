import Coment from "./Coment"
import { connect } from "react-redux"
import ititnerariesAction from "../redux/actions/itinerariesAction"
import { useState } from "react"
const Comments = ({ itinerary, userLogued, sendComment, deleteComent, updateComment })=>{
    const [ coment, setComent ] = useState("")
    const [ newComents, setNewComents ] = useState(itinerary.comments)

    const accionComent = async (action, id_coment, comment) =>{ 

        if( action === "delete" ){
            newComents.filter( coment => coment._id !==  id_coment )
            setNewComents( await deleteComent( itinerary._id, id_coment ) )
          }
        else if( action === "update" && comment !== "" ){ 
           setNewComents( newComents.map(coment =>{ 
               if( coment._id ===  id_coment ){ coment.comment = comment }
               return coment
            }))
        setNewComents( await updateComment( itinerary._id, id_coment, comment ) )
         }
        else {
            if (coment.trim() !== "" ) {
                setNewComents([...newComents,{
                _id:1,
                comment:coment,
                user_id:{
                last_name:userLogued.last_name,
                name:userLogued.name,
                _id:userLogued._id,
                picture:userLogued.picture
            }}])
            setComent("")
            setNewComents( await sendComment( itinerary._id, coment ) );setComent("") 
            }
        }
    }

return <div className="d-flex flex-column" >

        { newComents && newComents.map( comment =>{
            return <Coment key={ comment._id } comment={ comment } accionComent={ accionComent } /> }) 
        }
            <div>
                <div className="d-flex align-items-center mt-2" >
                    <div className="Comentuser" style={{ backgroundImage:`url('${ userLogued ? userLogued.picture : "/assets/user.png" }')` }} ></div>
                    <input className="ml-2 w-100 inputComent text-light" disabled={ !userLogued && true } 
                    value={ coment } onChange={ e =>setComent( e.target.value ) } type="text" placeholder={ userLogued ? "Write a comment" : "You must be loggued" } />
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
    updateComment: ititnerariesAction.updateComment,
}

export default connect(mapStateToProps,mapDispatchToProps)( Comments)