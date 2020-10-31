import React from 'react';
import ReactMapGL from 'react-map-gl';
import MAP_STYLE from './MapPage.json';
class MapPage extends React.Component {
    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
          }
    };

    render() {
        return (
             <ReactMapGL
                {...this.state.viewport}
                width="100vw"
                height="100vh"
                // mapStyle={MAP_STYLE}
                mapStyle="mapbox://styles/mapbox/light-v9"
                // mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={viewport => this.setState({viewport})}
            />
        );
    }
}

export default MapPage;