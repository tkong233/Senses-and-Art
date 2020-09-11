import React from 'react';
import SongCard from './SongCard';

class SongCardList extends React.Component {
    render() {
        const songs = this.props.songs;
        // const { id, title, performer, composer, instrument, contributor, song_path } = this.props.songs;

        return (
            songs.map((song) => <SongCard 
                                    title={song.title}
                                    composer={song.omposer}
                                    instrument={song.instrument}
                                    song_path={song.song_path}
                                />)
        )
    }
}

export default SongCardList;