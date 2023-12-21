import React from "react";
import data from "../../../data/data.json";
import TrendsAndNews from "./TrendAndNews/TrendAndNews";

function Trends () {
    const trends = data.trends;
    const trendsTile = (title, sub_title, url) => {
        return (
            <div className="trends__imageContainer trends__imageContainer-1">
                <div className="trends__description">
                    <h2>{title}</h2>
                    <h1>{sub_title}</h1>
                    <a className="link--carpo link">See now</a>
                </div>
                <img src={url} alt="seats"/>
            </div>
        );
      };
    return (
        <section className="trends">
            <div className="trends__container">
                {trends.trends.map(trend => {
                    return(
                        trendsTile(trend.title, trend.sub_title, trend.url)
                    );
                })}
                <TrendsAndNews/>
            </div>
        </section>
    );
}

export default Trends;