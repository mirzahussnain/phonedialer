import { createContext ,useState} from "react";

export const DialerContext=createContext();

export default ({children})=>{
    const [callLog,setCallLog]=useState([])



const store={
    callLog:[callLog,setCallLog]
}

return(
    <DialerContext.Provider value={store}>
    {children}
    </DialerContext.Provider>
)
}