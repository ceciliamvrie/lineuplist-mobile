import types from '../constants/index'

export const fetchFestivals = () => {
  return { type: types.UPLOAD_FESTIVALS }
}

export const fetchArtists = (artist) => {
  return { type: types.UPLOAD_ARTISTS, payload: artist }
}
