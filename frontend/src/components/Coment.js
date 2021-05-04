import { useState } from "react"


const Coment = ({ comment })=>{


    const [visible, setVisible ] = useState(false)
    const [ textComent, settextComent] = useState(comment.coment)
    const [ editar, setEditar ] = useState(false)

return <div className="d-flex mt-1">
        <div className="mt-1 ml-2" style={{ width:"3rem",height:"3rem", borderRadius:"50%", backgroundSize:"cover", backgroundPositionX:"center",backgroundPositionY:"center", backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4Snh2qDTsz-D31pnKfLJRtYSJBAM9ncfDA&usqp=CAU')`}} ></div>
        <div className="mt-1 ml-2 " style={{ borderRadius:"4rem" }}>
            {/* <h6 className="text-left nada">{ coment.user.name } { coment.user.last_name }</h6> */}
            {   !editar
                ? <p className="text-left nada">{ comment.comment }</p> 
                : <input style={{ borderRadius:"1.5rem", border:"1px solid", outline:"none" }} type="text" value={ textComent } onChange={ e => settextComent(e.target.value) } /> 
            }
            
        </div>
        <div>
        <span className="ml-2" style={{ cursor:"pointer" }} onClick={ ()=> setVisible(!visible) } >...</span>
            <div className={ visible ? "d-block": "d-none" }>
                <span style={{ cursor:"pointer" }} onClick={ ()=> setEditar(!editar) } >Editar</span>
            </div>
        </div>
    </div>
}

export default Coment


