import React from 'react';
import SongCard from '../SongPicker/SongCard';
import Image from '../ImagePicker/Image';
import './MeditationPage.css'

class MeditationPage extends React.Component {
    render() {
        return (
            <div className="page">
                <Image {...this.props.image}/>
                <SongCard {...this.props.song}/>
            </div>
        )
    }
}

export default MeditationPage;