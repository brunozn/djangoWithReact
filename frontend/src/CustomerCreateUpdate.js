import React, { Component } from 'react';
import CustomersService from './CustomersService';

const customersService = new CustomersService();

class CustomerCreateUpdate extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    if (params && params.pk) {
      customersService.getCustomer(params.pk).then((c) => {
        this.refs.firstName.value = c.first_name;
        this.refs.lastName.value = c.last_name;
        this.refs.email.value = c.email;
        this.refs.phone.value = c.phone;
        this.refs.address.value = c.address;
        this.refs.description.value = c.description;
      });
    }
  }

  handleCreate() {
    customersService
      .createCustomer({
        first_name: this.refs.firstName.value,
        last_name: this.refs.lastName.value,
        email: this.refs.email.value,
        phone: this.refs.phone.value,
        address: this.refs.address.value,
        description: this.refs.description.value,
      })
      .then((result) => {
        alert('Cliente Criado!');
      })
      .catch(() => {
        alert('Error! Verifique as informações');
      });
  }
  handleUpdate(pk) {
    customersService
      .updateCustomer({
        pk: pk,
        first_name: this.refs.firstName.value,
        last_name: this.refs.lastName.value,
        email: this.refs.email.value,
        phone: this.refs.phone.value,
        address: this.refs.address.value,
        description: this.refs.description.value,
      })
      .then((result) => {
        console.log(result);
        alert('Cliente atualizado!');
      })
      .catch(() => {
        alert('Error! Por favor, verifique os dados.');
      });
  }
  handleSubmit(event) {
    const {
      match: { params },
    } = this.props;

    if (params && params.pk) {
      this.handleUpdate(params.pk);
    } else {
      this.handleCreate();
    }

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input className="form-control" type="text" ref="firstName" />

          <label>Sobrenome:</label>
          <input className="form-control" type="text" ref="lastName" />

          <label>Telefone:</label>
          <input className="form-control" type="text" ref="phone" />

          <label>Email:</label>
          <input className="form-control" type="text" ref="email" />

          <label>Endereço:</label>
          <input className="form-control" type="text" ref="address" />

          <label>Descrição:</label>
          <textarea className="form-control" ref="description"></textarea>

          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default CustomerCreateUpdate;
