import React from 'react'
import { MapContainer, Marker, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./map.css"
import { Hospital } from 'lucide-react'
import { Icon } from 'leaflet'



export const Map = () => {
    const customIcon = new Icon({
        iconUrl:"https://cdn-icons-png.flaticon.com/512/5448/5448379.png",
        iconSize:[40, 40]
    })
  return (
  <MapContainer center={[36.48362, 2.7959]} zoom={13}>
   <TileLayer 
     url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
   /> 
   <Marker position={[36.48362, 2.7959]} icon={customIcon}></Marker>
  </MapContainer>
  )
}
