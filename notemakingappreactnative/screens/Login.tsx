import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, { useState } from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavigationProps} from '../src/AppNavigator';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { LongPressGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/longPressGesture';
interface MyProps {
  navigation: StackNavigationProp<RootNavigationProps, 'Login'>;
}
const Login = ({navigation}: MyProps) => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [badEmail, setBadEmail] = useState<boolean>(false)
  const [badPassword, setBadPassword] = useState<boolean>(false)



  const validate =()=> {

    let valid = true;

    if (email=='') {

      setBadEmail(true)
      valid = false
      
    }else if (email!='') {

      setBadEmail(false)
    
      
    }

    if (password == '') {
      setBadPassword(true)

      valid = false;
      
    }else if (password!='') {

      setBadPassword(false)
      
    }




    return valid




  }


  const login =async()=>{

    const headers  = new Headers();

    headers.append("Content-Type","application/json")

    const body ={email:email,password:password}
    const res = await fetch('https://chartreuse-green-bear-yoke.cyclic.app/api/auth/login',{

      headers:headers,
      method:'POST',
      body:JSON.stringify(body)

    })

    const data = await res.json()

    console.log(data)

  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back</Text>

      <TextInput value={email} onChangeText={txt=>setEmail(txt)} placeholder="Enter Email" style={styles.input} />

      {badEmail && <Text style={styles.errorText}>Please Enter Email</Text>}

      
      <TextInput value={password} onChangeText={txt=>setPassword(txt)} placeholder="Enter Password" style={styles.input} />

      {badPassword && <Text style={styles.errorText}>Please Enter Password</Text>}

      <TouchableOpacity style={styles.loginBtn} 
      onPress={()=>{
        if(validate()){

          login()

        }
      }}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.loginBtn,{backgroundColor:'white',borderWidth:1,borderColor:'black'}]} 
      onPress={()=>{
        navigation.navigate("Signup")
      }}>
        <Text style={[styles.btnText,{color:'black'}]}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  heading: {
    fontSize: 30,
    color: 'black',
    marginLeft: 20,
    marginTop: 100,
    fontWeight: '500',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#9e9e9e',
    marginTop: 20,
    alignSelf: 'center',
    paddingLeft: 20,
    borderRadius: 10,
  },
  loginBtn: {
    width: '90%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center'
  },
  btnText:{
    color:'white',
    fontSize:16
  },
  errorText:{
    color:'red',
    marginLeft:20,
    marginTop:5
  }
});
