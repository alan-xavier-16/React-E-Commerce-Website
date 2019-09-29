import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  /* Stripe requires the price in cents */
  const priceForStripe = price * 100;
  /* Publishable key from Stripe API */
  const publishableKey = "pk_test_U8veQPdZ6V9zmRR9qgl9eIi600qmYXbcLO";

  /* Token handles the payment. The token is passed to the backend to create the charge */
  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
