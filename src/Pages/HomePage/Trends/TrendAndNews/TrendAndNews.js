import React from "react";
import data from '../../../../data/data.json'


function TrendsAndNews () {
    const trend = data.trends.trendsNewsletter;
    return (
        <div className="trendsNews__container">
            <div className="trends__imageContainer trendsNews__container-1">
                <img src={trend.trend.url} alt="seats"/>
                <div className="trends__underTitle">
                    <h1>{trend.trend.description}</h1>
                    <a className="link--carpo link">See now</a>
                </div>
            </div>
            <div className="trends__imageContainer trendsNews__container-2">
                <img src={trend.newsletter.url} alt="seats"/>
                <div className="trendsNews__newsletterDescrition">
                    <h1>{trend.newsletter.description}</h1>
                    <a className="link--carpo link">See now</a>
                </div>
            </div>
        </div>
    );
}

  export default TrendsAndNews;