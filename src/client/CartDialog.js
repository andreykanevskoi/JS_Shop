import React, { Component } from 'react';
import {
  DataTable, TableHeader, Button, Dialog, DialogActions,
  DialogTitle, DialogContent, Textfield
} from 'react-mdl';

import 'react-mdl/extra/material';
import 'react-mdl/extra/material.css';

export default class CartDialog extends Component {
  constructor(props) {
    super(props);
    this.user_id = props.user_id;
    this.state = {
      products: [],
    };

  }

  componentDidUpdate(prevProps) {
    if (this.props.user_id !== prevProps.user_id) {
      this.state.user_id = this.props.user_id;
      if (this.state.user_id >= 0) {
        fetch('api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: this.state.user_id })
        })
          .then(res => res.json())
          .then((result) => {
            this.setState({ products: result.products });
          })
          .catch((err) => {
            this.setState({ products: null, status: false, error: err });
          });
      }
    }
  }

  render() {
    var { products } = this.state;

    return (
      <Dialog open={this.props.openCartDialog} style={{width: '50%'}}>
        <DialogTitle component="h1">Корзина</DialogTitle>
        <DialogContent>
          <DataTable
            selectable
            shadow={0}
            rows={products}
            style={{ width: '90%' }}
            rowKeyColumn='PRODUCT_ID'
          >
            <TableHeader style={{ width: '10%' }} numeric name="PRODUCT_ID" tooltip="Артикул">
              ID
          </TableHeader>
            <TableHeader style={{ width: '20%' }} name="PRODUCT_NAME" tooltip="Название товара">
              NAME
          </TableHeader>
            <TableHeader style={{ width: '60%' }} name="PRODUCT_DESC" tooltip="Описание товара">
              DESCRIPTION
          </TableHeader>
            <TableHeader style={{ width: '10%' }} name="PRODUCT_AMOUNT" tooltip="Количество товара">
              AMOUNT
          </TableHeader>
          </DataTable>
        </DialogContent>
        <DialogActions>
          <Button ripple style={{ textAlign: 'center' }}>Удалить</Button>
          <Button ripple style={{ textAlign: 'center' }}>Оформить заказ</Button>

          <Button
            ripple
            style={{ textAlign: 'center' }}
            onClick={this.props.handleCloseCartDialog}
          >
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>

    );
  }
}
