const initialState = require('../../app/config/data')

const rootReducer = (state = {}, { type, payload }) => {
  switch(type) {
    case 'persist/REHYDRATE': {
      const { festivals } = payload.rootReducer
      return {...state, festivals: festivals}
    }
    case 'UPLOAD_FESTIVALS': {
      return {...state, festivals: initialState.results}
    }
    case 'UPLOAD_ARTISTS': {
      const fests = state.festivals.slice(0)
      return {...state, currentFestival: fests.filter(fest => fest.Name === payload) }
    }
    default: {
      return state
    }
  }
}

export default { rootReducer }
