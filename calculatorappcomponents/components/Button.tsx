import React from 'react'
import { Dimensions,StyleProp,StyleSheet, Text, TextStyle, TouchableOpacity, ViewProps, ViewStyle } from 'react-native'
import { ButtonProps } from '../utis/Types'


const screen = Dimensions.get('window');
const buttonWidth = screen.width/4;


const styles = StyleSheet.create({
    text:{
        color:"#fff",
        fontSize:25

    },
    textSecondary:{
        color:"#060606"
    },
    button:{
        backgroundColor:"#333333",
        flex:1,
        height:Math.floor(buttonWidth-10),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:Math.floor(buttonWidth),
        margin:5
    },


    buttonDouble:{
        width:screen.width/2-10,
        flex:0,
        alignItems:'flex-start',
        paddingLeft:40
    },
    buttonSecondary:{
        backgroundColor:"#a6a6a6",

    },
    buttonAccent:{
        backgroundColor:"#f09a36"
    }

})


const Button = ({onPress,size,text,theme}:ButtonProps) => {

    
    const buttonStyles:StyleProp<ViewStyle> = [styles.button];
    const textStyles:StyleProp<TextStyle> = [styles.text];

    if (size ==='double') {

       buttonStyles.push(styles.buttonDouble)
       
        
    }

    if (theme === "secondary") {

        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textSecondary);
        
    } else if (theme === "accent"){
        buttonStyles.push(styles.buttonAccent);
    }
  return (

    <TouchableOpacity onPress={onPress} style={buttonStyles}
    >

        <Text style={textStyles}>{text}</Text>

    </TouchableOpacity>
  
  )
}

export default Button