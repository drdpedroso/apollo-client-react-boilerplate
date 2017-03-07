import React, { PropTypes } from 'react';
import Header from './common/Header';
import AdminSideBar from './common/AdminSideBar'

class App extends React.Component {
    render(){
        return(
            <div style={{flexGrow: 0,flexBasis: 'content'}}>
                { this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;