import React, { Component } from 'react';
import {
  Layout, Header, Navigation, Drawer,
  Content, Button, Dialog, DialogActions,
  DialogTitle, DialogContent, Textfield, Chip
} from 'react-mdl';

function SignUpDialog(props) {
  return (
    <Dialog open={props.openSignInDialog}>
      <DialogTitle>Вход</DialogTitle>
      <DialogContent>
        <div>
          <Textfield
            id="txtEmail"
            onChange={props.handleEmailTextfieldChange}
            label=""
            style={{ width: '230px' }}
          />
        </div>
        <div>
          <Textfield
            id="txtPassword"
            onChange={props.handlePasswordTextfieldChange}
            label=""
            style={{ width: '230px' }}
          />
        </div>
      </DialogContent>
      <DialogActions fullWidth>
        <Button
          colored
          raised
          ripple
          style={{ marginBottom: '5px', textAlign: 'center' }}
          onClick={props.handleSendAuthRequest}
        > Войти </Button>

        <Button 
          colored 
          raised 
          ripple 
          style={{ marginBottom: '5px', textAlign: 'center' }} 
          onClick={props.handleOpenSignUpDialog}
        > Зарегистрироваться </Button>

        <Button 
          ripple 
          style={{ textAlign: 'center' }} 
          onClick={props.handlecloseSignInDialog}
        > Закрыть </Button>
              </DialogActions>
    </Dialog>
  )
}
