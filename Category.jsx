import CategoryCard from "./Categorycard";


const details=[
    {
        id:1,
        title: "Dried-Fruits",
        img: "/src/assets/dried_fruits.png"
    },
    
    {
        id:2,
        title: "Dates",
        img: "/src/assets/dates.png"
    },
    {
        id:3,
        title: "Nuts",
        img: "/src/assets/nuts.png"
    },
    {
        id:4,
        title: "Seeds",
        img: "/src/assets/seeds.png"
    },
    {
        id:5,
        title: "Mixed-Nuts",
        img: "/src/assets/mixed_nuts.png"
    },
    
  
    
   
]

function Category (){
    return (
        <section className="m-10" >
            <h1 className="my-6 font-bold text-2xl">Shop By Category</h1>
            <div className="flex justify-center">

            {details.map((info)=>
            <div id={info.id} className="border-gray-500 mr-6 border-2 w-52 h-auto p-8 shadow-black shadow-md  flex flex-col justify-center items-center rounded-2xl">
            <img src={info.img} className="text-black h-16 w-16 mb-2" />
            <h2 className="font-bold whitespace-nowrap text-xl mt-4 ">{info.title}</h2>
            </div>
            )}
            </div>
        </section>
    )
}

export default Category ;