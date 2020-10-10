import React from 'react';

class Line extends React.Component {
    render() {
        let height = this.props.height;
        let color = this.props.color;
        let style = {
            width: '100%',
            height: height,
            backgroundColor: color
        };

        return (
            <div style={style}></div>
        );
    }
}

export default Line;