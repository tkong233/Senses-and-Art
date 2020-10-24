import React from 'react';
import { Card } from 'antd';

import SongPlayer from './SongPlayer';
import SongCardInfo from './SongCardInfo';

class SongCard extends React.Component {
    render() {
        const { id, title, composer, instrument, song_path } = this.props;
        let songSelectEnabled = this.props.songSelectEnabled == null ? true : this.props.songSelectEnabled;
        return (
            <Card
                title={<SongCardInfo songSelectEnabled={songSelectEnabled}
                                    {...this.props}
                                     />}
            >
                <SongPlayer song_path={song_path}/>
            </Card>
        );
    }
}

export default SongCard;