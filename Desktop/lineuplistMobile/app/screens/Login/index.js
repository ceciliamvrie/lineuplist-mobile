import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

class Login extends Component {

  // creates mock user for loging in to application
  onPressLogin() {
    const user = { username: 'Higgy' }
    this.props.navigation.navigate('FestivalsLineup', { username: 'Higgy' })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>lineuplist</Text>
          <Text style={styles.font}>Where music junkies meet musicians</Text>
        </View>

          <TouchableHighlight underlayColor="rgb(182, 233, 234)" onPress={this.onPressLogin.bind(this)} style={styles.loginButton}>
            <View>
              <Text>Signin with Spotify</Text>
            </View>
          </TouchableHighlight>
      </View>
    )
  }
}

export default Login

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22c1c3',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '20%'
  },
  font: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'normal',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5
  },
  loginButton: {
    width: 172,
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    borderRadius: 8,
    marginTop: 7,
    shadowOpacity: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    shadowRadius: 0,
    shadowColor: 'rgb(27, 147, 149)',
    shadowOffset: { height: 4, width: 0 },
    backgroundColor: 'white'
  },
})
