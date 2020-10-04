import React from 'react'

//Components
import { Navbar } from '../Components/Navbar'
import { Header, Article } from '../Components/Header'

const Home = () => {
  return (
    <>
      <Navbar showButton={true}/>
      <Header />
      <Article />
    </>
  );
}

export default Home