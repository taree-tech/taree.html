function FeaturedItemCard(props){
    return(
        
        <div className="flex flex-col w-auto justify-center items-center shadow-gray-700 text-lg shadow-md rounded-md">
            <img src={props.src} className="object-cover" ></img>
            <h1 className="">{props.title}</h1>
            <span className="mb-7 mt-2 text-lg font-bold ">Rs.{props.price}</span>
            <a className="" href={props.path}><button className="text-4xl text-black  mb-3 font-bold">+</button></a>
        </div>
        
    )
}
export default FeaturedItemCard;