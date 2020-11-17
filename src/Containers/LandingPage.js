import React from 'react'
import { Navbar } from '../Components/Navbar'
import StoryContent from '../Components/Content'
import HeroInfo from '../Components/HeroInfo'
import SideBar from '../Components/SideBar'

const LandingPage = () => {
  return (
    <>
      <StoryContent title="Bienvenido a la aplicación de broker de IBM" />
      <HeroInfo />
    </>
  );
}

export default LandingPage