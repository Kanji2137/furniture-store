import React from 'react';

function CardDetails() {
  return (
      <div className="cardDetails">
        <h3 className="paymentPage__title">Credit Card Details</h3>
        <div className="cardDetails__container">
          <div className="cardDetails__cardHolder">
            <label className="paymentPage__label" htmlFor="card-holder">Card Holder</label>
            <input className="paymentPage__input" type="text" maxLength={50} placeholder="Card Holder" aria-label="Card Holder"/>
          </div>
          <div className="cardDetails__expirationDate">
            <label className="paymentPage__label" htmlFor="">Expiration Date</label>
            <div className="cardDetails__expirationDate-container">
              <input className="paymentPage__input" type="text" maxLength={2} placeholder="MM" aria-label="MM"/>
              <span className="cardDetails__date-separator">/</span>
              <input className="paymentPage__input" type="text" maxLength={2} placeholder="YY" aria-label="YY"/>
            </div>
          </div>
          <div className="cardDetails__cardNumber">
            <label className="paymentPage__label" htmlFor="card-number">Card Number</label>
            <input className="paymentPage__input" id="card-number" maxLength={16} type="text" placeholder="Card Number" aria-label="Card Holder"/>
          </div>
          <div className="cardDetails__cardCvc">
            <label className="paymentPage__label" htmlFor="cvc">CVC</label>
            <input className="paymentPage__input" id="cvc" maxLength={3} type="text" placeholder="CVC" aria-label="Card Holder"/>
          </div>
        </div>
      </div>
  );
}

export default CardDetails;