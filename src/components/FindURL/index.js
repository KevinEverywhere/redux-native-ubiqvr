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
        <Text>Select from ...</Text>
        <Image source='https://photos.google.com/photo/AF1QipPYhSJJmeF3Ihw2PAT6DqwZU15ciIdHckip8ZrC' />
      </View>);
  }
}
