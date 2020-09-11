import React from 'react';
import SongPlayer from './SongPlayer';
import { Card } from 'antd';

class SongCard extends React.Component {
    render() {
        const { title, composer, instrument, song_path } = this.props;
        return (
            <Card title={title}>
                <SongPlayer song_path={song_path}/>
            </Card>        
        );
    }
}

export default SongCard;