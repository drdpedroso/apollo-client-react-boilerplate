import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class HomePage extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>Apollo Client BoilerPlate</h1>
                {this.props.data.allCostumer}
            </div>
        );
    }
}

const Query = gql`query getAllCostumer {
  allCustomer {
    firstName,
    lastName,
    email
  }
}`;

export default graphql(Query)(HomePage);