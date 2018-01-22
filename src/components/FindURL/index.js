import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

export default class FindURL extends Component {
  render() {
    let componentStyle = {
      position:'relative',
      zIndex:1000,
      left:0,
      top:0,
      right:0,
      bottom:0,
      alignSelf: 'stretch',
      alignItems: 'stretch',
      height: '100%',
      backgroundColor:'#fff',
      margin:0
    }
    if(this.props.fullScreen && this.props.fullScreen === true){
      componentStyle = {
        position:'absolute',
        zIndex:1000,
        left:0,
        top:0,
        right:0,
        bottom:0,
        backgroundColor:'#fff',
        margin:0
      }
    }
    return (
      <View style={componentStyle}>
        <Text>Select from ..</Text>
        <Image source={{uri:'https://lh3.googleusercontent.com/JXlXGP_U2RVnKl5J9HM_PBp7Alwlc9pAcj3k9L_k_25xQ-oIKOrI_Ih2NW841XTPG8xICCI_IMJuVOJJeViimCXFunt3MehcBwAXw4D7DmPUtY6AjtGCQhLL_yx5UT0iM_eoKV3baQ=w1252-h626-no'}} style={{width:'100%',height:'100%'}} />
       </View>);
  }
}
