import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = (props) => {
  let leftStyle = [styles.adminHeaderViewMainLeft]
  let centerStyle = [styles.adminHeaderViewMainCenter]
  let rightStyle = [styles.adminHeaderViewMainRight]

  if (props.leftStyle) leftStyle.push(props.leftStyle)
  if (props.centerStyle) centerStyle.push(props.centerStyle)
  if (props.rightStyle) rightStyle.push(props.rightStyle)
  
  return (
    <div style={styles.container}>
      <div style={styles.adminHeaderSidebarContainer}>
        <div style={styles.adminHeaderSidebarButton}>
          <img style={styles.adminHeaderSidebarLogoImage} source={props.logoSource} />
        </div>
      </div>
      <div style={styles.adminHeaderViewMain}>
        {(function () {
          if (props.left) {
            return (
              <div style={leftStyle}>
                {props.left}
              </div>
            )
          }
        }())}
        <div style={styles.centerStyle}>
          {(function () {
            if (props.center) return props.center
            if (props.centerText) return <span style={styles.text}>{props.centerText.toUpperCase()}</span>
          }())}
        </div>
        {(function () {
          if (props.right) {
            return (
              <div style={rightStyle}>
                {props.right}
              </div>
            )
          }
        }())}
      </div>
    </div>
  )
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  adminHeaderSidebarButton: {
           display: 'flex',
	    backgroundColor:`#272525`,
	    width: 150,
	    minHeight: 70,
	    justifyContent: 'center',
	    alignItems: 'center',
	    borderBottomWidth: 1,
	    borderBottomColor: `#C3C3C3`,
	    padding: 20,
        marginTop: 1,
    height: 85,
    flexGrow: 0
  },
  adminHeaderSidebarLogoImage: {
    height: 85,
    width: 85
  },
  adminHeaderSidebarContainer: {
    flex: 1,
    flexBasis: 'content'
  },
  adminHeaderViewMain: {
    flexDirection: 'row',
    backgroundColor: `#ffffff`,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: `#ffffff`
  },
  adminHeaderViewMainLeft: {
    flex: 1,
    flexGrow: 1
  },
  adminHeaderViewMainCenter: {
    flexGrow: 2,
    justifyContent: 'center'
  },
  adminHeaderViewMainRight: {
    flexGrow: 1
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
}

export default Header;