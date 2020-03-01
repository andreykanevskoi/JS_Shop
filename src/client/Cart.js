import React, { Component } from 'react';
import { DataTable, TableHeader } from 'react-mdl';

import 'react-mdl/extra/material';
import 'react-mdl/extra/material.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
    
  }

  componentDidMount() {
    const { user_id } = this.props;
    if (user_id >= 0) {
      fetch('api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: user_id})
      })
      .then(res => res.json())
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
  }

  render() {
    var productsState = this.state;
    var data = productsState.products;
    
    return (
      <DataTable
        selectable
        shadow={0}
        rows={data}
        style={{ width: '90%' }}
        rowKeyColumn='PRODUCT_ID'
      >
        <TableHeader numeric name="PRODUCT_ID" tooltip="Артикул">
          PRODUCT_ID
          </TableHeader>
        <TableHeader name="PRODUCT_NAME" tooltip="Название товара">
          PRODUCT_NAME
          </TableHeader>
        <TableHeader name="PRODUCT_DESC" tooltip="Описание товара">
          PRODUCT_DESC
          </TableHeader>
      </DataTable>
    );
  }
}
