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

    let contador = 0

    return (
        <Carousel fade >
            {  
              cities.map( object =>{
                return(
                    <Carousel.Item interval={1000} key={ contador++ } style={{ width:"100%",display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                    {
                    object.map( city =>{
                        return <div className="imgC" key={ contador++ } style={{ backgroundImage:`url('./cities/${ city.path }.jpg')` }} >
                            <h2 className="text-center text-white city" >{ city.name }</h2>
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
