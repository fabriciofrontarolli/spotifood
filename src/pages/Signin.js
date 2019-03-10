import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { signIn, signInSuccess } from "../modules/authentication";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { extractAccessTokenFromUrlHash } from '../utils/common';

import { Button } from 'react-bootstrap';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.handleAuthenticateSpotifood = this.handleAuthenticateSpotifood.bind(this);
    this.handleAuthenticatedUser = this.handleAuthenticatedUser.bind(this);
  }

  componentDidMount() {
    this.handleAuthenticatedUser();
  }

  handleAuthenticateSpotifood() {
    this.props.authenticate();
  }

  async handleAuthenticatedUser() {
    const isSpotifyAuthenticationCallback = !!this.props.location.hash;

    if (isSpotifyAuthenticationCallback) {
      const accessToken = extractAccessTokenFromUrlHash(this.props.location.hash);
      await this.props.signInUser(accessToken);
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className="signin-container">
        <div className="background-ifood"></div>
        <div className="background-spotify"></div>
        <div className="signin-content">
          <h3>Bem-vindo(a) ao SpotiFood</h3>
          <div className="container">
            <h4 className="welcome-heading">Entrar</h4>
            <p className="welcome-text">
              Faça o login usando sua conta SpotiFood para acessar os nosso serviços.
            </p>
            <div className="row">
              <Button
                variant="success"
                className="btn singin-button"
                onClick={this.handleAuthenticateSpotifood}>
                Entrar
                </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication });
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        authenticate: signIn,
        signInUser: signInSuccess
    }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Signin));
