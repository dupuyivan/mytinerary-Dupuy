const City = require("../models/Citi")

let cities=[
    { id:1, country:"Germany", city:"Berlin" ,img:"https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
    { id:2, country:"Usa", city:"New york" ,img:"https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"},
    { id:3, country:"Argentina", city:"Buenos aires",img:"https://as1.ftcdn.net/jpg/00/50/94/16/500_F_50941603_IbK8raA7rPFcjCjIa0bSVLfyQaYJ1vM9.jpg" },
    { id:4, country:"Swiss", city:"Zúrich" ,img:"https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=695&q=80"},
    { id:5, country:"Netherlands", city:"Amsterdam" ,img:"https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=694&q=80"},
    { id:6, country:"Spain", city:"Barcelona" ,img:"https://images.unsplash.com/photo-1560704194-8afbc567d52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},
    { id:7, country:"France", city:"Paris" ,img:"https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"},
]


const getCities = async (req, res) =>{

    const result = await City.find()

    res.json({success:true, result })
}

const getCity = async (req,res)=>{

    const { id } = req.params

    const result = await City.find({ _id: id })

    res.json({ result })
}

const postCities = async (req,res)=>{

    const { country, city , img } = req.body

    const newcity = new City({
        country,
        city,
        img
    })
    await newcity.save()

    const result = await City.find()

    res.json({success:true, result })
}

const delCities = async (req,res)=>{

    const { id } = req.params
    
    const a = await City.findOneAndDelete({ _id:id })
    
    const result = await City.find()

    res.json({ result })
}

const putCities = async (req,res)=>{
    const { id } = req.params

    const { country, city , img } = req.body

    await City.findByIdAndUpdate( { _id:id },{ country, city , img  } )

    const result = await City.find()

    res.json({ result })

}


module.exports ={
    getCities,
    getCity,
    postCities,
    delCities,
    putCities,
}
