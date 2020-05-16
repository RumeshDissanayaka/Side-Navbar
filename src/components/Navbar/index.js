import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useHistory } from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
const NavBar = props => {
  const history = useHistory();
  return (
    <div>
      <SideNav
        onSelect={(selected) => {
          switch (selected) {
            case 'charts':
              history.push('/charts')
              break;
            case 'home':
              history.push('/')
              break;
            default:
              break;
          }
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Home
            </NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Charts
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
export default NavBar;