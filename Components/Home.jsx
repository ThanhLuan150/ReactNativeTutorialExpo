import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Signup'); // Chuyển đến màn hình "Register"
  };
  const handleLogin =()=>{
    navigation.navigate('Login');// Chuyển đến màn hình "Login"
  }

  return (
    <ImageBackground  source={require('../assets/home.jpg')}style={styles.imageBackground}>
      <View>
        <Text style={styles.textWelcome}>Welcome to </Text>
        <Text style={styles.textShh}>Shh!</Text>
        <Text style={styles.textAhub}>A Hub Where Whisper Echo </Text>
        <Text style={styles.textLoudest}>Loudest</Text>
        <View style={styles.view7}>
          <View style={styles.view8}>
            <TouchableOpacity onPress={handleRegister} style={styles.button} >
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View >
            <Text style={styles.textanaccount}>Already have an account?  <Text onPress={handleLogin}  style={{ color: "black" }}>Login</Text> </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover'
  },
  textWelcome:{
    paddingTop: 30,
    paddingLeft: 10, 
    fontSize: 40,
    fontWeight:'bold',
    color: 'white'

  },
  textShh:{
    paddingLeft: 10,
    fontSize: 40,
    color: 'white',
    fontWeight:'bold',
  },
  textAhub:{
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 20,
    fontWeight:'bold'
  },
  textLoudest:{
    paddingLeft: 10, 
    fontSize: 20,
    fontWeight:'bold'
  },
  view7:{
    paddingTop:320
  },
  view8:{
    paddingLeft:50, 
    paddingRight:50
  },
  button: {
    backgroundColor: 'black',
    paddingTop: 15,
    paddingBottom: 15,
    fontSize:20,
    borderRadius: 20,
    width:'100%',
    alignItems:"center"
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign:"center",
    fontWeight:'bold'
  },
  textanaccount:{
    color: 'white', 
    textAlign: 'center', 
    fontSize:15,
    fontWeight:'bold'
  }
  
});

export default Home;
