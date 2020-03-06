import React, { Component } from 'react';
import {
  Layout, Header, Navigation, Content, Button, FABButton
} from 'react-mdl';

import UserTitle from './UserTitle';
import Table from './Table';
import SignInDialog from './SignInDialog';
import SignUpDialog from './SignUpDialog';
import CartDialog from './CartDialog';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      user: "guest",
      user_id: -1,
      email: "",
      pw: "",
      btnSignInActionName: "Войти",
      openSignInDialog: false,
      openCartDialog: false
    };

    this.handleSendAuthRequest = this.handleSendAuthRequest.bind(this);

    this.handlePasswordTextfieldChange = this.handlePasswordTextfieldChange.bind(this);
    this.handleEmailTextfieldChange = this.handleEmailTextfieldChange.bind(this);

    this.handleNewPasswordTextfieldChange = this.handleNewPasswordTextfieldChange.bind(this);
    this.handleNewEmailTextfieldChange = this.handleNewEmailTextfieldChange.bind(this);

    this.handleOpenSignInDialog = this.handleOpenSignInDialog.bind(this);
    this.handleCloseSignInDialog = this.handleCloseSignInDialog.bind(this);

    this.handleOpenSignUpDialog = this.handleOpenSignUpDialog.bind(this);
    this.handleCloseSignUpDialog = this.handleCloseSignUpDialog.bind(this);

    this.handleOpenCartDialog = this.handleOpenCartDialog.bind(this);
    this.handleCloseCartDialog = this.handleCloseCartDialog.bind(this);

    this.handlebtnSignInAction = this.handlebtnSignInAction.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  handleOpenCartDialog() {
    this.setState({
      openCartDialog: true
    });
  }

  handleCloseCartDialog() {
    this.setState({
      openCartDialog: false
    });
  }

  handleOpenSignInDialog() {
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
            this.setState({ user: txtEmail, user_id: result.id, openSignInDialog: false, isLogin: true, btnSignInActionName: 'Выйти' });
          else
            alert(result.msg);
        },
        () => {
          alert('Error!');
        });
  }

  handlebtnSignInAction() {
    if (this.state.isLogin)
      this.setState({
        isLogin: false,
        user: "guest",
        user_id: -1,
        btnSignInActionName: "Войти"
      })
    else
      this.handleOpenSignInDialog();
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
        () => {
          alert('Error!');
        });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.user_id !== nextState.user_id) {
      return true;
    }
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
                <FABButton ripple onClick={this.handleOpenCartDialog} disabled={!this.state.isLogin} style={{ backgroundColor: "#dff", margin: '0 20px' }} mini>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                </FABButton>
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
                <CartDialog
                  openCartDialog={this.state.openCartDialog}
                  handleOpenCartDialog={this.handleOpenCartDialog}
                  handleCloseCartDialog={this.handleCloseCartDialog}
                  user_id={this.state.user_id}
                />
              </div>
            </Navigation>
          </Header>
          <Content >
            <div style={{ width: '100%', height: '99.7%' }}>
              <div style={{ float: 'left', position: 'inline-block', width: '50%', display: 'justify', border: '1px solid black', height: '100%', overflowY: 'scroll' }}>
                <Table user_id={this.user_id} isSelectable={this.state.isLogin}/>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}
