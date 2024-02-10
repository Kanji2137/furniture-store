import React from "react";
import {Link} from "react-router-dom";

import imgLiving from "../../../images/living-room.jpg";
import imgBedroom from "../../../images/bedroom.jpg";
import imgBathroom from "../../../images/bathroom.jpg";
import imgKitchen from "../../../images/kitchen.jpg";

function ShopByRoom() {
    return (
        <section className="shopByRoom">
            <div className="shopByRoom__title">
                <h1>shop by room</h1>
            </div>
            <div className="shopByRoom__container">
                <div className="shopByRoom__imageContainer shopByRoom__image-1">
                    <h1>living room</h1>
                    <Link to="/shop" state={{room: "Living Room"}} className="link--carpo link">SHOP NOW</Link>
                    <img src={imgLiving} alt="living room" />
                </div>
                <div className="shopByRoom__imageContainer shopByRoom__image-2">
                    <h1>bedroom</h1>
                    <Link to="/shop" state={{room: "Bedroom"}} className="link--carpo link">SHOP NOW</Link>
                    <img src={imgBedroom} alt="bedroom" />
                </div>
                <div className="shopByRoom__imageContainer shopByRoom__image-3">
                    <h1>bathroom</h1>
                    <Link to="/shop" state={{room: "Bathroom"}} className="link--carpo link">SHOP NOW</Link>
                    <img src={imgBathroom} alt="bathroom" />
                </div>
                <div className="shopByRoom__imageContainer shopByRoom__image-4">
                    <h1>kitchen</h1>
                    <Link to="/shop" state={{room: "Kitchen"}} className="link--carpo link">SHOP NOW</Link>
                    <img src={imgKitchen} alt="kitchen" />
                </div>
            </div>
        </section>
    );
}

export default ShopByRoom;
