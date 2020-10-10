import React from 'react';
import SongCard from '../SongPicker/SongCard';
import Image from '../ImagePicker/Image';

class MeditationPage extends React.Component {
    render() {
        return (
            <div>
                <SongCard {...this.props.song}/>
                <Image {...this.props.image}/>
            </div>
        )
    }
}

export default MeditationPage;