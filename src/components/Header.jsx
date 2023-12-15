import React from 'react'
import { FaTelegramPlane,FaWifi  } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
const Header = () => {
  return (
    <>
    <div className={`w-full h-7 bg-tranparent flex justify-between items-center p-3
    text-white font-semibold`}>
    <div className={`w-full flex items-center `}>
    <span>{new Date().toLocaleTimeString(undefined,{ hour: 'numeric', minute: 'numeric', hour12: true })}</span>
    <FaTelegramPlane className={`ml-1`}/>
    </div>
    <div className={`w-full flex items-center justify-end`}>
    <span>....</span>
    <FaWifi className={`mx-2`}/>
    <CiBatteryFull/>
    </div>
    </div>
    </>
  )
}

export default Header