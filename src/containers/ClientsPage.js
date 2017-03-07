import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import AdminSideBar from '../components/common/AdminSideBar';
import Header from '../components/common/Header';

class ClientsPage extends React.Component {

    render(){
        return(
            <div class="full-width">
                <Header       
                    logoSource='https://dummyimage.com/85x85/c718de/ffffff'
                    leftStyle={{flexGrow: 2}}
                    centerText={'Painel De Administração · Clientes'}
                    rightStyle={{flexBasis: 'content', flexGrow: 0}}
                />
                <AdminSideBar items={[
                    {
                    text: 'Distribuidores'
                    },
                    {
                    text: 'Produtos'
                    },
                    {
                    text: 'Categorias'
                    },
                    {
                    text: 'Tabelas De Preços'
                    },
                    {
                    text: 'Pedidos'
                    },
                    {
                    text: 'Clientes',
                    active: true
                    },
                    {
                    text: 'Sair'
                    }
                ]} />
            </div>
        );
    };

}

const Query = gql`query getAllCostumer($skip: Int, $first: Int) {
  allCustomer(skip: $skip, first: $first) {
    firstName,
    lastName,
    email,
    createdDate
  }
}`;

export default graphql(Query)(ClientsPage);