import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Payments = props => {

    //name = header
    //description = subheader
    //amount = cents
    //token = callback function, called after successfully retrievinig auth token from stripe api
    //stripeKey = public   

    //button child component utilizes material-css instead of built-in styles

    return (

        <div>
            <StripeCheckout
                name="Survey_Sends"
                description="$5 for 5 Credits"
                amount={500}
                token={token => props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            >
                <button className='btn'>Add Credits</button>
            </StripeCheckout>
        </div>
    )
}

export default connect(null, actions)(Payments);