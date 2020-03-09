/*
    Файл        : client/SignInDialog.js
    Автор       : Каневской Андрей 
    Описание    : Всплывающее окно авторизации.

    2020г.
*/

import React from 'react';
import {
  Button, Dialog, DialogActions,
  DialogTitle, DialogContent, Textfield
} from 'react-mdl';

export default function SignInDialog(props) {
  return (
    <Dialog open={props.openSignInDialog}>
      <DialogTitle component="h1">Вход</DialogTitle>
      <DialogContent>
        <div style={{ verticalAlign: 'center' }}>
          <Textfield
            floatingLabel
            label="E-mail..."
            onChange={props.handleEmailTextfieldChange}
            style={{ paddingTop: '50px' }}
          />
          <Textfield
            floatingLabel
            label="Пароль..."
            onChange={props.handlePasswordTextfieldChange}
            style={{ paddingTop: '50px' }}
            type='password'
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
        >
          Войти
        </Button>

        <Button
          colored
          raised
          ripple
          style={{ marginBottom: '5px', textAlign: 'center' }}
          onClick={props.handleOpenSignUpDialog}
        >
          Зарегистрироваться
        </Button>

        <Button
          ripple
          style={{ textAlign: 'center' }}
          onClick={props.handleCloseSignInDialog}
        >
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
}
