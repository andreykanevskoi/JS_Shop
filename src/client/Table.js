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

    return (
      <DataTable
        shadow={0}
        rows={data}
        style={{ width: '99.7%' }}
        rowKeyColumn='PRODUCT_ID'
      >
        <TableHeader style={{ width: '10%'}} numeric name="PRODUCT_ID" tooltip="Артикул">
          PRODUCT_ID
          </TableHeader>
        <TableHeader style={{ width: '30%'}} name="PRODUCT_NAME" tooltip="Название товара">
          PRODUCT_NAME
          </TableHeader>
        <TableHeader style={{ width: '50%'}} name="PRODUCT_DESC" tooltip="Описание товара">
          PRODUCT_DESC
          </TableHeader>
      </DataTable>
    );
  }
}
