import React from 'react';

import './ZoomedImage.css';

class ZoomedImage extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        let images = this.props.images;
        let imageId = this.props.match.params.imageId;

        return (
            <img className="zoomed-image" src={images[imageId].image} alt="zoomed image"></img>
            
        );
    }
}

export default ZoomedImage;