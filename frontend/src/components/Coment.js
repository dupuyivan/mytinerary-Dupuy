import { useState } from "react"
import { connect } from "react-redux"
import ititnerariesAction from "../redux/actions/itinerariesAction"

const Coment = ({ comment, accionComent })=>{
    const [visible, setVisible ] = useState(false)
    const [ textComent, settextComent] = useState(comment.comment)
    const [ editar, setEditar ] = useState(false)

return <div className="d-flex mt-1">
        <div className="mt-1 ml-2" style={{ width:"3rem",height:"3rem", borderRadius:"50%", backgroundSize:"cover", backgroundPositionX:"center",backgroundPositionY:"center", backgroundImage:`url('${ comment.user_id.picture }')`}} ></div>
        <div className="mt-1 ml-2 " style={{ borderRadius:"4rem" }}>
            <h5 className="text-left nada">{ comment.user_id.name } { comment.user_id.last_name }</h5>
            {   !editar
                ? <p className="text-left nada">{ comment.comment }</p> 
                : <>
                    <input style={{ borderRadius:"1.5rem", border:"1px solid", outline:"none" }} 
                    type="text" value={ textComent } onChange={ e => settextComent(e.target.value) } /> 
                    <button onClick={ ()=> accionComent( "update", comment._id, textComent ) } >EditComment</button>
                    </>
            }
        </div>
        <div>
        <span className="ml-2" style={{ cursor:"pointer" }} onClick={ ()=> setVisible(!visible) } >...</span>
            <div className={ visible ? "d-block": "d-none", "pl-2" } >

                <span style={{ cursor:"pointer" }} onClick={ ()=> setEditar(!editar) } >
                    <img src="/assets/edit.svg" style={{ width:"1.5rem" }} />
                </span>

                <span style={{ cursor:"pointer", marginLeft:"0.5rem" }} 
                    onClick={ ()=> accionComent("delete",comment._id) } ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
              </span>

            </div>
        </div>
    </div>
}

const mapDispatchToProps = {
    sendComment: ititnerariesAction.sendComment
}

export default connect(null, mapDispatchToProps)(Coment)


