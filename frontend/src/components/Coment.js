import { useState } from "react"
import { connect } from "react-redux"
import{ Modal ,Button} from "react-bootstrap"

const Coment = ({ comment, accionComent, userLogued })=>{
    const [visible, setVisible ] = useState(false)
    const [ textComent, settextComent] = useState(comment.comment)
    const [ editar, setEditar ] = useState(false)
    const [ modal, setModal ] = useState(false);
    
return <div className="d-flex mt-1">
            <div className="mt-1 ml-2 Userpicture" style={{  backgroundImage:`url('${ comment.user_id.picture }')`}} >
            </div>
            
            <div className="mt-1 ml-2 " >
                <h5 className="text-left nada">{ comment.user_id.name } { comment.user_id.last_name }</h5>
                {   !editar
                    ? <p className="text-left nada">{ comment.comment }</p> 
                    : <>
                        <input className="inputComent"
                        type="text" value={ textComent } onChange={ e => settextComent(e.target.value) } /> 
                        <button className="butonComent" onClick={ ()=> {accionComent( "update", comment._id, textComent ); setVisible(false);setEditar(false) } } >
                            <img src="/assets/send.svg" className="pointer money" alt="send" />
                        </button>
                    </>
                }
            </div>
            <div className={ userLogued ? "d-block" : "d-none" }>
                    { userLogued && userLogued._id === comment.user_id._id
                        ?  <span className="ml-2 pointer"  onClick={ ()=>{ setVisible(!visible);setEditar(false) }} >...</span>
                        : ""
                    }
                <div className={visible ? "d-block ml-3": "d-none"} >
                <span className="pointer" onClick={ ()=> setEditar(!editar) } >Edit </span>
                <span className="pointer ml-1" onClick={ ()=> setModal(!modal) } > Delete</span>
                </div>
            </div>

        <Modal show={modal} >
            <Modal.Body>you're sure ??</Modal.Body>
            <Button variant="secondary" onClick={()=>{ setModal(false);setVisible(false)  }}> No</Button>
            <Button variant="primary" onClick={ ()=>{ accionComent("delete",comment._id);setVisible(false)} }>Yes</Button>
        </Modal>
    </div>
}

const mapStateToProps = state =>{
    return{
        userLogued:state.authReducer.userLogued
    }
}



export default connect(mapStateToProps,null)(Coment)


