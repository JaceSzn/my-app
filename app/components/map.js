
"use client";

import { useEffect } from "react";

import Map, { NavigationControl, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from '!mapbox-gl'

import classes from "../page.module.css";


mapboxgl.accessToken = 'pk.eyJ1IjoiamFjZXN6biIsImEiOiJjbHQ2amJqZmcwY3NuMmxtbWh5c2toYzh4In0.z0pigUzranHR9og8G_7z6Q'

export default function Mapp(props) {

	useEffect(()=> {
		const map = new mapboxgl.Map({
			container: "map",
			style: "mapbox://styles/mapbox/streets-v12",
			center: [-99.29011, 39.39172],
			zoom: 3,
			// initialViewState:["latitude: 35.668641, longitude: 139.750567, zoom: 10"],
			maxZoom:20,
			minZoom:3,
			
		})
		
		if(props.pickupCoordinates){
			addToMap(map, props.pickupCoordinates)

		}
		if(props.dropoffCoordinates){
			addToMap(map, props.dropoffCoordinates)

		}

		if(props.pickupCoordinates && props.dropoffCoordinates){
			map.fitBounds([
				props.dropoffCoordinates,
				props.pickupCoordinates
			], {
				padding: 60
			})
		}
	},[props.pickupCoordinates, props.dropoffCoordinates])

	const addToMap = (map, coordinates) => {
		const marker1 = new mapboxgl.Marker()
		.setLngLat(coordinates)
		.addTo(map);
	}

	

	return (
		<main className={classes.mainStyle}>
			<Map 
				id="map"
				
			>
				<GeolocateControl position="top-left" />
				<NavigationControl position="top-left" />
			</Map>
		</main>
	);
}
