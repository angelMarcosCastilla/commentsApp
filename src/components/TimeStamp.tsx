import React from 'react'
import useTimeAgo from '../hooks/useTimeAgo';

interface Props {
  timestamp: string;
}

const TimeStamp:React.FC<Props> = ({timestamp}) => {
  const timeago = useTimeAgo(timestamp)

  return (
    <span>{timeago}</span>
  )
}

export default TimeStamp