import img1 from "./almonds.png"
import img2 from "./cashews.png";
import img3 from "./Walnuts.png";
import { Carousel } from "flowbite-react";

function Hero () {
   return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-10">
      <Carousel pauseOnHover>
        <img src={img1} alt="..." />
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
      </Carousel>
    </div>
    )

};

export default Hero;