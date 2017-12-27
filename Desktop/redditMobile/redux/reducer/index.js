const initialState = {
  results: [{"Name":"Zen Awakening Festival","Date":"November 17-19, 2017","Location":"Orlando, FL","Lineup":null},{"Name":"Goldrush Festival","Date":"November 18-19, 2017","Location":"Chandler, AZ","Lineup":null},{"Name":"Dreamstate","Date":"November 24-25, 2017","Location":"San Bernardino, CA","Lineup":null},{"Name":"Day For Night","Date":"December 15-17, 2017","Location":"Houston, TX","Lineup":null},{"Name":"Lights All Night","Date":"December 29-30, 2017","Location":"Dallas TX","Lineup":null},{"Name":"Snowglobe","Date":"December 29-31, 2017","Location":"South Lake Tahoe, CA","Lineup":null},{"Name":"Holy Ship!","Date":"January 6-13, 2018","Location":"Miami, FL","Lineup":null},{"Name":"Tomorrow Never Knows","Date":"January 17-21, 2018","Location":"Chicago, IL","Lineup":null},{"Name":"Shiprocked","Date":"January 21-25, 2018","Location":"Port Canaveral, FL","Lineup":null},{"Name":"Gem and Jam","Date":"January 25-28, 2018","Location":"Tucson, AZ","Lineup":null},{"Name":"The Rock Boat","Date":"January 30-February 4, 2018","Location":"New Orleans, LA","Lineup":null},{"Name":"Dirtybird Campout East","Date":"February 2-4, 2018","Location":"St. Cloud, FL","Lineup":null},{"Name":"70000 Tons of Metal","Date":"February 1-5, 2018","Location":"Miami, FL","Lineup":null},{"Name":"Noise Pop","Date":"February 16-26, 2018","Location":"San Francisco, CA","Lineup":null},{"Name":"Okeechobee Music Festival","Date":"March 1-4, 2018","Location":"Okeechobee, FL","Lineup":null},{"Name":"McDowell Mountain Festival","Date":"March 2-4, 2018","Location":"Phoenix, AZ","Lineup":null},{"Name":"Botanica Music Festival","Date":"March 3-4, 2018","Location":"San Antonio, TX","Lineup":null},{"Name":"Savannah Stopover","Date":"March 8-10, 2018","Location":"Savannah, GA","Lineup":null}]
}

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
