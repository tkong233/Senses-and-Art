import React from 'react';
import SongCard from '../SongPicker/SongCard';
import Image from '../ImagePicker/Image';
import { Button } from 'antd';
import './MeditationPage.css'

class MeditationPage extends React.Component {
    render() {
        return (
            <div className="page">
                <div className='image-div'>
                    <Image {...this.props.image}/>
                </div>
                
                <div className='song-div'>
                    <SongCard songSelectEnabled={false}
                            {...this.props.song}/>
                </div>

                <div className='button-div'>
                    <Button id='button' href='/map'>
                        Next
                    </Button>
                </div>
            </div>
        )
    }
}

export default MeditationPage;