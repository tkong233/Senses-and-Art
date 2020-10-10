import React from 'react';
import { Layout } from 'antd';
import './Layout.css';

class SideBar extends React.Component {
    render() {
        const { Sider } = Layout;
        return (
            <Sider id="side-bar"/>
        );
    }
}

export default SideBar;