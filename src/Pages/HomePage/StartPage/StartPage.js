import React from "react";
import img from "../../../images/chair-black.png";
import {Link} from "react-router-dom";

function StartPage() {
    return (
        <section className="startPage">
            <div className="startPage__text">
                <h1>
                    Exclusive furniture
                    <br />& accessories
                </h1>
              <Link to="/shop">
                <button className="button button--hyperion startPage__button">
                    <span>
                        <span>shop now</span>
                    </span>
                </button>
              </Link>
            </div>
          <div className="startPage__image-container">
            <img className="startPage__image" src={img} alt="black chair"/>
          </div>
        </section>
    );
}

export default StartPage;
