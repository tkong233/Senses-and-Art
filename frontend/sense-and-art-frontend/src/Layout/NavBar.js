import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Layout.css';

class NavBar extends React.Component {
    render() {
        return (
            <Menu className="nav-bar" mode="horizontal">
                <Menu.Item id="nav-bar-item"
                           key="Map"
                           href='/map'
                           >
                    <Link id='link' to={'/map'}>
                        Map
                    </Link>
                </Menu.Item>
                <Menu.Item id="nav-bar-item" key="Research">Research</Menu.Item>
                <Menu.Item id="nav-bar-item" key="Home" href='/'>
                    <Link id='link' to={'/'}>
                        Home
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default NavBar;