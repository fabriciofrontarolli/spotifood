import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { signOff } from '../modules/authentication';

import { Button } from 'react-bootstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSignOff = this.handleSignOff.bind(this);
  }

  async handleSignOff () {
    await this.props.signOffUser();
  }

  render() {
    const { authentication } = this.props;

    return (
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
          <div className="container">
            <Link className="navbar-brand" to="/">
                <img src="https://d1jgln4w9al398.cloudfront.net/site/2.1.238-20181218.39/css/images/logo.png" className="ifood-logo" />
                <h6 className="ifood-logo-text">/ SpotiFood</h6>
            </Link>
            <Button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </Button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                {
                  !authentication.isAuthenticated &&
                    <li className="nav-item">
                      <Link to="/signin" className="nav-link">Entrar</Link>
                    </li>
                }
                {
                  authentication.isAuthenticated &&
                    <li className="nav-item">
                      <Link to="/" className="nav-link">Bem-vindo(a)! </Link>
                    </li>
                }
                {
                  authentication.isAuthenticated &&
                    <li className="nav-item">
                      <Link to="/" className="nav-link" onClick={this.handleSignOff}>Sair</Link>
                    </li>
                }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication })
const mapDispatchToProps = (dispatch) => bindActionCreators({ signOffUser: signOff }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
