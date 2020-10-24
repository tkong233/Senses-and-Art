import React from 'react';
import SongCard from '../SongPicker/SongCard';
import Image from '../ImagePicker/Image';
import { Button } from 'antd';
import './MeditationPage.css'

class MeditationPage extends React.Component {
    render() {
        return (
            <div className="page">
                <Image {...this.props.image}/>
                <SongCard songSelectEnabled={false}
                          {...this.props.song}/>
                <Button href='/map'>
                    Next
                </Button>
            </div>
        )
    }
}

export default MeditationPage;