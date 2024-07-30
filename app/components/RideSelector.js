import React from 'react'
import tw from "tailwind-styled-components";
import {carList} from '../data/data';

const RideSelector = () => {
    
  return (
    <Wrapper>
       <Title>Choose a ride, or swipe up for more</Title>
       <CarList>
            { carList.map(() => {
                 <Car>
                    <CarImage src="./amazon3.png" />
                    <CarDetails>
                        <Service>UberX</Service>
                        <Time>5 mins away</Time>
                    </CarDetails>
                 
                </Car>
            })}
           
       </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Price = tw.div`text-sm`

const Time = tw.div`text-xs text-blue-500`

const Service = tw.div`font-medium`

const CarDetails = tw.div`flex-1`

const CarImage = tw.img` h-14 mr-4`

const Car = tw.div` flex p-4 items-center`

const CarList = tw.div`overflow-y-flow`

const Title = tw.div`text-gray-500 text-center text-xs py-2 border-b fixed-top`

const Wrapper = tw.div`flex-1 overflow-y-scroll flex flex-col`