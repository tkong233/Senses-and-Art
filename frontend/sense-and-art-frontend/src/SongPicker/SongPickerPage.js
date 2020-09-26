import React from 'react';
import { Row, Col } from 'antd';
import Image from '../ImagePicker/Image';
import SongCardList from './SongCardList';
import './SongPickerPage.css';

class SongPickerPage extends React.Component {

    render() {
        return (
            <div className='page'>
                <Row>
                    <Col span={12}>
                        <Image {...this.props.image}
                            imageSlectEnabled={this.props.imageSlectEnabled}>
                        </Image>
                    </Col>
                    <Col span={12}>
                        <SongCardList songs={this.props.songs}
                                      onClickSelectSongButton={this.props.onClickSelectSongButton}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SongPickerPage;