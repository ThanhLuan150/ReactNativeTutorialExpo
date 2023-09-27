import React from 'react';
import {ImageBackground, Text, View, TouchableOpacity,  StyleSheet, TextInput } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import Svg, { Rect , Path} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
const Login = () =>{
    const  navigation =useNavigation();
    const handleRegister = () => {
        navigation.navigate('Signup'); // Chuyển đến màn hình "Register"
      };
    return(
        <ImageBackground  source={require('../assets/login1.jpg')}style={style.imageBackground}>
            <View>
                <Text style={style.text1}>
                    Log in to Shh !
                </Text>
                <View style={style.view2}>
                    <View style={style.border}>
                        <TouchableOpacity>
                                <Svg style={style.svg} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                                <Path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                                <Path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                                <Path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                                <Path fill="#1976D2"d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                                </Svg>
                        </TouchableOpacity>
                        <Text style={style.text2}> Log in with Google</Text>
                    </View>
                </View>
                <View style={style.viewborder}>
                    <Text style={style.border1}></Text>
                    <Text style={style.textborder}>Or log in with email</Text>
                    <Text style={style.border1}></Text>
                </View>
                <View style={style.viewinput}>
                    <View style={{ paddingTop:5 }}>
                        <Text style={{ fontSize:15 , fontWeight:'bold', paddingBottom:10 }}>Username or Email</Text>
                        <TextInput style={style.textinput}
                            placeholder="Username or Email"
                            placeholderStyle={style.placeholder}
                        />
                    </View>
                    <View style={style.viewinput1}>
                        <View style={{ flexDirection:'row',justifyContent:"space-between" }}>
                            <Text style={{ fontSize:15 , fontWeight:'bold', paddingBottom:10   }}>Password</Text>
                            <Text style={{  fontSize:15 , paddingBottom:10   }} >Forgot</Text>
                        </View>
                        <TextInput style={style.textinput}
                            placeholder="Password"
                        />
                    </View>
                </View>
                <View style={style.view3}>
                    <TouchableOpacity style={style.button} >
                        <Text style={style.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingTop:20,paddingBottom:20 ,paddingRight:100 }} >
                    <Text style={style.textanaccount}>Don't have an account?   </Text>
                    <Text onPress={handleRegister}  style={{ color: "black" ,textAlign:'center',fontWeight:'bold' }}>Sign up</Text>
                </View>
            </View>
        </ImageBackground>
    )
}
const style = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover'
      },
    text1:{
        fontSize:30,
        color: 'white',
        paddingTop: 50,
        paddingBottom:20,
        textAlign:'center',
        fontWeight:'bold'
    },
    view2:{
        paddingLeft:30,
        paddingRight:30
    },
    border:{
        width:'100%',
        borderWidth:1,
        borderColor: "black",
        borderRadius:30,
        paddingLeft:80, 
        paddingRight:40,
        flexDirection:'row',
        backgroundColor:'black',
        paddingBottom:20,
        paddingTop:20,
        gap:5,
    },
    svg:{
        height:20,
        width:20
    },
    text2:{
        fontSize:15,
        color:'white',
        fontWeight:'bold'
    },
    viewborder:{
      flexDirection:'row',
        gap:10,
       paddingLeft:25,
       paddingTop:20,
       paddingBottom:20
    },
    textborder:{
        fontSize:15,
        position:'relative',
        top:8,
        fontWeight:'bold'
    },
    border1:{
        width: '25%',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
      },
      viewinput:{
        paddingTop:25,
        paddingLeft:30,
        paddingRight:30
      },
      viewinput1:{
        paddingTop:30
      },
      textinput:{
        width:'100%',
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:30,
        paddingTop:10,
        paddingBottom:10,
      },
    //   text3:{
    //     fontSize:15,
    //     paddingLeft:30,
    //     paddingRight:30,
    //     paddingTop:10,
    //     paddingBottom:10,
    //     fontWeight:'bold',
    //     paddingBottom:10 
    //   },
      view3:{
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:10,
        paddingTop:40
      },
      button: {
        backgroundColor: 'black',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize:20,
        borderRadius: 30,
        width:'100%',
        alignItems:"center"
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign:"center"
      },textanaccount:{
        color: 'white', 
        textAlign: 'center', 
        fontSize:15,
        fontWeight:'bold'
      }

      });
export default Login;