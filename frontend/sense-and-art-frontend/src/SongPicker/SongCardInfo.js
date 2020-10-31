import React from 'react';
import { Popover } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import SelectSongButton from './SelectSongButton';

class SongCardInfo extends React.Component {
    render() {
        console.log("songSelectEnaled: " + this.props.songSelectEnabled);
        let selectButton = null;
        if (this.props.songSelectEnabled) {
            selectButton = <SelectSongButton className="song-select-button" {...this.props}/>
        }
        return (
            <div className="song-card">
                {/* {this.props.songSelectEnalbed ? <SelectSongButton className="song-select-button" {...this.props}/> : null}; */}
                {selectButton}
                <span className="song-title">{this.props.title}</span>
                <span className="song-composer">{' | ' + this.props.composer}</span>
                <span className="song-instrument">{' | ' + this.props.instrument}</span>
                <Popover content={this.props.contributor} ><InfoCircleOutlined id="description-popup"/></Popover>
            </div>
        )
    }
}

export default SongCardInfo;