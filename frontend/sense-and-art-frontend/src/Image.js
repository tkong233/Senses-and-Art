import React from 'react';
import { Card } from 'antd';
import './Image.css'

const { Meta } = Card;

class Image extends React.Component {
    render() {
        return (
            <Card
                className="images"
                cover={<img alt="test" src={this.props.imageToDisplay}></img>}
            >
                <Meta
                title={this.props.title}
                description={this.props.artist + " (" + this.props.date + ")"}
                />
            </Card>
        )
    }
}

export default Image;