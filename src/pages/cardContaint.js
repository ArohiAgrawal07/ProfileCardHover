import React from "react"
import Card from "../componets/Card";
import Img1 from'../assets/images/image4.jpg'
import Img2 from'../assets/images/image5.jpg'
import Img3 from'../assets/images/image6.jpg'

const CardContainer=()=>{
    const description1="Screwdrivers are a type of hand tool used for the insertion and removal of screws.";
    const description2="A screw is a cylindrical fastener with a threaded spiral groove (called threads) wrapped around it.";
    const description3="Grinding: Removing material from a surface. Cutting: Slicing through different materials, including metal, tile, and stone. ";
    return (
    <div className="pageBody">
        <div className="container">
            <Card 
          img={Img1} 
          alt="Profile 1" 
          name="ScrewDriver"
          role="Hand Tool"
          description={description1}
        />
        <Card 
          img={Img2} 
          alt="Profile 2" 
          name="Screw"
          role="Cylindrical Fastener"
          description={description2}
        />
        <Card 
          img={Img3} 
          alt="Profile 3" 
          name="Grinder"
          role="Grinding purpose"
          description={description3}
        />
                      
        </div>
    </div>
)
}
export default CardContainer;
