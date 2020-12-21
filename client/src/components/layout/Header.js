import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from '../Payments';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            //action.payload contains user model, either an object or empty string. empty string is a false value
            case null:
                return <li>Loading...</li>
            case false:
                return <li><a href='/auth/google'>Login With Google</a></li>;
            default:
                return [
                    <li key='1'><Payments /></li>,
                    <li key='2' style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
                    <li key='3'><a href='/api/logout'>Logout</a></li>
                ]
        }
    }

    render() {

        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                        style={{ marginLeft: '5px' }}>
                        Survey Sends
                    </Link>
                    <ul id="nav-mobile" className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

//connects component to redux - this.props.auth
function mapStateToProps({ auth }) {
    return { auth: auth }
}

export default connect(mapStateToProps)(Header);