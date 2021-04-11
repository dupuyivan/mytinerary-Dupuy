import React from 'react';
import { Carousel } from "react-bootstrap"

const CarouselComp = ( ) =>{
    
    let cities =[
        [
            { name:"Roma", path:"roma2" },
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
              cities.map( object =>{
                return(
                    <Carousel.Item interval={1000} key={ object[0].name } style={{ width:"100%",display:"flex", flexWrap:"wrap", justifyContent:"center",paddingBottom:"1rem"}}>
                    {
                    object.map( city =>{
                    return <div className="imgC" key={ city.path } style={{ backgroundImage:`url('./cities/${ city.path }.jpg')` }} >
                                <h2 key={ city.name } className="text-center text-white city" >{ city.name }</h2>
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
