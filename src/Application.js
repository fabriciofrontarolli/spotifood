import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from './components/PrivateRoute';

/* Page Components */
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";

class Application extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated } = this.props.authentication;

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={Signin} />
          <PrivateRoute isAuthenticated={isAuthenticated} path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication });

export default connect(mapStateToProps)(Application);
