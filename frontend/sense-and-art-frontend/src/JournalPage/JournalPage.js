import React from 'react';
import { Row,Col, Form, Input, Button, Checkbox } from 'antd';
import JournalForm from './JournalForm';
import Image from '../ImagePicker/Image';
import Song from '../SongPicker/SongCard';
import './JournalPage.css';
class JournalPage extends React.Component {
    render() {
        const {song, image} = this.props;
        return (
        <Row>
            <Col span={4} className={`height-${200}`}>
            </Col>
            <Col span={8} className='left-half'>
                <Row >
                    <Col className={`image-box` } span={24}><Image className="image-box" {...image}></Image></Col>
                </Row>
                <Row >
                    <Col className={`song-box` } span={24}><Song {...song}></Song></Col>
                </Row>

            </Col>

            <Col span={11} className="journal-form">
                <Row className='blank-row'>

                </Row>
                <Row >
                    <Col span={24}><JournalForm song_id={song.id} image_id={image.id}></JournalForm></Col>
                </Row>
            </Col>
        </Row>)
    }
}

export default JournalPage;
