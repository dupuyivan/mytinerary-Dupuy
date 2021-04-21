import React from 'react';
import { Carousel } from "react-bootstrap"

const CarouselComp = ( ) =>{
    
    let cities =[
        [
            { name:"Rome", path:"roma2" },
            { name:"Cancun", path:"cancun" },
            { name:"Ibiza", path:"ibiza" },
            { name:"New York", path:"new-york-2" }
        ],
        [
            { name:"Paris", path:"paris3" },
            { name:"Tokio", path:"tokio2" },
            { name:"Toronto", path:"toronto" },
            { name:"Amsterdam", path:"amsterdam" }
        ],
        [
            { name:"Buenos Aires", path:"buenos-aires2" },
            { name:"Chicago", path:"chicago" },
            { name:"Rio de Janerio", path:"rio-de-janerio" },
            { name:"London", path:"london" }
        ]
    ]
    return (
        <Carousel fade >
            {  
              cities.map( array =>{
                return(
                    <Carousel.Item interval={ 2000 } key={ array[0].name } style={{ width:"100%",display:"flex", flexWrap:"wrap", justifyContent:"center",paddingBottom:"1rem"}}>
                    {
                    array.map( object =>{
                    return <div className="imgC" key={ object.path } style={{ backgroundImage:`url('./cities/${ object.path }.jpg')` }} >
                                <h2 className="text-center text-white city" >{ object.name }</h2>
                            </div>
                        })
                    }
                    </Carousel.Item> )
                })
            }
            </Carousel>
    )
}


export default CarouselComp
