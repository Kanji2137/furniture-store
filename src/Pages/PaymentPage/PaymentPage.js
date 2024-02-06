import React from 'react';
import CardDetails from "./CardDetails/CardDetails";
import DeliveryAddress from "./DeliveryAdress/DeliveryAddress";

function PaymentPage() {
  return (
      <section className="paymentPage">
        <div className="paymentPage__container">
          <form>
            <DeliveryAddress/>
            <CardDetails/>
            <button className="button button--hyperion paymentPage__button" type="button">
              <span>
                <span>proceed</span>
              </span>
            </button>
          </form>
        </div>
      </section>
  )
}

export default PaymentPage;