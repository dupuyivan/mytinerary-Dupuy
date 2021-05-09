
const Activities = ({ activities })=>{

 return <div className="d-flex justify-content-between">
        {  activities &&
         activities.map( activity =>{
            return <div key={ activity.title } className="rounded m-1" style={{ width:"15rem", height:"8rem", backgroundSize:"cover" ,backgroundImage:`url('${ activity.picture }')` }}>
                        <h3 className="text-ligth city">{ activity.title }</h3>
                    </div> 
        }) }
    </div>
}



export default Activities