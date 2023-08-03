import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-geosearch/dist/geosearch.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

function SearchControl() {
    const map = useMap();

    React.useEffect(() => {
        const provider = new OpenStreetMapProvider({
            params: {
                email: 'belsareneeraj@gmail.com',
            },
        });
        const searchControl = new GeoSearchControl({
            provider: provider,
            style: 'bar',
            showMarker: true,
            showPopup: false,
            marker: {
                icon: new L.Icon.Default(),
                draggable: false,
            },
            popupFormat: ({ query, result }) => result.label,
            maxMarkers: 1,
            retainZoomLevel: false,
            animateZoom: true,
            autoClose: false,
            searchLabel: 'Enter address, city, or place',
            keepResult: true,
        });

        map.addControl(searchControl);

        return () => map.removeControl(searchControl);
    }, [map]);

    return null;
}

function Map() {
    return (
        <div style={{ height: '100px', width: '100%' }}>
            <MapContainer center={[0, 0]} zoom={2} style={{ height: '100px', width: '100%' }}>
                <SearchControl />
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        </div>
    );
}

export default Map;
