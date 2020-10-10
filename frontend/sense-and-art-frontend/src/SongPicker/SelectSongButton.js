import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './SongPickerPage.css';

class SelectSongButton extends React.Component {
    render() {
        let songId = this.props.id;

        return(
            <Link to={'/meditation'}>
                <Button onClick={() => this.props.onClickSelectSongButton(songId)}
                        className="song-select-button"
                        type="default">
                    Select
                </Button>
            </Link>
        );
    }
}

export default SelectSongButton;