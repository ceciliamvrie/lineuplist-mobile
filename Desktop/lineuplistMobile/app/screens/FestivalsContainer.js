import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import  { fetchFestivals, fetchArtists } from '../../redux/actions/index'

import Festival from './Festival'

import { connect } from 'react-redux'

const MapStateToProps = (state) => (
  { ...state }
)

class FestivalsContainer extends Component {
  state = { festivals: [] }

  componentWillMount() {
    const { festivals } = this.props.rootReducer
    if (!festivals) {
      const action = fetchFestivals()
      this.props.dispatch(action)
    } else {
      this.setState({ festivals: festivals })
    }
  }

  componentWillReceiveProps({ festivals, rootReducer, navigation }) {
    if (festivals) {
      this.setState({ festivals: festivals })
    }
    else if (rootReducer.currentFestival) {
      navigation.navigate('LineupList', { festival: rootReducer.currentFestival })
    }
  }

  onFestivalClick(name) {
     const action = fetchArtists(name)
     this.props.dispatch(action)
  }

  render() {
    return (
      <ScrollView>
        {
          this.state.festivals.map((fest, i) => <Festival key={i} festival={fest} uploadArtists={this.onFestivalClick.bind(this)}/>)
        }
      </ScrollView>
    )
  }
}

export default connect(MapStateToProps) (FestivalsContainer)
