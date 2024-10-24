import React, { useEffect, useState } from 'react';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import markerImage from './map-marker-icon-1366x2048-7u371uwd.png'

function App() {

  const [coords, setCoords] = useState({});

const dragFunc = (e) => {
  
setCoords({
  latitude:e.lngLat.lat,
  longitude:e.lngLat.lng
});

};
console.log(coords);
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiYmVuZWhta2UiLCJhIjoiY2plYTl6b3c2MHg5ODJxbGV4aXR4Z3p6YSJ9.d3jSAbsqSmpJwyVcp9iXbw"
      initialViewState={{
        longitude: '67.1060354',
        latitude: '24.906169',
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker
      onDragEnd={dragFunc}
      draggable={true}
      longitude={67.1060354} latitude={24.906169} anchor="bottom" >
      <img height={30} src={markerImage} />
    </Marker>
    </Map>
  );
}

export default App;