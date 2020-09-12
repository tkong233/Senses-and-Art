import React from 'react';
import SongCard from './SongCard';

class SongCardList extends React.Component {
    render() {
        const songs = this.props.songs;
        // const { id, title, performer, composer, instrument, contributor, song_path } = this.props.songs;

        return (
            <div>
            {songs.map((song) => <SongCard 
                                    title={song.title}
                                    composer={song.composer}
                                    instrument={song.instrument}
                                    song_path={song.song_path}
                                />)}
            </div>

        )
    }
}

export default SongCardList;