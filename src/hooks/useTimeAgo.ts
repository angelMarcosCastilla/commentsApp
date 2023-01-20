import { useEffect, useState } from "react";
import { formatTimeAgo } from "../utils/timestamp";


export default function useTimeAgo(timestamp:string) : string {
  const [timeAgo, setTimeAgo] =  useState(() => formatTimeAgo(timestamp))

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("holaa")
      setTimeAgo(formatTimeAgo(timestamp))
    }, 1000)

    console.log(timeAgo)
    return () => { clearInterval(interval); }
  }, [timestamp])
  
  return timeAgo
}
