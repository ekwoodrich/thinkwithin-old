import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import SignInForm from '../components/SignInForm';
import SignInGoogle from '../components/SignInGoogle';
import SignInApple from '../components/SignInApple';
import SignInAnon from '../components/SignInAnon';
import SignInCreate from '../components/SignInCreate';

class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  _signInWithEmail = () => {
    console.log('email sign in');
  };
  _signInWithGoogle = () => {
    console.log('google sign in');
  };
  _signInWithApple = () => {
    console.log('apple sign in');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            source={require('../assets/img/thinkwith_icon.png')}
          />
        </View>
        <SignInForm />
        <Button
          style={styles.forgot}
          mode="outlined"
          compact={true}
          color="#ed6b18"
          onPress={() => {
            this.props.navigation.navigate('ForgotPassword');
          }}
        >
          FORGOT PASSWORD?
        </Button>
        <View style={styles.social}>
          <SignInCreate navigation={this.props.navigation} />
        </View>
        <View style={styles.or}>
          <Text>or</Text>
        </View>
        <View style={styles.social}>
          <SignInGoogle />
          <SignInApple />
          <SignInAnon />
        </View>
      </ScrollView>
    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  forgot: {
    marginTop: 10,
    marginBottom: 10
  },
  divider: {
    color: 'black',
    marginTop: 15,
    marginBottom: 15
  },
  login: {
    marginTop: 15
  },
  google: {},
  label: {
    color: 'black'
  },
  signInGoogle: {},

  social: {
    marginLeft: 30,
    marginRight: 30
  },
  or: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    width: 150,
    height: 150,
    resizeMode: 'stretch'
  },
  googleButton: {
    width: 28,
    height: 28,
    padding: 0
  }
});
