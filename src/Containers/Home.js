import React from 'react'

//Components
import { Navbar } from '../Components/Navbar'
import { Header, Article } from '../Components/Header'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <Navbar showButton={true}/>
      <Header />
      <Article />
      <Footer />
    </>
  );
}

export default Home