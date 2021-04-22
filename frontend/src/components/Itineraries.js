let itineraries=
    { 
       title:"Paseo en barco",
       author:{ name:"Robert",lastName:"Dominguez", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Robert_De_Niro_Cannes_2016.jpg/220px-Robert_De_Niro_Cannes_2016.jpg" },
       price:"2",
       duration:"4",
       likes:["ids"],
       hashstags:["#hashstags"," ","#dfgf"],
       comments:[{ userId:"", comment:"" }],
       cityId:"id de city"
    }


const Itineraries = ()=>{

return<> 
        <div className="bg-info m-2 rounded text-white">

            <h2 className="m-3 p-1" >{ itineraries.title }</h2>
            <div className="d-flex justify-content-center align-items-center" >
                <img style={{ width:"5rem",height:"5rem" }} className="rounded" src={ itineraries.author.img } alt="author"/>
                <h3 className=" ml-2" >{ itineraries.author.name } { itineraries.author.lastName }</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
                <h5 style={{ margin:"0.5rem" }}>Price</h5> <span>{ itineraries.price }</span>
                <h5 style={{ margin:"0.5rem" }}>Duration</h5> <span>{ itineraries.duration }</span>
                <h5 style={{ margin:"0.5rem" }}>Like</h5> <span>{ itineraries.likes }</span>
                <h6 style={{ margin:"0.5rem" }}>{ itineraries.hashstags }</h6>
            </div>

            <div>
                <h2>Activities</h2>
                <div>
                    <h2>Coments</h2>
                </div>
            </div>
        </div>
    </>

}

export default Itineraries