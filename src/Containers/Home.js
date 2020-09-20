import React from 'react'

//Components
import { Navbar } from '../Components/Navbar'
import { Header, Article } from '../Components/Header'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Article />
    </>
  );
}

export default Home