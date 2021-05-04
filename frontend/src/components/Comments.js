import Coment from "./Coment"
const Comments = ({ comments })=>{

return <div className="d-flex flex-column" >
        { comments && comments.map( comment => <Coment key={ comment._id } comment={ comment } /> ) }
        <div className="d-flex align-items-center" >
        <div className="mt-1 ml-2" style={{ width:"2.5rem",height:"2.5rem", backgroundSize:"cover", borderRadius:"50%", backgroundPositionX:"center",backgroundPositionY:"center", backgroundImage:`url('https://www.infobae.com/new-resizer/1ihpeVXkMJDJGb_6CaVNwrh2iNE=/420x280/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/M3LUW6ZJJNFSDHJ63PSUHFRNWA.jpg')`}} ></div>
        <input className="ml-2 w-100 " style={{ borderRadius:"1.5rem", border:"1px solid", outline:"none" }} type="text" placeholder="  Write a comment" />
        </div>
    </div>
}

export default Comments