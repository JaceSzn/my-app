"use client"
import { useState } from 'react'
import tw from "tailwind-styled-components";
import Link from "next/link";

const Search = () => {

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <Wrapper>

      {/* Button container */}
      <ButtonContainer>
        <Link href="/">
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </Link>
      </ButtonContainer>

      {/* Input container */}
      <InputContainer>
        <FromToIcons>
          <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
          <Line src='https://img.icons8.com/ios-glyphs/30/vertical-line.png' />
          <Square src='https://img.icons8.com/material-sharp/24/square-spinner.png' />
        </FromToIcons>
        

        <InputBoxes>
          <Input placeholder='Enter pick up location' value={pickup} onChange={(e)=> setPickup(e.target.value)}/>

          <Input placeholder='Where to?' value={dropoff} onChange={(e)=> setDropoff(e.target.value)}/>
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/android/24/plus.png" />

      </InputContainer>

      {/* Saved places */}
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png"/>
        Saved places
      </SavedPlaces>

      {/* confirm button container */}
      <Link href={{
        pathname:"/confirm",
        query:{
          pickup:pickup,
          dropoff:dropoff
        }
      }}>
        <ConfirmButtonContainer>
          Confirm Locations
        </ConfirmButtonContainer>
      </Link>
      
    </Wrapper>
  )
}

export default Search

const ConfirmButtonContainer = tw.div`bg-black text-white text-center mt-2 mx-2 px-4 py-3 cursor-pointer`

const Wrapper = tw.div`bg-gray-200 h-screen`

const ButtonContainer = tw.div`bg-white px-4`

const BackButton = tw.img`h-12`

const FromToIcons = tw.div`w-10 flex flex-col mr-2 items-center`

const InputContainer = tw.div`bg-white flex items-center px-4`

const Circle = tw.img`h-2.5`

const Line = tw.img`h-10 w-4`

const Square = tw.img`h-3`

const InputBoxes = tw.div`flex flex-col flex-1`

const Input = tw.input`h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none`

const PlusIcon = tw.img`w-10 h-10 bg-gray-200 rounded-full ml-3`

const SavedPlaces = tw.div`flex items-center bg-white px-4 my-2 py-1`

const StarIcon = tw.img`bg-gray-400 w-10 h-10 p-2 rounded-full mr-2`