import React, { useContext, useEffect, useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { DialerContext } from '../context/store';
import { useNavigate } from 'react-router-dom';
const NumPad = () => {
    const [dialedNumber,setDialedNumber]=useState('')
    const {callLog:[callLog,setCallLog]}=useContext(DialerContext);
    const navigateTo=useNavigate();
    const characters = [
        { number: '1', letters: '' },
        { number: '2', letters: 'ABC' },
        { number: '3', letters: 'DEF' },
        { number: '4', letters: 'GHI' },
        { number: '5', letters: 'JKL' },
        { number: '6', letters: 'MNO' },
        { number: '7', letters: 'PQRS' },
        { number: '8', letters: 'TUV' },
        { number: '9', letters: 'WXYZ' },
        { number: '*', letters: ''},
        { number: '0', letters: '+' },
        { number: '#', letters: ''}
      ];

      const handleDialedNumber=(e)=>{
        e.preventDefault()
        if(dialedNumber!==''){
            let tempArray=new Array();
            if(callLog){
                tempArray=callLog.map((call)=>(call))
            }
            tempArray.unshift({
                name:`Test ${Math.floor(Math.random() * 100)}`,
                category:'Outgoing Call',
                number:dialedNumber,
                time:new Date().getTime().toString()
    
            })
            setCallLog(
               tempArray
            )
            setDialedNumber('')
            navigateTo('/calling',
            {
                replace:true
            })
        }
        else{
            alert("Enter Number to Dial")
        }
       
      }
     
  return (
    <>
    
    
    <div className={`flex flex-col w-full h-full bg-transparent items-center justify-center`}>
    
    {/*Dialed Number Section*/}
    <div className={`flex flex-col w-full h-[100px] p-10 bg-transparent items-center justify-center`}>
    
    <h1 className={`font-semibold text-xl text-white`}>{dialedNumber}</h1>
    <span className={`text-blue-900 text-sm`}><a href='#'>Add Number</a></span>
    </div>

    {/*Number Grid*/}
    <div className={`w-full h-[400px] bg-transparent  items-center flex flex-col justify-start`}>
    <div className={` inset-0 grid grid-cols-3 gap-4 gap-x-10 mx-auto bg-transparent p-5`}>
    {characters.map((char)=>(
        <button key={char.number}
        className={`w-[60px] h-[60px] bg-neutral-600/30 text-white rounded-full flex flex-col items-center`}
        type='button'
        onClick={()=>{
            setDialedNumber(
                dialedNumber+char.number
            )
        }}
        >
        {
            char.letters===''?(
                <span className={`text-xl font-semibold text-center items-center p-3`}>{char.number}</span>
            ):
            (
                <>
                <span className={`text-2xl font-semibold`}>{char.number}</span>
                <span className={`text-[12px]`}>{char.letters}</span>
                </>
                
            )
        }
        
       
        </button>
    ))}
    </div>
    <div className={`flex justify-center items-center`}>
    <button
    className={`w-[50px] h-[50px] ml-20 bg-green-500 p-4 text-white rounded-full flex flex-col items-center`}
    onClick={(e)=>handleDialedNumber(e)}
    >
   <FaPhoneAlt/>
    </button>
    <button className={`ml-12 text-neutral-600`}
    onClick={()=>setDialedNumber(dialedNumber.slice(0,-1))}>
   <FaDeleteLeft className={`text-2xl`}/>
    </button>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default NumPad