import React from 'react';
import { Row, Col } from 'antd';
import Image from '../ImagePicker/Image';

class SongPickerPage extends React.Component {

    render() {
        return (
            <Row>
                <Col span={12}>
                    <Image {...this.props.image}
                           imageSlectEnabled={this.props.imageSlectEnabled}>
                    </Image>
                </Col>
                <Col span={12}>col-12</Col>
            </Row>
        )
    }
}

export default SongPickerPage;