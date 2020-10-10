import React from 'react';
import { Layout, Menu } from 'antd';
import './Layout.css';

class NavBar extends React.Component {
    render() {
        return (
            <Menu className="nav-bar" mode="horizontal">
            <Menu.Item className="nav-bar-item" key="Community">Community</Menu.Item>
                <Menu.Item className="nav-bar-item" key="Research">Research</Menu.Item>
                <Menu.Item className="nav-bar-item" key="About">About Us</Menu.Item>
            </Menu>
        );
    }
}

export default NavBar;