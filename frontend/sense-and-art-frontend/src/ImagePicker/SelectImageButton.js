import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './SelectImageButton.css';

class SelectImageButton extends React.Component {
    render() {
        let imageId = this.props.match.params.imageId;
        console.log('selected image: ' + imageId);

        return(
            <Link to={'/songs'}>
                <Button onClick={() => this.props.onClickSelectImageButton(imageId)}
                        className="select-image-button" type="default">Select</Button>
            </Link>
        );
    }
}

export default SelectImageButton;