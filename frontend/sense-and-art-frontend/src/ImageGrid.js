import React from 'react';
import { Row, Col, } from 'antd';
import Image from './Image';
import img1 from './testImages/1.png';
import img2 from './testImages/2.png';
import img3 from './testImages/3.png';
import img4 from './testImages/4.png';
import img5 from './testImages/5.png';
import img6 from './testImages/6.png';
import img7 from './testImages/7.png';
import img8 from './testImages/8.png';

import './ImageGrid.css'

class ImageGrid extends React.Component {
    state = {
        images : [
            {
                id : 1,
                image : img1,
                title : "A Tent in the Rockies",
                artist : "John Singer Sargent",
                date : "1916"
            },
            {
                "id" : 2,
                "image" : img2,
                "title" : "El Jaleo",
                "artist" : "John Singer Sargent",
                "date" : "1882"
            },
            {
                "id" : 3,
                "image" : img3,
                "title" : "Nocturne, Blue and Silver: Battersea Reach",
                "artist" : "James McNeil Whistler",
                "date" : ""
            },
            {
                "id" : 4,
                "image" : img4,
                "title" : "YoYo Falls",
                "artist" : "John Singer Sargent",
                "date" : "1916"
            },
            {
                "id" : 5,
                "image" : img5,
                "title" : "Scenes from the Tale of Genji ",
                "artist" : "Kano Tsunenobu",
                "date" : "1677"
            },
            {
                "id" : 6,
                "image" : img6,
                "title" : "Porpoises",
                "artist" : "Charles Herbert Woodbury",
                "date" : "1916"
            },
            {
                "id" : 7,
                "image" : img7,
                "title" : "The Lido",
                "artist" : "Paul H. Tilton",
                "date" : "1894"
            },
            {
                "id" : 8,
                "image" : img8,
                "title" : "The Terrace, St. Tropez",
                "artist" : "Henri Matisse",
                "date" : "1904"
            },
        ]
    }

    render() {
        var imagesToRender = [];
        if (this.state.images) {
            var totalNumOfImages = this.state.images.length;
            for (var i = 0; i < totalNumOfImages - 1; i+=2) {
                var col1 = this.state.images[i];
                var col2 = this.state.images[i + 1];
                imagesToRender.push(
                    <Row>
                        <Col span={12}>
                            <Image imageToDisplay={col1.image}
                                title={col1.title}
                                artist={col1.artist}
                                date={col1.date}/>
                        </Col>
                        <Col span={12}>
                            <Image imageToDisplay={col2.image}
                                title={col2.title}
                                artist={col2.artist}
                                date={col2.date}/>
                        </Col>
                    </Row>);
            }

            if (totalNumOfImages % 2 === 1) {
                var lastImage = this.state.images[totalNumOfImages - 1];
                imagesToRender.push(
                    <Row>
                        <Col span={12}>
                            <Image imageToDisplay={lastImage.image}
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