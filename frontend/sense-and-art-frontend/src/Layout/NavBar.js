import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Layout.css';

class NavBar extends React.Component {
    render() {
        return (
            <Menu className="nav-bar" mode="horizontal">
                <Menu.Item className="nav-bar-item" key="Map" href='/map'>
                    <Link to={'/map'}>
                        Map
                    </Link>
                </Menu.Item>
                <Menu.Item className="nav-bar-item" key="Research">Research</Menu.Item>
                <Menu.Item className="nav-bar-item" key="Home" href='/'>
                    <Link to={'/'}>
                        Home
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default NavBar;