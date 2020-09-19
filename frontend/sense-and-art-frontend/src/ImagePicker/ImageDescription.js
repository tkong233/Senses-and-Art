import React from 'react';
import { Popover} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './ImageDescription.css';

class ImageDescription extends React.Component {
    render() {
        let date = this.props.date ? this.props.date : "dates unknown";
        let contributor = "contributed by " + this.props.contributor;

        return(
            <div>
                <p className="description-text">{this.props.artist + " (" + date + ")"}</p>
                <Popover className="description-popup" content={contributor} ><InfoCircleOutlined /></Popover>
            </div>
        );
    }
}

export default ImageDescription;