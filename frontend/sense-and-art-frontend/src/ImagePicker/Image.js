import React from 'react';
import { Card, Popover, Button } from 'antd';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ImageDescription from './ImageDescription';
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
                                src={process.env.PUBLIC_URL + this.props.image_path}/>
                        }
                        >
                        <Meta
                        title={this.props.title}
                        description={<ImageDescription {...this.props}/>}
                        />
                    </Card>
                </Link>
        )
    }
}



export default Image;