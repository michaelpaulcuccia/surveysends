import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Still deciding...'
            case false:
                return 'Logged Out'
            default:
                return 'Logged In'
        }
    }

    render() {

        //console.log(this.props)

        return (
            <nav>
                <div className="nav-wrapper">
                    <a href='/' className="left brand-logo" style={{ marginLeft: '5px' }}>SurverySends</a>
                    <ul id="nav-mobile" className="right">
                        {this.renderContent()}
                        {/* <li>
                            <a href='/'>Login With Google</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth: auth }
}

export default connect(mapStateToProps)(Header);