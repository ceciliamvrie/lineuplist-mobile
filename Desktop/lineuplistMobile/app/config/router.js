import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import ArtistLineup from '../screens/ArtistLineup'
import ArtistProfile from '../screens/ArtistProfile'
import FestivalsContainer from '../screens/FestivalsContainer'
import Login from '../screens/Login/index'

export const LineupStack = StackNavigator({
  Festivals: {
    screen: FestivalsContainer,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.username}'s Festivals`,
    }),
  },
  LineupList: {
    screen: ArtistLineup,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.festival[0].Name}`,
    }),
  },
  ArtistProfile: {
    screen: ArtistProfile,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.artist}`,
    })
  }
})

export const Root = StackNavigator({
  Login: {
    screen: Login,
  },
  FestivalsLineup: {
    screen: LineupStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
})
