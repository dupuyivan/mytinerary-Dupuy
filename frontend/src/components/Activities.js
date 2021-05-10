
const Activities = ({ activities })=>{

 return <div className="d-flex flex-wrap justify-content-center">
        {  activities &&
         activities.map( activity =>{
            return <div key={ activity.title } className="rounded m-1 activity" style={{ backgroundImage:`url('${ activity.picture }')` }}>
                        <h3 className="text-ligth city">{ activity.title }</h3>
                    </div> 
        }) }
    </div>
}



export default Activities