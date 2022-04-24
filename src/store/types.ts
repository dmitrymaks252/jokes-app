export type JokeType = {
  id: number
  type: string
  setup: string
  punchline: string
  reaction: {
    like: boolean
    dislike: boolean
  }
}

export type JokesStateType = {
  data: Array<JokeType>
  favouriteJokes: Array<JokeType>
  isLoading: boolean
  error: null | string,
  isOpened: boolean
}