import React from "react";
import data from "../../../../data/data.json";

function TrendsAndNews() {
    const trend = data.trends.trendsNewsletter;
    return (
        <div className="trendsNews__container">
            <div className="trendsNews__background"></div>
            <div className="trends__imageContainer trendsNews__container-1">
                <img src={`${trend.trend.url}.jpg`} alt="seats" />
                <div className="trendsNews__underTitle">
                    <h1>{trend.trend.description}</h1>
                    <a className="link--carpo link">See now</a>
                </div>
            </div>
            <div className="trends__imageContainer trendsNews__container-2">
                <img src={`${trend.newsletter.url}.jpg`} alt="seats" />
                <div className="trendsNews__newsletterDescrition">
                    <h1>{trend.newsletter.description}</h1>
                    <form className="subscription">
                        <input
                            className="add-email"
                            type="email"
                            placeholder="subscribe@me.now"
                        />
                        <button className="submit-email" type="button">
                            <span className="before-submit">Subscribe</span>
                        </button>
                        <hr/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TrendsAndNews;
