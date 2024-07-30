import React from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/map";
import Link from "next/link";


export default function Home() {
  
  return (
    
    <Wrapper>
      <Map />
      <ActionItems>

        {/* Header */}
        <Header>
          <Logo src="/ebay2.png" />
          <Profile>
              <Name>Jace szn</Name>
              <UserImage src="/amazon3.png" />
          </Profile>
        </Header>

        {/* ActionButtons */}
        <ActionButtons>

          
            <ActionButton>
              <Link href="/search">
                <ActionButtonImage src="/binance2.png" className="rounded-lg"/>
                Ride
              </Link>
            </ActionButton>
          

          <ActionButton>
            <ActionButtonImage src="/amazon3.png" className="rounded-lg"/>
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="/booking2.png" className="rounded-lg"/>
            Reserve
          </ActionButton>
          
        </ActionButtons>

        {/* InputButton */}
        <InputButton>
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>

    
    
  );
}

const Wrapper = tw.div`
flex flex-col
`
const ActionItems = tw.div`
flex-1 p-4
`
const Header = tw.div` flex justify-between items-center
`
const Logo = tw.img`
h-28
`
const Profile = tw.div`flex items-center`

const Name = tw.div` mr-4 w-20`

const UserImage = tw.img` h-12 w-12 rounded-full border border-gray-200 p-px`

const ActionButtons = tw.div` flex`

const ActionButton = tw.div`flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl`

const ActionButtonImage = tw.img` h-3/5 `

const InputButton = tw.div` h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8`