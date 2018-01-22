import React, { Component } from 'react';
import { View, Text, ART } from 'react-native';
import store from '../../services/store';
// import d3 from 'd3';

const ReactART = ART.ReactART;

import SurfaceConnect from '../SurfaceConnect';

export default class Selector extends Component {
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
    // <View style={componentStyle}>
    //   <Text>Surface {one},  {one}</Text>
    //   <Text>SVG, width { main.width } =
    //   {getSVGDims({height:dims.height,width:dims.width}).width}
    //    and height {main.height} =
    //   {getSVGDims({height:dims.height,width:dims.width}).height}
    // </Text>

let arr=Array.from(store.getState());
    return (
      <View style={componentStyle}>
        {/* <SurfaceConnect fullScreen={this.props.fullScreen} style={{backgroundColor:'#ffc',zIndex:100}}> */}
        {/* </SurfaceConnect> */}
<Text>{arr.length} is PLEA</Text>
      </View>);
  }
}
