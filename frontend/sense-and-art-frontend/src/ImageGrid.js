import React from 'react';
import { Row, Col} from 'antd';
import Image from './Image';
import './ImageGrid.css'

class ImageGrid extends React.Component {
    render() {
        let images = this.props.images;
        let imagesToRender = [];
        if (images) {
            var totalNumOfImages = images.length;
            for (var i = 0; i < totalNumOfImages - 1; i+=2) {
                var col1 = images[i];
                var col2 = images[i + 1];
                imagesToRender.push(
                    <Row justify="space-between" className="Row">
                        <Col className="Col" span={12}>
                            <Image id={col1.id}
                                imageToDisplay={col1.image}
                                title={col1.title}
                                artist={col1.artist}
                                date={col1.date}/>
                        </Col>
                        <Col className="Col" span={12}>
                            <Image id={col2.id}
                                imageToDisplay={col2.image}
                                title={col2.title}
                                artist={col2.artist}
                                date={col2.date}/>
                        </Col>
                    </Row>
                );
            }

            if (totalNumOfImages % 2 === 1) {
                var lastImage = images[totalNumOfImages - 1];
                imagesToRender.push(
                    <Row justify="center" className="Row">
                        <Col className="Col" span={12}>
                            <Image id={lastImage.id}
                                imageToDisplay={lastImage.image}
                                title={lastImage.title}
                                artist={lastImage.artist}
                                date={lastImage.date}/>
                        </Col>
                    </Row>
                )
            }
        }
        
        return (
            <div>
                {imagesToRender}
            </div>
            
        )
    }
}

export default ImageGrid;