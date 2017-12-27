import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class ArtistProfile extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
          <View style={styles.topcontainer}>
              <Text style={styles.artist}>Kanye West</Text>
              <View style={styles.details}>
                  <Text style={styles.description}>American rapper, singer, songwriter, record producer, fashion designer, and entrepreneur</Text>
                  <View style={styles.genres}></View>
              </View>
              <View>
                  <View style={styles.playlist}></View>
                  <View style={styles.relatedartists}></View>
              </View>
          </View>
      </View>
    )
  }
}

export default ArtistProfile

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    padding: 12,
  },
  artistcontainer: {
    width: '50%'
  },
  artist: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  playlist: {
    backgroundColor: 'lightgrey',
    width: '100%',
    height: 300,
    borderRadius: 4,
    marginTop: 15
  },
  details: {
    marginTop: 14,
    width: '80%',
    alignItems: 'center',
  }
})
