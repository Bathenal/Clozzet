import Shoppage from "./Shoppage"
import Jeans from "../assets/images/ragged-jeans.png";
import Jacket from "../assets/images/leather-jacket.png";
import Dress from "../assets/images/slim-banquet-dress.png";
import Denim from "../assets/images/denim.png";
import Leather from "../assets/images/leather-jacket.png";
import Quartz from "../assets/images/quartz-watch.png";
import Women from "../assets/images/denim-jeans.png";
import Brown from "../assets/images/brown-handbag.png";
import Unisex from "../assets/images/graphic-tshirts.png";
import Bomber from "../assets/images/bomber.png";
import Pallazo from "../assets/images/pallazo.png";
import Shoes from "../assets/images/leather-shoes.png";
import Serpenti from "../assets/images/serpenti-forever.png";
import Airforce from "../assets/images/unisex.png";
import Cocktail from "../assets/images/cocktail.png";
import Crop from "../assets/images/Off-The-Shoulder.png";
import Airsense from "../assets/images/Airsense-pleated.png";
import Smartwatch from "../assets/images/smartwatch.png";
import Heels from "../assets/images/ZOOSHI-COBALT.png";
import Sweater from "../assets/images/knitted-sweater.png";

function Shoppages (){
    return(
        <div className="container mx-auto flex justify-between">
            <Shoppage img={Jeans} 
            title="Blue Rageed Jeans"             />
            <Shoppage img={Jacket} 
            title="Brown Leather Jacket"/>
            <Shoppage img={Dress} 
            title="Slim Banquet Dress"/>
            <Shoppage img={Denim} 
            title="Blue Denim Jacket"/>
            <Shoppage img={Leather} 
            title="Brown Leather Jacket"/>
            <Shoppage img={Quartz} 
            title="Quartz Men’s Watch"/>
            <Shoppage img={Women} 
            title="Women Denim Jeans"/>
            <Shoppage img={Brown} 
            title="Brown handbag"/>
            <Shoppage img={Unisex} 
            title="Unisex Graphic T-shirt"/>
            <Shoppage img={Bomber} 
            title="Black Bomber Jacket"/>
            <Shoppage img={Pallazo} 
            title="Pleated pallazo Pants"/>
            <Shoppage img={Shoes} 
            title="Pure Leather Shoes"/>
            <Shoppage img={Serpenti} 
            title="Purple Serpenti purse"/>
            <Shoppage img={Airforce} 
            title="Unisex Airforce Sneakers"/>
            <Shoppage img={Cocktail} 
            title="Blue Cocktail Dress"/>
            <Shoppage img={Crop} 
            title="Off-Shoulder Crop Top"/>
            <Shoppage img={Airsense} 
            title="Airsense Pleated Pants"/>
            <Shoppage img={Smartwatch} 
            title="Classy Smart Watch"/>
            <Shoppage img={Heels} 
            title="Blue Platform Heels"/>
            <Shoppage img={Sweater} 
            title="Strip Knitted Sweater"/>
        </div>
    )
}
export default Shoppages