import React from 'react';
import data from '../../data/data.json';
import img from "../../images/about.jpg";

function AboutPage () {
  const dataAbout = data.aboutPage;
  return (
      <section className="AboutPageSection">
        <div className="wrapper section">
          <div className="wrapper-inner">
            <h1>{dataAbout.title}</h1>
            <h2>{dataAbout.subTitle}</h2>
            <h1>{dataAbout.header}</h1>
            {
              dataAbout.text.map(element => {
                return (
                    <p dangerouslySetInnerHTML={{ __html: element }} />
                );
              })
            }
          </div>
        </div>
        <img alt="bikers" src={img}/>
      </section>
  );
}

export default AboutPage;