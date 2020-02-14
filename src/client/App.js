import React, { Component } from 'react';
import './app.css';
import { DataTable, TableHeader } from 'react-mdl';
// import ReactImage from "./react.png";

import 'react-mdl/extra/material';
import 'react-mdl/extra/material.css';
// import 'react-mdl/css/prism,css';

export default class App extends Component {
  state = {
    id: -1,
    email: ''
    // db_opr: '',
    // status: false
  };

  componentDidMount() {
    fetch('/users/1')
      .then(res => res.json())
      .then(user => this.setState({
        id: user.id,
        // db_opr: user.db_opr,
        // status: user.status,
        email: user.email
      }));
  }

  render() {
    const userObj = this.state;
    return (
    // <div>
      <DataTable shadow={0} rows={[{ id: userObj.id, email: userObj.email }]}>
        <TableHeader numeric name="id" tooltip="Unique user's number">
          USER_ID
        </TableHeader>
        <TableHeader name="email" tooltip="User's email">
          USER_EMAIL
        </TableHeader>
      </DataTable>
    // </div>
    );
  }
}
