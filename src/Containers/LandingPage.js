import React, {useEffect} from 'react'
import { Navbar } from '../Components/Navbar'
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  
} from 'carbon-components-react';
import {Fade16} from '@carbon/icons-react'
import StoryContent from '../Components/Content'
import HeroInfo from '../Components/HeroInfo'


const LandingPage = () => {

  useEffect(() => {

  }, [])
  return (
    <>
      <Navbar showButton={false} />
      <StoryContent title="Bienvenido al Broker web app"/>
      <HeroInfo />
    </>
  );
}

export default LandingPage