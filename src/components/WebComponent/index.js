import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class WebComponent extends Component {
  render() {
    let componentStyle = {
      zIndex:1000,
      backgroundColor:'#000',
      margin:0,
    }
    if(this.props.fullScreen && this.props.fullScreen === true){
      componentStyle = {
        position:'absolute',
        zIndex:1000,
        left:0,
        top:0,
        right:0,
        bottom:0,
        backgroundColor:'#000',
        margin:0
      }
    }
    // const allVars={};
    // for(var z in this){
    //   allVars.push({name:z,val:this[z]});
    // }
    // const allText=allVars.map((each) => {
    //   return <div>{each.name}, {each.value}</div>
    // })
    if(this.props.style==='inactive'){
      return null;
    }
    if(this.props.uri){
      return <WebView style={componentStyle} source={{url: this.props.uri}} />;
    }
    if(this.props.html){
      return <WebView style={componentStyle} source={{html: this.props.html}} />;
    }
    return <WebView style={{componentStyle}} source={{html: '<strong>Loading...</strong>'}} />;
  }
}
