import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

const MapStateToProps = ({ rootReducer }) => (
  rootReducer
)

class ArtistLineup extends Component {
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
                  <Text style={styles.followers}>39m followers | rapper</Text>
                  <Text style={styles.arrow}>⌄</Text>
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
    height: 87,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 13,
    paddingRight: 10,
    paddingBottom: 10
  },
  smallcontainer: {
    marginTop: 16,
    marginLeft: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  image: {
    height: 57,
    width: 57,
    backgroundColor: 'lightgrey',
    borderRadius: 8,
    marginRight: 20,
  },
  artist: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10
  },
  bottom: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 253
  },
  followers: {
    fontSize: 12,
    color: 'grey'
  },
  genre: {
    padding: 10
  },
  arrow: {
    marginTop: -26,
    fontSize: 30,
    color: 'lightgrey',
    transform: [{ rotate: '266deg'}]
  }
})
