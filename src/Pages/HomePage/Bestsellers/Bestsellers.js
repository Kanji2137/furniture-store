import React from "react";
import data from "../../../data/data.json";

import { BsCart } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

const panel = () => {
    return (
        <div className="bestsellers__panel">
            <BsCart />
            <AiOutlineEye />
            <BsHeart />
        </div>
    );
};

function Bestsellers() {
    return (
        <section className="bestsellers">
            <div className="bestsellers__title">
                <h1>Bestsellers</h1>
            </div>
            <div className="bestsellers__container">
                {data.bestsellers.map((bestseller) => {
                    return (
                        <div className="bestsellers__tile">
                            <div className="bestsellers__imageContainer">
                                <img src={bestseller.url} alt="chair" />
                                {panel()}
                            </div>
                            <div className="bestsellers__description">
                                <h1>{bestseller.title}</h1>
                                <h2>{bestseller.price}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Bestsellers;
