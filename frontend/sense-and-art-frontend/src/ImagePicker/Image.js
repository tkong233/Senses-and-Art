import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ImageDescription from './ImageDescription';
import './Image.css'

const { Meta } = Card;

class Image extends React.Component {
    render() {
        
        let id = this.props.id;
        let title = this.props.title;
        let image_path = this.props.image_path;
        let imageCard = 
            <Card className="images"
                cover={
                    <img alt={title}
                        src={image_path}
                />}
            >
                <Meta title={title}
                      description={<ImageDescription {...this.props}/>}
                />
            </Card>

        return (
            this.props.imageSelectEnabled ? <Link to={`/${id}`}> {imageCard} </Link> : <div>{imageCard}</div>
        )
    }
}



export default Image; 