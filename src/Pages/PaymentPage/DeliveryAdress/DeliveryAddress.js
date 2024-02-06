import React from 'react';
import data from '../../../data/data.json'

function DeliveryAddress() {
  const items = data.formAddress;
  return (
      <div className="deliveryAddress">
        <h3 className="paymentPage__title">Delivery Address Details</h3>
        <div className="deliveryAddress__container">
          {items.map((item) => (
              <div className={item.className} id={item.id}>
                <label className="paymentPage__label" htmlFor={item.htmlFor}>{item.title}</label>
                <input className="paymentPage__input" maxLength={50} type="text" placeholder={item.placeHolder}/>
              </div>
          ))}


        </div>
      </div>
  );
}

export default DeliveryAddress;