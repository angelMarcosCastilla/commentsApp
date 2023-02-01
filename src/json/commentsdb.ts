import { Comment } from "../types/comments";

export const commentsApp:Comment[] = [
  {
    id: 1,
    user:{
      id: 1,
      name: 'John Doe',
      userName:"name",
      avatar: 'https://avatars.steamstatic.com/c62774de722209685056b76d9ccb1add485d1ca5_full.jpg'
    },
    timestamp: '2019-01-01T12:00:00.000Z',
    comments:"@ramailesa I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newwest library/ framework. but the fundementals are what stay constant. ",
    score: 12,
    parentId: null
  },
  {
    id: 2,
    user:{
      id: 1,
      name: 'John Doe',
      userName:"name",
      avatar: 'https://avatars.steamstatic.com/c62774de722209685056b76d9ccb1add485d1ca5_full.jpg'
    },
    timestamp: '2023-01-01T12:00:00.000Z',
    comments:"@ramailesa I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newwest library/ framework. but the fundementals are what stay constant. ",
    score: 12,
    parentId: 1
  },
  {
    id: 3,
    user:{
      id: 1,
      name: 'John Doe',
      userName:"name",
      avatar: 'https://avatars.steamstatic.com/c62774de722209685056b76d9ccb1add485d1ca5_full.jpg'
    },
    timestamp: '2019-01-01T12:00:00.000Z',
    comments:"@ramailesa I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newwest library/ framework. but the fundementals are what stay constant. ",
    score: 12,
    parentId: 1
  },
  {
    id: 4,
    user:{
      id: 1,
      name: 'John Doe',
      userName:"name",
      avatar: 'https://avatars.steamstatic.com/c62774de722209685056b76d9ccb1add485d1ca5_full.jpg'
    },
    timestamp: '2023-01-01T12:00:00.000Z',
    comments:"@ramailesa2 I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newwest library/ framework. but the fundementals are what stay constant. ",
    score: 12,
    parentId: null
  },
  {
    id: 5,
    user:{
      id: 1,
      name: 'John Doe',
      userName:"name",
      avatar: 'https://avatars.steamstatic.com/c62774de722209685056b76d9ccb1add485d1ca5_full.jpg'
    },
    timestamp: '2023-01-01T12:00:00.000Z',
    comments:"@ramailesa3 I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newwest library/ framework. but the fundementals are what stay constant. ",
    score: 12,
    parentId: 4
  },
]