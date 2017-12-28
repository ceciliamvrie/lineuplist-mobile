import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class ArtistProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
          <ScrollView>
              <View style={styles.details}>
                  <Text style={styles.artist}>Kanye West</Text>
                  <Text style={styles.description}>American Rapper | Singer | Songwriter </Text>
                  <View style={styles.genres}></View>
              </View>
              <View>
                  <View style={styles.playlist}><Text>Playlist</Text></View>
                  <View style={styles.relatedartists}><Text>Relatedartists</Text></View>
              </View>
          </ScrollView>
      </View>
    )
  }
}

export default ArtistProfile

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%'
  },
  artistcontainer: {
    width: '50%'
  },
  artist: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  playlist: {
    backgroundColor: 'grey',
    width: '100%',
    height: 360,
    justifyContent: 'center',
    alignItems: 'center'
  },
  details: {
    width: '100%',
    paddingTop: '20%',
    paddingLeft: '4.5%',
    backgroundColor: 'lightgrey',
    fontSize: 15
  },
  description: {
    marginTop: 2,
    marginBottom: 8,
    width: '70%',
    color: 'grey',
    fontSize: 13
  },
  relatedartists: {
    backgroundColor: 'lightgrey',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
