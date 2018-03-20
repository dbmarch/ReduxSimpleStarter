import React, {Component} from 'react';


const API_KEY = 'AIzaSyCHpua9hCNlXdg45Nn53m8BrFxAfDT8AN0';

class GoogleMap extends Component {
    
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        //this.refs.map
        return <div ref="map" />;
    }
}


export default GoogleMap;