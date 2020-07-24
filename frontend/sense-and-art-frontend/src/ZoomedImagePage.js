import React from 'react';
import ZoomedImage from "./ZoomedImage";
import CloseButton from "./CloseButton";

class ZoomedImagePage extends React.Component {
    render() {
        return (
            <div>
                <CloseButton/>
                <ZoomedImage {...this.props}/>
            </div>
        );
    }
}

export default ZoomedImagePage;