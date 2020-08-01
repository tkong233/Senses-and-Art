import React from 'react';
import './ImageGuide.css';

class ImageGuide extends React.Component {
    render() {
        return (
            <div className="Guide-box">
                <p> This of a place you would love to visit. </p>
                <p> It could be a real place or an imaginary place or one you've heard of but never seen. </p>
                <p> Or choose a piece of art that speaks to you. </p>
            </div>
        );
    }
}

export default ImageGuide;