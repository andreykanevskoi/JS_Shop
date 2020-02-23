import React, { Component } from 'react';
import {
    Layout, Header, Navigation, Drawer,
    Content, Button, Dialog, DialogActions,
    DialogTitle, DialogContent, Textfield, Chip
} from 'react-mdl';

import 'react-mdl/extra/material';
import 'react-mdl/extra/material.css';
import Table from './Table'

var ReactDOM = require('react-dom');

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            user: "guest",
            email: "",
            pw: "",
            btnSignInActionName: "Войти"
        };

        this.handleSendAuthRequest = this.handleSendAuthRequest.bind(this);
        this.handlePasswordTextfieldChange = this.handlePasswordTextfieldChange.bind(this);
        this.handleEmailTextfieldChange = this.handleEmailTextfieldChange.bind(this);
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handlebtnSignInAction = this.handlebtnSignInAction.bind(this);
    }

    handleOpenDialog() {
        this.setState({
            openDialog: true
        });
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
    }

    handleEmailTextfieldChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordTextfieldChange(event) {
        this.setState({ pw: event.target.value });
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
                        this.setState({ user: txtEmail, openDialog: false, isLogin: true, btnSignInActionName: 'Выйти' });
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
            this.handleOpenDialog();
    }

    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header title="Мой магазин" waterfall>
                        <Navigation>
                            <div >
                                <p style={{ margin: '0 auto' }}>Вы вошли как <u>{this.state.user}</u></p>
                            </div>
                            <div>
                                <Button colored onClick={this.handlebtnSignInAction} raised ripple>{this.state.btnSignInActionName}</Button>
                                <Dialog open={this.state.openDialog}>
                                    <DialogTitle>Вход</DialogTitle>
                                    <DialogContent>
                                        <div>
                                            <Textfield
                                                id="txtEmail"
                                                onChange={this.handleEmailTextfieldChange}
                                                label=""
                                                style={{ width: '230px' }}
                                            />
                                        </div>
                                        <div>
                                            <Textfield
                                                id="txtPassword"
                                                onChange={this.handlePasswordTextfieldChange}
                                                label=""
                                                style={{ width: '230px' }}
                                            />
                                        </div>
                                    </DialogContent>
                                    <DialogActions fullWidth>
                                        <Button colored raised ripple style={{ marginBottom: '5px', textAlign: 'center' }} onClick={this.handleSendAuthRequest}>Войти</Button>
                                        <Button colored raised ripple style={{ marginBottom: '5px', textAlign: 'center' }}>Зарегистрироваться</Button>
                                        <Button ripple style={{ textAlign: 'center' }} onClick={this.handleCloseDialog}>Закрыть</Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </Navigation>
                    </Header>
                    <Content>
                        <Table />
                    </Content>
                </Layout>
            </div>
        );
    }
}
