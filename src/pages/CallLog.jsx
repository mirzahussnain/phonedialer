import React, { useContext } from 'react'
import Header from '../components/Header'
import NumPad from '../components/NumPad'
import Footer from '../components/Footer'
import { BsTrash } from 'react-icons/bs'
import { DialerContext } from '../context/store'

const CallLog = () => {
    const {callLog:[callLog,setCallLog]}=useContext(DialerContext)
    const handleDelete=(e,name)=>{
        e.preventDefault();
        const tempArray=callLog?.filter((call)=>(
            call.name!==name
        ))
        setCallLog(tempArray)
    }
  return (
    <>
   <div className={`w-[400px] h-screen bg-black m-auto flex flex-col`}>
   <Header/>
   <div className={`w-full h-16 flex justify-between items-center`}>
   <a className={`w-44 p-4 text-blue-700`}><span>Edit</span></a>
   <div className={`w-full h-full  flex justify-start items-center`}>
   <div className={`bg-zinc-800 text-white rounded-md w-[80px] text-center cursor-pointer`}>All</div>
   <div className={`bg-zinc-400 text-white rounded-md w-[80px] text-center -ml-2 cursor-pointer`}>Missed</div>
   </div>
   </div>
   <div className={`w-full h-full flex flex-col items-start p-5 justify-start `}>
   <h1 className={`text-white font-bold text-3xl`}>Recents</h1>
   <div className={`w-full h-full flex flex-col mt-5`}>
   {
    callLog?(callLog.map((call,index)=>(
    <div key={index} className={`w-full h-[50px]  border-b-white flex justify-between items-center`}>
   <div className={`w-full flex flex-col items-start justify-center py-4`}>
   <h2 className={`text-red-600 `}>{call.name}</h2>
   <span className={`text-zinc-600 text-md`}>{call.number}</span>
   <span className={`text-zinc-600 text-md`}>{call.category}</span>
   </div>
   <div className={`w-full h-full flex justify-end items-center`}>
   <span className={`text-zinc-600`}>{call.time}</span>
   <button className={`text-2xl font-semibold text-red-600 ml-2`}
   onClick={(e)=>handleDelete(e,call.name)}>
   <BsTrash/>
   </button>
   </div>
   </div>
    ))
    ):(<h1 className='h-full w-full text-white'>No Call Exists</h1>)
   }
   
   </div>
   </div>
   <Footer/>
   </div>
   
   </>
  )
}

export default CallLog