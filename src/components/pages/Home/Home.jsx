import React from 'react'
import "./Home.css"
import PlacesToReleax from '../../commons/PlacesToReleax/PlacesToReleax'
import SpecialOffers from '../../commons/SpecialOffers/SpecialOffers'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home_banner'>
          <h1 className='home_title'>THE BEST FOR YOUR REST</h1>
          <p className='home_suntitle'>Bungalow on the beach - Rangiroa Polynesia. </p>
          <button className='home__button'>More information</button>
        </div>
      </div>
      <PlacesToReleax />
      <SpecialOffers />
    </>
  )
}

export default Home

