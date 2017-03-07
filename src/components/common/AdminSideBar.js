import React from 'react';
import AdminSideBarButton from './AdminSideBarButton'

class AdminSideBar extends React.Component {
	render(){
		return(
			<div style={styles.adminSidebarView}>
				{this.props.items.map((data, key) => {
					let text = data.text || data
					return (
						<AdminSideBarButton key={key} 
											active={data.active} 
											text={text}
											onClick={this.props.onClick} />
					)
				})}
			</div>
		);
	};
}

const styles = {
  adminSidebarView: {
    flexDirection: 'column'
  }
};

export default AdminSideBar;