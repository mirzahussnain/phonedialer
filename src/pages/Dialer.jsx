import React from 'react'
import NumPad from '../components/NumPad'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Dialer = () => {
  return (
   <>
   <div className={`w-[400px] h-screen bg-black m-auto flex flex-col`}>
   <Header/>
   <NumPad/>
   <Footer/>
   </div>
   
   </>
  )
}

export default Dialer