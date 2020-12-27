import React from 'react'
import { StyleSheet, Text, View,ToastAndroid } from 'react-native'
import { TriangleColorPicker } from 'react-native-color-picker'
import BluetoothSerial from 'react-native-bluetooth-serial'


function sendData(value){
    BluetoothSerial.write(value)
    .then((res) => {
      console.log(res);
      console.log('Successfuly wrote to device')
    })
    .catch((err) => console.log(err.message))
}




function convertHex(hexCode){
    var hex = hexCode.replace('#','');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.substring(0,2), 16),
        g = parseInt(hex.substring(2,4), 16),
        b = parseInt(hex.substring(4,6), 16),
        end=")";

    return [r,g,b,end];
}

function applyColor(color){
    var rgb=convertHex(color);
    var rgbs=rgb.toString();
    sendData(rgbs);
    ToastAndroid.show('Renk Ayarlandı', ToastAndroid.SHORT);
}


 function LedColor () {     
    return(
        <View style={{flex: 1, padding: 45, backgroundColor: '#F5FCFF'}}>
        <Text style={{color: 'white'}}>React Native Color Picker - Uncontrolled</Text>
        <TriangleColorPicker
        //   onColorSelected={color => alert(`Color selected: ${color}`)}
          onColorSelected={color => 
            {applyColor(color)}
        }
          style={{flex: 1}}
        />
      </View>
    )
}

const styles = StyleSheet.create({})


export default LedColor;