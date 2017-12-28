import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default class Festival extends Component {
  state = {clicked: false}

  uploadArtists(name) {
    const { uploadArtists, festival } = this.props
    uploadArtists(festival.Name)
  }

  onPressHeart() {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    const { festival } = this.props
    const month = festival.Date.split('').slice(0, 3).join('')
    const date = festival.Date.split(' ').slice(1).join(' ')

    return (
      <TouchableHighlight onPress={this.uploadArtists.bind(this)}>
        <View style={styles.container}>
          <Text style={styles.title}>{festival.Name}</Text>
          <Text style={styles.date}>{`${month} ${date}`}</Text>
          <View style={styles.image}></View>
          <View style={styles.details}>
            <TouchableHighlight underlayColor='white' onPress={this.onPressHeart.bind(this)}>
              <Text style={this.state.clicked ? styles.heartPressed: styles.heartUnPressed}>♥</Text>
            </TouchableHighlight>
            <Text style={styles.location}>{festival.Location}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    maxHeight: 300,
    height: 260,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  date: {
    marginTop: 3,
    marginBottom: 8,
    fontSize: 12,
    color: 'grey'
  },
  details: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    backgroundColor: 'lightgrey',
    width: '100%',
    height: 175,
    borderRadius: 4
  },
  location: {
    marginTop: 5,
    marginRight: 3
  },
  heartPressed: {
    marginTop: 0,
    marginLeft: 7,
    fontSize: 24,
    color: 'rgb(225, 0, 254)'
  },
  heartUnPressed: {
    marginTop: 0,
    marginLeft: 7,
    fontSize: 24,
    color: 'grey'
  }
})
