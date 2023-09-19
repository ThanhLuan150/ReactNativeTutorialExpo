import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
    <View style={styles.view1}>
      <Text style={styles.text1}>Welcome to </Text>
      <Text style={styles.text2}>Shh!</Text>
      <Text style={styles.text3}>A Hub Where Whisper Echo </Text>
      <Text style={styles.text4}>Loudest</Text>
      <View style={styles.view2}>
        <View>
          <Svg width={45} height={93} viewBox="0 0 45 93" fill="none">
            <Rect x={-167} width={212} height={93} rx={46.5} fill="#D9D9D9" />
          </Svg>
        </View>
        <View  style={styles.view3} >
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
      <View style={styles.view4}>
        <View style={styles.view5}>
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
        <View style={styles.view6} >
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
  )
};

const styles = StyleSheet.create({
  view1:{
    backgroundColor:'#8C5CB3',
    fontFamily:'sans-serif',
    fontWeight: 'bold'
  },
  text1:{
    paddingTop: 30,
    paddingLeft: 10, 
    fontSize: 40,
    color: 'white'

  },
  text2:{
    paddingLeft: 10,
     fontSize: 40,
      color: 'white'
  },
  text3:{
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 20
  },
  text4:{
    paddingLeft: 10, 
    fontSize: 20
  },
  view2:{
    paddingTop: 40
  },
  view3:{
    position: 'relative',
    bottom: 40
  },
  view4:{
    position: "relative",
    bottom: 150, 
    left: 225
  },
  view5:{
    position: "relative", 
    left: 85 
  },
  view6:{
    position: 'relative',
     bottom: 40
  }
  ,view7:{
    position: 'relative', 
    bottom: 160
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
    textAlign:"center"
  },
  textanaccount:{
    color: 'white', 
    textAlign: 'center', 
    fontSize:15
  }
  
});

export default Home;
