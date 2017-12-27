import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class LoginForm extends Component {
  state = { username: '', password: '' }

  onPressLogin() {
    const user = { username: 'Higgy' }
    this.props.navigation.navigate('FestivalsLineup', { username: 'Higgy' })
  }

  onPressToggle() {
    this.props.toggleSignup()
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.onPressLogin.bind(this)} style={styles.loginButton}>
          <View>
            <Text>SIGNIN WITH SPOTIFY</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.onPressToggle.bind(this)}>
          <View>
            <Text>Sign Up</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginButton: {
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
    shadowColor: 'blue',
    shadowOffset: { height: 3, width: 0 },
    backgroundColor: 'white'
  },
  toggleButton: {

  }
})
export default LoginForm
