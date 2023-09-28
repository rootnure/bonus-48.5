import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { googleMapAPI } from '../localstorage';
import { FaMapMarkerAlt } from 'react-icons/fa';

const AnyReactComponent = ({ text }) => text || <div className='text-blue-700 text-xl'><FaMapMarkerAlt></FaMapMarkerAlt></div>;

const SimpleMap = () => {
    const defaultProps = {
        center: {
            lat: 23.9867007,
            lng: 90.2504072
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div className='h-96 w-full md:w-8/12 mx-auto'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapAPI }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={defaultProps.center.lat}
                    lng={defaultProps.center.lng}
                    text=""
                />
            </GoogleMapReact>
        </div>
    );
}

AnyReactComponent.propTypes = {
    text: PropTypes.string
}

export default SimpleMap