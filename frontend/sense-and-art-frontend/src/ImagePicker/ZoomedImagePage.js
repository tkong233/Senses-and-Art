import React from 'react';
import ZoomedImage from "./ZoomedImage";
import CloseButton from "./CloseButton";
import SelectImageButton from "./SelectImageButton";
import '../App.css';

class ZoomedImagePage extends React.Component {
    render() {
        return (
            <div className="page">
                <SelectImageButton {...this.props}/>
                <CloseButton/>
                <ZoomedImage {...this.props}/>
            </div>
        );
    }
}

export default ZoomedImagePage;