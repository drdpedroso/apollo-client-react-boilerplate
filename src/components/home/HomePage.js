import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class HomePage extends React.Component {

    constructor(props, context){
        super(props, context);

        this.props.data.variables.skip = 0;

        this.state = {
            initial: 0
        };

        this.last = this.last.bind(this);
        this.next = this.next.bind(this);
    }

    render() {
        const costumers = this.props;

        return(
            <div className="jumbotron">
                <h1>Apollo Client BoilerPlate</h1>
                {
                    costumers.data.allCustomer.map(c =>
                        <div key={c.createdDate}>{c.firstName} / {c.createdDate}</div>
                    )
                }
                <button onClick={this.last}>Last</button>
                <button onClick={this.next}>Next</button>
            </div>
        );
    }

    next(){
        let initial = this.state.initial + 10;
        this.setState({initial : initial});  
        this.props.data.variables.skip = initial;
        this.props.data.refetch();
    }

    last(){
        console.log('last');
    }
}

const Query = gql`query getAllCostumer($skip: Int, $first: Int) {
  allCustomer(skip: $skip, first: $first) {
    firstName,
    lastName,
    email,
    createdDate
  }
}`;

export default graphql(Query, {
    options: ({ skip }) => ({ variables: { skip, first: 10 } }),
  })(HomePage);