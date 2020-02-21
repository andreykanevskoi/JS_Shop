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
            user: "guest"
        };
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
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


    // handleSendAuthRequest() {
    //     fetch('/api/auth', {email: ReactDOM.findDOMNode)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({ products: result.products });
    //             },
    //             (err) => {
    //                 this.setState({ products: null, status: false, error: err });
    //             });
    // }

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
                                <Button colored onClick={this.handleOpenDialog} raised ripple>Войти</Button>
                                <Dialog open={this.state.openDialog}>
                                    <DialogTitle>Вход</DialogTitle>
                                    <DialogContent>
                                        <div>
                                            <Textfield
                                                id="txtEmail"
                                                onChange={() => { }}
                                                label=""
                                                style={{ width: '230px' }}
                                            />
                                        </div>
                                        <div>
                                            <Textfield
                                                id="txtPassword"
                                                onChange={() => { }}
                                                label=""
                                                style={{ width: '230px' }}
                                            />
                                        </div>
                                    </DialogContent>
                                    <DialogActions fullWidth>
                                        <Button colored raised ripple style={{ marginBottom: '5px', textAlign: 'center' }}>Войти</Button>
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
