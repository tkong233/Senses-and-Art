import React from 'react';
import { Pagination } from 'antd';

import SongCard from './SongCard';

class SongCardList extends React.Component {
    state = {
        currentPage: 1
    }

    render() {
        const songs = this.props.songs;
        const { id, title, performer, composer, instrument, contributor, song_path } = this.props.songs;
        const totalSongs = songs.length;
        const pageSize = 5;
        const onChange = page => {
            console.log(page);
            this.setState({
              currentPage: page,
            });
          };

        return (
            <div>
                {songs.map((song) => <SongCard 
                                            title={song.title}
                                            composer={song.composer}
                                            instrument={song.instrument}
                                            song_path={song.song_path}
                                        />
                ).slice((this.state.currentPage - 1) * pageSize, this.state.currentPage * pageSize)}
                <Pagination className="pagination-bar"
                            defaultCurrent={1}
                            pageSize={pageSize}
                            total={totalSongs}
                            onChange={onChange} />
            </div>

        )
    }
}

export default SongCardList;