import React, { Component } from 'react';
import { DataTable, TableHeader } from 'react-mdl';

import 'react-mdl/extra/material';
import 'react-mdl/extra/material.css';

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then((result) => {
        this.setState({ products: result.products });
      })
      .catch((err) => {
        this.setState({ products: null, status: false, error: err });
      });
  }

  render() {
    var productsState = this.state;
    var data = productsState.products;
    data.push({
      PRODUCT_ID: 777,
      PRODUCT_NAME: 'EMPTY_NAME',
      PRODUCT_DESC: 'EMPTY_DESC'
    })

    for (var i = 0; i < 100; i++) {
      data.push({
        PRODUCT_ID: 0,
        PRODUCT_NAME: 'EMPTY_NAME',
        PRODUCT_DESC: 'EMPTY_DESC'
      })
    }

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
