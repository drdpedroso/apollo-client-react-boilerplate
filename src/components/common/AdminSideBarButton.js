import React from 'react';

class AdminSideBarButton extends React.Component {
	
	render(){
		return(
	      <div style={styles.adminSidebarItemView}>
	        <span style={styles.adminSidebarItemText}>
	    	    {this.props.text}
	        </span>
	      </div>
      )
	};
}

const styles = {
	adminSidebarItemView : {
        display: 'flex',
	    backgroundColor:`#272525`,
	    width: 150,
	    minHeight: 70,
	    justifyContent: 'center',
	    alignItems: 'center',
	    borderBottomWidth: 1,
	    borderBottomColor: `#C3C3C3`,
	    padding: 20,
        marginTop: 1
	},	
	adminSidebarItemText : {
	    textAlign: 'center',
	    color: `#ffffff`,
	    fontWeight: 'bold',
	    fontSize: 15,
	    letterSpacing: 1
	},
	adminSidebarItemViewActive : {
		backgroundColor: `#FCD500`
	},
	adminSidebarItemTextActive : {
	    color: `#272525`
	},
	adminSidebarItemHover : {
	    cursor: 'pointer'
	},
	anchor : {
	    cursor: 'default',
	    color: 'transparent',
	    textDecorationLine: 'none'
	}
};

export default AdminSideBarButton;