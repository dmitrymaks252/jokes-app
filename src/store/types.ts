export type JokeType = {
  id: number
  type: string
  setup: string
  punchline: string
  // like: boolean
}

export type JokesStateType = {
  data: Array<JokeType>
  favouriteJokes: Array<JokeType>
  isLoading: boolean
  error: null | string
}