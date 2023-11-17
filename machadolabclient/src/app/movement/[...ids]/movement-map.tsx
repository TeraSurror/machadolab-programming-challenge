'use client';

import {
    MapContainer,
    Marker,
    Polyline,
    Popup,
    TileLayer,
} from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import "leaflet/dist/leaflet.css";

export default function MovementMap({
    lat1, long1, lat2, long2
}: { lat1: number, long1: number, lat2: number, long2: number }) {

    const positions: LatLngExpression[] = [
        { lat: lat1, lng: long1 },
        { lat: lat2, lng: long2 },
    ]

    const options = {
        color: '#46eb34'
    }

    return (
        <MapContainer style={{ height: '70vh', width: '50%' }} center={[lat1, long1]} zoom={5} scrollWheelZoom={false}>
            <TileLayer
                attribution='Attribution'
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[lat1, long1]}
                icon={new Icon({ iconUrl: "/marker.png", iconSize: [25, 41], iconAnchor: [12, 41] })}
            >
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Marker
                position={[lat2, long2]}
                icon={new Icon({ iconUrl: "/marker.png", iconSize: [25, 41], iconAnchor: [12, 41] })}
            >
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Polyline pathOptions={options} positions={positions} />

        </MapContainer>
    );

}