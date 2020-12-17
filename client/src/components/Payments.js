import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payments = () => {

    //amount = cents
    //token = callback function, called after successfully retrievinig auth token from stripe api
    //name = header
    //description = header

    //button child component utilizes material-css instead of built-in styles

    return (

        <div>
            <StripeCheckout
                name="Survey_Sends"
                description="$5 for 5 Credits"
                amount={500}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            >
                <button className='btn'>Add Credits</button>
            </StripeCheckout>
        </div>
    )
}

export default Payments;