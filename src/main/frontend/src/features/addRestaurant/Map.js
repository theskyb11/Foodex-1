// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, useMap } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet-geosearch/dist/geosearch.css';
// import 'leaflet/dist/leaflet.css';
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
//
// function SearchControl({ onMarkerPositionChange }) {
//     const center = {
//         lat: 37.7749, // Default map center latitude
//         lng: -122.4194, // Default map center longitude
//     };
//
//     const map = useMap();
//
//     useEffect(() => {
//         const provider = new OpenStreetMapProvider({
//             params: {
//                 email: 'belsareneeraj@gmail.com',
//             },
//         });
//
//         const searchControl = new GeoSearchControl({
//             provider: provider,
//             style: 'bar',
//             showMarker: true,
//             showPopup: false,
//             marker: {
//                 icon: new L.Icon.Default,
//                 draggable: true,
//             },
//             popupFormat: ({ query, result }) => result.label,
//             maxMarkers: 1,
//             retainZoomLevel: false,
//             animateZoom: true,
//             autoClose: false,
//             searchLabel: 'Enter address, city, or place',
//             keepResult: true,
//         });
//
//         map.addControl(searchControl);
//
//         return () => {
//             map.removeControl(searchControl);
//         };
//     }, [map]);
//
//     return <div className="geosearch-control"></div>;
// }
//
// function Map() {
//     const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
//
//     const handleMarkerPositionChange = ({ lat, lng }) => {
//         setMarkerPosition({ lat, lng });
//     };
//
//     return (
//         <div className={'flex flex-col justify-center items-center'}>
//             <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
//                 <SearchControl/>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             </MapContainer>
//
//             <br />
//             <p className={'text-sm text-gray-400'}>Or directly enter your outlet's exact co-ordinates</p>
//             <br />
//             <div className="flex">
//                 <input
//                     type="text"
//                     // value={}
//                     onChange={() => {}}
//                     className="block w-full rounded-md border-0 px-3 py-1.5 mr-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
//                     placeholder="Latitude"
//                 />
//                 <input
//                     type="text"
//                     // value={}
//                     onChange={() => {}}
//                     className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
//                     placeholder="Longitude"
//                 />
//             </div>
//         </div>
//     );
// }
//
// export default Map;

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-geosearch/dist/geosearch.css';
import 'leaflet/dist/leaflet.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

function SearchControl({ onMarkerPositionChange }) {
    const map = useMap();
    const [searchedPosition, setSearchedPosition] = useState(null);

    useEffect(() => {
        const provider = new OpenStreetMapProvider({
            params: {
                email: 'belsareneeraj@gmail.com',
            },
        });

        const searchControl = new GeoSearchControl({
            provider: provider,
            style: 'bar',
            showMarker: false, // We don't need to show a separate marker, we'll use the Marker component instead.
            showPopup: false,

            marker: {
                icon: new L.Icon.Default(),
                draggable: true,
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

        map.on('geosearch/showlocation', (e) => {
            setSearchedPosition({ lat: e.location.y, lng: e.location.x });
            onMarkerPositionChange({ lat: e.location.y, lng: e.location.x });
        });

        return () => {
            map.removeControl(searchControl);
            map.off('geosearch/showlocation');
        };
    }, [map, onMarkerPositionChange]);

    return <div className="geosearch-control"></div>;
}

function Map() {
    const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });

    const handleMarkerPositionChange = ({ lat, lng }) => {
        setMarkerPosition({ lat, lng });
    };

    return (
        <div className={'flex flex-col justify-center items-center'}>
            <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
                <SearchControl onMarkerPositionChange={handleMarkerPositionChange} />
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {markerPosition && (
                    <Marker
                        position={[markerPosition.lat, markerPosition.lng]}
                        draggable={true}
                        eventHandlers={{
                            dragend: (e) => {
                                const marker = e.target;
                                const position = marker.getLatLng();
                                setMarkerPosition({ lat: position.lat, lng: position.lng });
                            },
                        }}
                    />
                )}
            </MapContainer>

            <br />
            <p className={'text-sm text-gray-400'}>Or directly enter your outlet's exact co-ordinates</p>
            <br />
            <div className="flex">
                <input
                    type="text"
                    value={markerPosition.lat}
                    onChange={(e) => {
                        setMarkerPosition({ ...markerPosition, lat: parseFloat(e.target.value) });
                    }}
                    className="block w-full rounded-md border-0 px-3 py-1.5 mr-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                    placeholder="Latitude"
                />
                <input
                    type="text"
                    value={markerPosition.lng}
                    onChange={(e) => {
                        setMarkerPosition({ ...markerPosition, lng: parseFloat(e.target.value) });
                    }}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                    placeholder="Longitude"
                />
            </div>
        </div>
    );
}

export default Map;
