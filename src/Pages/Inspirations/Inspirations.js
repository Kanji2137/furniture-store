import React from 'react';
import data from '../../data/data.json';

const inspirationsData = data.inspirationsData;
const Inspirations = () => {
  return (
      <div className="inspirationPage">
        {inspirationsData.map((inspiration) => (
            <div>
              <div className="inspirationPage__wrapper section">
                <h3 className="inspiration-title">{inspiration.title}</h3>
                <p className="inspiration-description">{inspiration.description}</p>
              </div>
              <img alt="furniture inspiration" src={inspiration.image}/>
            </div>
        ))}
      </div>
  );
};

export default Inspirations;
