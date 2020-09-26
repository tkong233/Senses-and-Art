import React from 'react';
import { Button } from 'antd';
import SelectSongButton from './SelectSongButton';

class SongCardInfo extends React.Component {
    render() {
        return (
            <div className="song-card">
                {/* <Button className="song-select-button" type="default">Select</Button> */}
                <SelectSongButton className="song-select-button" {...this.props}/>
                <span className="song-title">{this.props.title}</span>
                <span className="song-composer">{' | ' + this.props.composer}</span>
                <span className="song-instrument">{' | ' + this.props.instrument}</span>
            </div>
        )
    }
}

export default SongCardInfo;