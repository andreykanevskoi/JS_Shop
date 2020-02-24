import React, { Component } from 'react';
import {
  Layout, Header, Navigation, Drawer,
  Content, Button, Box, Dialog, DialogActions,
  DialogTitle, DialogContent, Textfield, Chip
} from 'react-mdl';

import 'react-mdl/extra/material';
import 'react-mdl/extra/material.css';

import UserTitle from './UserTitle';
import Table from './Table';
import SignInDialog from './SignInDialog';
import SignUpDialog from './SignUpDialog';

const ReactDOM = require('react-dom');

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      user: "guest",
      email: "",
      pw: "",
      btnSignInActionName: "Войти",
      openSignInDialog: false,
    };

    this.handleSendAuthRequest = this.handleSendAuthRequest.bind(this);

    this.handlePasswordTextfieldChange = this.handlePasswordTextfieldChange.bind(this);
    this.handleEmailTextfieldChange = this.handleEmailTextfieldChange.bind(this);

    this.handleNewPasswordTextfieldChange = this.handleNewPasswordTextfieldChange.bind(this);
    this.handleNewEmailTextfieldChange = this.handleNewEmailTextfieldChange.bind(this);

    this.handleopenSignInDialog = this.handleopenSignInDialog.bind(this);
    this.handleCloseSignInDialog = this.handleCloseSignInDialog.bind(this);

    this.handleOpenSignUpDialog = this.handleOpenSignUpDialog.bind(this);
    this.handleCloseSignUpDialog = this.handleCloseSignUpDialog.bind(this);

    this.handlebtnSignInAction = this.handlebtnSignInAction.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  handleopenSignInDialog() {
    this.setState({
      openSignInDialog: true
    });
  }

  handleCloseSignInDialog() {
    this.setState({
      openSignInDialog: false
    });
  }

  handleOpenSignUpDialog() {
    this.setState({
      openSignUpDialog: true
    });
  }

  handleCloseSignUpDialog() {
    this.setState({
      openSignUpDialog: false
    });
  }

  handleEmailTextfieldChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordTextfieldChange(event) {
    this.setState({ pw: event.target.value });
  }

  handleNewEmailTextfieldChange(event) {
    this.setState({ newEmail: event.target.value });
  }

  handleNewPasswordTextfieldChange(event) {
    this.setState({ newPw: event.target.value });
  }

  handleSendAuthRequest() {
    const txtEmail = this.state.email;
    const txtPw = this.state.pw;
    const data = { email: txtEmail, password: txtPw };
    fetch('api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(
        (result) => {
          if (result.status)
            this.setState({ user: txtEmail, openSignInDialog: false, isLogin: true, btnSignInActionName: 'Выйти' });
          else
            alert(result.msg);
        },
        (err) => {
          alert('Error!');
        });
  }

  handlebtnSignInAction() {
    if (this.state.isLogin)
      this.setState({
        isLogin: false,
        user: "guest",
        btnSignInActionName: "Войти"
      })
    else
      this.handleopenSignInDialog();
  }

  handleRegistration() {
    const txtEmail = this.state.newEmail;
    const txtPw = this.state.newPw;
    const data = { email: txtEmail, pw: txtPw };
    fetch('api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(
        (result) => {
          if (result.status) {
            alert(`Success! Your id is ${result.id}`);
            this.handleCloseSignUpDialog();
          }
          else
            alert('Oops...! User exists!');
        },
        (err) => {
          alert('Error!');
        });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.email !== nextState.email) {
      return false;
    }
    if (this.state.pw !== nextState.pw) {
      return false;
    }
    if (this.state.newEmail !== nextState.newEmail) {
      return false;
    }
    if (this.state.newPw !== nextState.newPw) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Мой магазин" waterfall>
            <Navigation>
              <UserTitle value={this.state.user} />
              <div>
                <Button colored onClick={this.handlebtnSignInAction} raised ripple>{this.state.btnSignInActionName}</Button>
                <SignInDialog
                  openSignInDialog={this.state.openSignInDialog}
                  handleEmailTextfieldChange={this.handleEmailTextfieldChange}
                  handlePasswordTextfieldChange={this.handlePasswordTextfieldChange}
                  handleSendAuthRequest={this.handleSendAuthRequest}
                  handleOpenSignUpDialog={this.handleOpenSignUpDialog}
                  handleCloseSignInDialog={this.handleCloseSignInDialog}
                />
                <SignUpDialog
                  openSignUpDialog={this.state.openSignUpDialog}
                  handleNewEmailTextfieldChange={this.handleNewEmailTextfieldChange}
                  handleNewPasswordTextfieldChange={this.handleNewPasswordTextfieldChange}
                  handleCloseSignUpDialog={this.handleCloseSignUpDialog}
                  handleRegistration={this.handleRegistration}
                />
              </div>
            </Navigation>
          </Header>
          <Content>
            <div style={{ display: 'inline-block', width: '50%', height: '100%', overflowY: 'scroll' }}>
              <Table />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}
