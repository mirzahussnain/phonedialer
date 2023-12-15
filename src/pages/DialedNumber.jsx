import React, { useContext, useEffect } from 'react'
import { HiSpeakerWave } from "react-icons/hi2";
import { IoKeypad ,IoPersonAddSharp,IoVideocam} from 'react-icons/io5';
import { ImPhoneHangUp } from "react-icons/im";
import { BsMicMuteFill } from "react-icons/bs";
import { IoIosInformationCircleOutline } from 'react-icons/io';
import CallLog from './CallLog';
import { DialerContext } from '../context/store';
import { useNavigate } from 'react-router-dom';
const DialedNumber = () => {
    const {callLog:[callLog]}=useContext(DialerContext)
    const navigateTo=useNavigate()
    const options = [
        {icon:<HiSpeakerWave/>,name:'Speaker'},
        {icon:<IoVideocam/>,name:'FaceTime'},
        {icon:<BsMicMuteFill/>,name:'Mute'},
        {icon:<IoPersonAddSharp/>,name:'Add'},
        {icon:<ImPhoneHangUp/>,name:'End'},
        {icon:<IoKeypad/>,name:'Keypad'},

      ];

      useEffect(() => {
        const timeoutId = setTimeout(() => {
          // After 10 seconds, navigate to the CallLog page
          navigateTo('/calllog');
        }, 10000);
    
        // Clean up the timeout when the component unmounts or when navigating to the next page
        return () => clearTimeout(timeoutId);
      }, [navigateTo]);
     
  return (
    <>
    <div className={`w-[400px] h-screen bg-zinc-500 m-auto flex flex-col justify-between relative`}>
    <div className={`w-full h-full mt-12 flex flex-col items-center justify-start`}>
    <span className={`text-zinc-300 font-semibold`}>calling mobile...</span>
    <h2 className={`text-2xl font-bold text-white`}>{callLog?(callLog[0]?.name):('Nothing Dialed Yet')}</h2>
    </div>
    <div className={`h-full grid grid-cols-3 gap-2`}>
    {
        options.map((option, index) => (
            <div className={`flex flex-col items-center text-white`} key={`${option.name}+${index}`}>
              <button
                className={`w-[60px] h-[60px]
                ${option.name.includes("End") ? 'bg-red-600' : 'bg-neutral-600/30'} 
                ${option.name.includes("FaceTime") || option.name.includes("Add") ? 'disabled opacity-30' : 'active'}  rounded-full p-5 text-2xl mx-auto`}
              >
                {option.icon}
              </button>
              <span className={`text-sm`} key={`name:${option.name}+${index}`}>
                {option.name}
              </span>
            </div>
          ))
    }
    </div>
    <button className={`absolute top-4 right-4 text-2xl text-zinc-400`}>
    <IoIosInformationCircleOutline/>
    </button>
    </div>   
    </>
  )
}

export default DialedNumber