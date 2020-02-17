import React, { Component } from 'react';
import {
    Layout, Header, Navigation, Drawer,
    Content, Button, Dialog, DialogActions,
    DialogTitle, DialogContent, Textfield, Chip
} from 'react-mdl';

import 'react-mdl/extra/material';
import 'react-mdl/extra/material.css';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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

    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header title="Мой магазин" waterfall>
                        <Navigation>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <p>Гость</p>
                            </div>
                            <div>
                                <Button colored onClick={this.handleOpenDialog} onBlur={this.handleCloseDialog}  raised ripple>Войти</Button>
                                <Dialog open={this.state.openDialog}>
                                    <DialogTitle>Вход</DialogTitle>
                                    <DialogContent>
                                        <div>
                                            <Textfield
                                                onChange={() => { }}
                                                label=""
                                                style={{ width: '230px' }}
                                            />
                                        </div>
                                        <div>
                                            <Textfield
                                                onChange={() => { }}
                                                label=""
                                                style={{ width: '230px' }}
                                            />
                                        </div>
                                    </DialogContent>
                                    <DialogActions fullWidth>
                                        <Button raised accent ripple style={{marginBottom: '5px', textAlign: 'center'}}>Войти</Button>
                                        <Button raised accent ripple style={{marginBottom: '5px', textAlign: 'center'}}>Зарегистрироваться</Button>
                                        <Button ripple style={{textAlign: 'center'}} onClick={this.handleCloseDialog}>Закрыть</Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </Navigation>
                    </Header>
                    <Content>
                        <div id='table' className="root" />
                    </Content>
                </Layout>
            </div>
        );
    }
}
