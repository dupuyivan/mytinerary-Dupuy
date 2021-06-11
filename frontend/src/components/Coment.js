import { useState } from "react"
import { connect } from "react-redux"
import{ Modal ,Button} from "react-bootstrap"

const Coment = ({ comment, accionComent, userLogued })=>{
    const [ state, setState ] = useState({ visible:false, textComent:comment.comment, edit:false, modal:false })

return <div className="d-flex mt-1 align-items-center">
            <div className="mt-1 ml-2 Userpicture" style={{  backgroundImage:`url('${ comment.user_id.picture }')`}} ></div>
            
            <div className="mt-1 ml-2 coment-box" >

                <div className="d-flex"> 
                    <h5 className="text-left text-dark nada">{ comment.user_id.name } { comment.user_id.last_name }</h5>
            
                     <div className={ userLogued ? "d-block" : "d-none" }>
                    
                        <div className={state.visible ? "d-block ml-3": "d-none"} >
                            <span className="pointer" onClick={ ()=> setState({ ...state, edit:!state.edit }) } >
                                <img className="money" src="/assets/pencil.svg" alt="edit" />
                            </span>
                            <span className="pointer ml-1" onClick={ ()=> setState({...state, modal:!state.modal}) } >
                                <img className="money" src="/assets/trash.svg" alt="delete" />
                            </span>
                        </div>
                    </div>
                </div>
                
                {   !state.edit
                    ? <p className="text-left nada text-dark coment">{ comment.comment }</p> 
                    : <>
                        <input className="inputComent text-dark" 
                        type="text" value={ state.textComent } onChange={ e => setState({...state,textComent:e.target.value}) } /> 
                        <button className="butonComent" onClick={ ()=> {accionComent( "update", comment._id, state.textComent ); setState({...state, visible:false, edit:false }) } } >
                            <img src="/assets/send.svg" className="pointer money" alt="send" />
                        </button>
                    </>
                }
            </div>
            { userLogued && userLogued._id === comment.user_id._id
                            ?  <span className="ml-2 pointer"  onClick={ ()=>{ setState({...state,visible: !state.visible, edit:false }) }} >...</span>
                            : ""
                    }
           
        <Modal show={state.modal} size="sm" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Body><h4 className="text-center">you're sure ?? </h4></Modal.Body>
            <Button variant="light" onClick={()=>{ setState({...state, visible:false, modal:false })  }}>No</Button>
            <Button variant="primary" className="mt-1" onClick={ ()=>{ accionComent("delete",comment._id);setState({...state, visible: false})} }>Yes</Button>
        </Modal>
    </div>
}

const mapStateToProps = state =>{
    return{
        userLogued:state.authReducer.userLogued
    }
}



export default connect(mapStateToProps,null)(Coment)


