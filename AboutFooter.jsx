function AboutFooter(){
    return(
        <>
        <div className="bg-btnColorDark w-full text-white flex justify-between p-16 px-24" >
                <div className="flex flex-col justify-center whitespace-nowrap">
                    <h1 className="text-2xl font-bold pb-5">Shop</h1>
                    <span className="text-lg pb-1">Nuts</span>
                    <span className="text-lg pb-1">Seeds</span>
                    <span className="text-lg pb-1">Dry Fruits</span>
                </div>
                <div className="flex flex-col items=center whitespace-nowrap">
                    <h1 className="text-2xl font-bold pb-5">Become a Vendor</h1>
                    <span className="text-lg pb-1">Coming Soon</span>
                    <span className="text-lg pb-1"></span>
                    <span className="text-lg pb-1"></span>

                </div>
                <div className="flex flex-col justify-center whitespace-nowrap">
                    <h1 className="text-2xl font-bold pb-5">Contact Us</h1>
                    <span className="text-lg pb-1">Email</span>
                    <span className="text-lg pb-1">WhatsApp: 090078601</span>
                    <span className="text-lg pb-1">Phone : 090078601</span>

                </div>
        </div>
        </>
    )
}

export default AboutFooter;