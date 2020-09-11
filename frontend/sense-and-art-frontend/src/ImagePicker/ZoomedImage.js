import React from 'react';

import './ZoomedImage.css';

class ZoomedImage extends React.Component {
    render() {
        let images = this.props.images;
        let imageId = this.props.match.params.imageId;
        let image_path = images[imageId].image_path

        return (
            <img className="zoomed-image" src={image_path} alt="zoomed image"></img>
        );
    }
}

export default ZoomedImage;