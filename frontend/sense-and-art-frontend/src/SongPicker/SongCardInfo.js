import React from 'react';
import { Button } from 'antd';

class SongCardInfo extends React.Component {
    render() {
        return (
            <div className="song-card">
                <Button className="song-select-button" type="default">Select</Button>
                <span>{this.props.composer}</span>
                <span className="song-instrument">{' | ' + this.props.instrument}</span>
            </div>
        )
    }
}

export default SongCardInfo;