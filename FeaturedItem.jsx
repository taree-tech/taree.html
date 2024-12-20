




import FeaturedItemCard from "./FeaturedItemCard";



function FeatureItem(){

    const data=[
        {
            id:1,
            title:"Peanuts Fry Spicy",
            src:"/src/assets/peanut-spice.jpg",
            price:"450",
            pathBtn:"#"
        },
        {
            id:2,
            title:"Round Pumpkin Seeds",
            src:"/src/assets/round pumpkin seeds.jpg",
            price:"950",
            pathBtn:"#"
        },
        {
            id:3,
            title:"plain Walnuts",
            src:"/src/assets/plain walnuts.jpg",
            price:"850",
            pathBtn:"#"
        },
        {
            id:4,
            title:"Roasted Cashews",
            src:"/src/assets/roasted cashew.jpg",
            price:"4500",
            pathBtn:"#"
        },
        {
            id:5,
            title:"Pumpkin Seeds",
            src:"/src/assets/pumpkin seeds.jpg",
            price:"1200",
            pathbtn:"#"
        },

    ]

    return(
        <>
        <div className="m-10 mt-16 ">
            <h1 className="mb-14 font-bold text-2xl">Best Selling Products</h1>
            <ul className="flex  ">
            {data.map((dataItem,index)=>(
                    <li className="w-[15%]  m-10 mr-10 ml-15">
                        <FeaturedItemCard
                        key={dataItem.id}
                        title={dataItem.title}
                        src={dataItem.src}
                        price={dataItem.price}
                        pathBtn={dataItem.pathBtn}
                        />
                    </li>
                    ))}
             </ul>
        </div>
        </>
    )
}
export default FeatureItem;