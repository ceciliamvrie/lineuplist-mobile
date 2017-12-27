import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

const MapStateToProps = ({ rootReducer }) => (
  rootReducer
)

class ArtistLineup extends Component {
  componentDidMount(){
    console.log('this is artist props', this.props)
  }

  renderArtistProfile() {
    const { navigation } = this.props
    navigation.navigate('ArtistProfile',  { artist: 'Kanye West' })
  }

  render() {
    return (
      <ScrollView>
        <TouchableHighlight onPress={this.renderArtistProfile.bind(this)}>
          <View style={styles.container}>
            <View style={styles.smallcontainer}>
              <View style={styles.image}></View>
              <View>
                <Text style={styles.artist}>Kanye West</Text>
                <View style={styles.bottom}>
                  <Text style={styles.followers}>39324 Followers</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottom}>
              <View style={styles.smallcontainer}></View>
            </View>
          </View>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

export default connect(MapStateToProps)(ArtistLineup)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
    height: 82,
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  smallcontainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  image: {
    height: 60,
    width: 60,
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    marginRight: 20
  },
  artist: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 16
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  followers: {
    fontSize: 12,
    color: 'grey'
  },
  genre: {
    padding: 10
  }
})
