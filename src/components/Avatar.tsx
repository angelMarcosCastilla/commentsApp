/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'

enum avatarEnum  {
  small = 'avatar__small',
  medium ='avatar__medium',
  large = 'avatar__large'
}
interface Props {
  name: string
  src : string
  size?: keyof typeof avatarEnum  
}


const Avatar:React.FC<Props> = ({name, src, size="medium"}) => {
  
  const classAvatarsize = avatarEnum[size] || avatarEnum.medium 
  return (
    <img className={`avatar ${classAvatarsize}`} src={src} alt={`avatar with ${name}`}/>
  )
}

export default Avatar