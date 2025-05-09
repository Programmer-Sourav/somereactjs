import { useEffect, useRef } from "react";

const useTimeout = (callback, delay) =>{
 
  const callbackRef = useRef(callback)

    //current property updates the current property of callbackRef with the latest callback function
    callbackRef.current = callback;

    useEffect(()=>{
        const timerId = setTimeout(()=>{callbackRef.current()}, delay)

        return ()=>clearTimeout(timerId);

    }, [delay])

}

export default useTimeout;