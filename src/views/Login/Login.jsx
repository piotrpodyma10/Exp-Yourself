import React from 'react';
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { DialogContent, Link } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    const isFormFilled = this.state.username.length > 0 && this.state.password.length > 0
    return (
      <div className={`login ${isFormFilled && 'test'}`}>
        <div className="login-panel">
          <div className="login-panel-container">
            <TextField className="text-field" id="filled-basic" label="Username" variant="filled" onChange={(event) => this.setState({ username: event.target.value })} />
            <TextField className="text-field" id="filled-basic" label="Password" variant="filled" type="password" onChange={(event) => this.setState({ password: event.target.value })} />
            <IconButton className={`icon-disabled ${isFormFilled && 'icon-forward'}`} disabled={!isFormFilled} onClick={this.logIn}>
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }

  logIn = () => {
    // const history = useHistory();
    // history.push("/my-profile");
    this.props.history.push('/my-profile')
    console.log('US', this.state.username);
    console.log('PS', this.state.password)

  }
}

export default withRouter(Login);