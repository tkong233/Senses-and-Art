import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Image.css'

const { Meta } = Card;

class Image extends React.Component {
    render() {
        let date = this.props.date ? this.props.date : "dates unknown";
        
        return (
                <Link to={`/${this.props.id}`}>
                    <Card className="images"
                        cover={
                            <img alt={this.props.title}
                                src={this.props.imageToDisplay}/>
                        }>
                        <Meta
                        title={this.props.title}
                        description={this.props.artist + " (" + date + ")"}
                        />
                    </Card>
                </Link>
        )
    }
}

export default Image;