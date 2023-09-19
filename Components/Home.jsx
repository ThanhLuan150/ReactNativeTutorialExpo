import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Register'); // Chuyển đến màn hình "Login"
  };
  const handleLogin =()=>{
    navigation.navigate('Login');
  }

  return (
    <View style={{ backgroundColor:'#8C5CB3' }}>
      <Text style={{ paddingTop: 30, paddingLeft: 10, fontSize: 40, color: 'white' }}>Welcome to </Text>
      <Text style={{ paddingLeft: 10, fontSize: 40, color: 'white' }}>Shh!</Text>
      <Text style={{ paddingTop: 5, paddingLeft: 10, fontSize: 20 }}>A Hub Where Whisper Echo </Text>
      <Text style={{ paddingLeft: 10, fontSize: 20 }}>Loudest</Text>
      <View style={{ paddingTop: 40 }}>
        <View>
          <Svg width={45} height={93} viewBox="0 0 45 93" fill="none">
            <Rect x={-167} width={212} height={93} rx={46.5} fill="#D9D9D9" />
          </Svg>
        </View>
        <View style={{ position: 'relative', bottom: 40 }} >
          <Svg
            width={130}
            height={119}
            viewBox="0 0 130 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Rect x={-212} width={342} height={119} rx={59.5} fill="#D9D9D9" />
          </Svg>
        </View>
      </View>
      <View style={{ position: "relative", bottom: 150, left: 225 }}>
        <View style={{ position: "relative", left: 85 }}>
          <Svg
            width={74}
            height={131}
            viewBox="0 0 74 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Rect width={210} height={131} rx={65.5} fill="#D9D9D9" />
          </Svg>
        </View>
        <View style={{ position: 'relative', bottom: 40 }} >
          <Svg
            width={160}
            height={148}
            viewBox="0 0 160 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Rect width={342} height={148} rx={74} fill="#D9D9D9" />
          </Svg>
        </View>
      </View>
      <View style={{ position: 'relative', bottom: 160 }}>
        <View style={{ paddingLeft:50, paddingRight:50 }}>
          <TouchableOpacity onPress={handleRegister} style={styles.button} >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View >
          <Text style={{ color: 'white', textAlign: 'center', fontSize:15}}>Already have an account?  <Text onPress={handleLogin}  style={{ color: "black" }}>Login</Text> </Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    paddingTop: 20,
    paddingBottom: 20,
    fontSize:20,
    borderRadius: 20,
    width:'100%',
    alignItems:"center"
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign:"center"
  },
});

export default Home;
