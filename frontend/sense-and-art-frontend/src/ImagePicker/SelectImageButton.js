import React from 'react';
import { Button } from 'antd';
import './SelectImageButton.css';

class SelectImageButton extends React.Component {
    render() {
        return(
            <Button className="select-image-button" type="default">Select</Button>
        );
    }
}

export default SelectImageButton;