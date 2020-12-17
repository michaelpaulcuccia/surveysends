import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payments = () => {

    //amount = cents
    //token = callback function, called after successfully retrievinig auth token from stripe api

    return (

        <div>
            <StripeCheckout
                amount={500}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            />
        </div>
    )
}

export default Payments;