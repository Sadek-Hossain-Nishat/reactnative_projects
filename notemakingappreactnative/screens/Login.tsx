import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, { useState } from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavigationProps} from '../src/AppNavigator';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface MyProps {
  navigation: StackNavigationProp<RootNavigationProps, 'Login'>;
}
const Login = ({navigation}: MyProps) => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [badEmail, setBadEmail] = useState<boolean>(false)
  const [badPassword, setBadPassword] = useState<boolean>(false)



  const validate =()=> {




  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back</Text>

      <TextInput placeholder="Enter Email" style={styles.input} />
      <TextInput placeholder="Enter Password" style={styles.input} />

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.loginBtn,{backgroundColor:'white',borderWidth:1,borderColor:'black'}]}>
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
  }
});
