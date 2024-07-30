'use client';
import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components";
import Map from "../components/map";
import { useRouter } from 'next/navigation';
import RideSelector from '../components/RideSelector';

const Confirm = () => {
  // const router = useRouter()
  // const { pickup, dropoff } = router.query


  const [ pickupCoordinates, setPickupCoordinates ] = useState()
  const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

  const getPickupCoordinates = () => {
    const pickup = "Santa Monica"
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiamFjZXN6biIsImEiOiJjbHQ2amJqZmcwY3NuMmxtbWh5c2toYzh4In0.z0pigUzranHR9og8G_7z6Q",
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
      
      setPickupCoordinates(data.features[0].center)
    })
  }


  const getDropoffCoordinates = () => {
    const dropoff = "Los Angeles"
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoiamFjZXN6biIsImEiOiJjbHQ2amJqZmcwY3NuMmxtbWh5c2toYzh4In0.z0pigUzranHR9og8G_7z6Q",
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
      setDropoffCoordinates(data.features[0].center)
    })
  }

  useEffect(()=> {
    getPickupCoordinates();
    getDropoffCoordinates();
  },[]);

  return (
   <Wrapper>
    <Map 
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
    />

    {/* Ride container  */}
    <RideContainer>
      <RideSelector />
     
      <ConfirmButtonContainer>
        <ConfirmButton>
          Confirm UberX
        </ConfirmButton>
      </ConfirmButtonContainer>
    </RideContainer>
        
   </Wrapper>
  )
}

export default Confirm;

const ConfirmButton = tw.div`bg-black text-white my-4 mx-4 py-4 text-center text-xl`

const ConfirmButtonContainer = tw.div`border-t-2`

const Wrapper = tw.div`flex flex-col h-screen`

const RideContainer = tw.div`flex-1 flex flex-col h-1/2`