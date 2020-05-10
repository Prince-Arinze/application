import React, { useState } from 'react';
import ReactMapGl from "react-map-gl";

export const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 9.05785,
        longitude: 7.49508,
        width: "100%",
        height: "60vh",
        zoom: 10
    })
    return (
        <div className="map" style={{ marginTop:"-15rem"}}>
            <span style={{display:"flex", alignItems: "center", justifyContent:"center"}}><h2 style={{fontSize:"36px"}}>Find Us</h2> <span style={{fontSize:"24px", marginLeft:"5rem"}}>Nigeria Military Archives | Defence Intelligence Agency HeadQuater, Abuja</span></span>
           <ReactMapGl {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} onViewportChange={viewport => setViewport(viewport) } mapStyle="mapbox://styles/cypherz/ck9wz93ht0xgo1ippknsqny50">
               marker here
           </ReactMapGl> 
        </div>
    )
}
