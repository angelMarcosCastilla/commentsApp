import React from 'react'
import Avatar from '../Avatar'
import Button from '../Button'
import TextArea from '../TextArea'

const ReplyEditor:React.FC = () => {
  return (
    <div className='editorContainer'>
      <Avatar src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' name=''></Avatar>
  <TextArea></TextArea>
  <Button  size='large'>Reply</Button>
    </div>
  )
}

export default ReplyEditor