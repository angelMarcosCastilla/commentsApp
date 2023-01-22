import {  useState } from "react";
import { formatTimeAgo } from "../utils/timestamp";


export default function useTimeAgo(timestamp:string) : string {
  const [timeAgo, setTimeAgo] =  useState(() => formatTimeAgo(timestamp))
  
  return timeAgo
}
