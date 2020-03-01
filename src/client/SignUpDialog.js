import React from 'react';
import {
  Button, Dialog, DialogActions,
  DialogTitle, DialogContent, Textfield
} from 'react-mdl';

export default function SignUpDialog(props) {
  return (
    <Dialog open={props.openSignUpDialog}>
      <DialogTitle>Регистрация</DialogTitle>
      <DialogContent>
        <div>
          <Textfield
            floatingLabel
            onChange={props.handleNewEmailTextfieldChange}
            label="Новый e-mail..."
            style={{paddingTop: '50px'}}
          />
        </div>
        <div>
          <Textfield
            floatingLabel
            onChange={props.handleNewPasswordTextfieldChange}
            label="Новый пароль..."
            type='password'
            style={{paddingTop: '50px'}}
          />
        </div>
      </DialogContent>
      <DialogActions fullWidth>
        <Button colored raised ripple style={{ marginBottom: '5px', textAlign: 'center',  }} onClick={props.handleRegistration}>Зарегистрироваться</Button>
        <Button ripple style={{ textAlign: 'center' }} onClick={props.handleCloseSignUpDialog}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  )
}
