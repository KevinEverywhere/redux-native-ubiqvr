import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import WebComponent from '../WebComponent';
import LinkComponent from '../LinkComponent';
import Selector from '../Selector';
import FindURL from '../FindURL';
import BlockChain from '../BlockChain';

const styles = StyleSheet.create({
  outest: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
});

const perspective = dimension => dimension * 4;

const aframe=`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>First View</title>
    <meta name="description" content="First View">
    <script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-assets>
        <video id="skyTexture" src="vid93.mp4" />
      </a-assets>
      <a-sky src="#skyTexture"></a-sky>
      <a-entity hand-controls="hand: left"></a-entity>
      <a-entity hand-controls="hand: right"></a-entity>
    </a-scene>
  </body>
</html>;`

export default class ChosenContent extends Component {
  deepState = {
    home: {
      substate: null,
      content: <View style={styles.outest}><WebComponent fullScreen={this.props.fullScreen} html={'<strong>Hoome</strong>'} /></View>
    },
    selector: {
      substate: null,
      content: <View style={styles.outest}><Selector fullScreen={this.props.fullScreen} /></View>,
    },
    composer: {
      substate: null,
      content: <View style={styles.outest}><WebComponent fullScreen={this.props.fullScreen} uri={'http://everyvu.com/shite/'} /></View>,
    },
    blockchain: {
      substate: null,
      content: <View style={styles.outest}><BlockChain fullScreen={this.props.fullScreen} /></View>,
    },
    aframe: {
      substate: null,
      content: <View style={styles.outest}><WebComponent fullScreen={this.props.fullScreen} uri={'http://everyvu.com/guesthost/'} /></View>,
    },
    uploader: {
      substate: null,
      content: <View style={styles.outest}><WebComponent fullScreen={this.props.fullScreen} uri={'http://www.google.com/'} /></View>,
    },
    findUrl: {
      substate: null,
      content: <View style={styles.outest}><FindURL fullScreen={this.props.fullScreen} /></View>,
    },
  };
  state={currentState: 'home'};
  // componentShouldUpdate(nextState, nextProps){
  //   console.log(this.state.currentState);
  //   console.log(this.props.choose.state.selectedComponent);
  //   if(this.state.currentState !== this.props.choose.state.selectedComponent){
  //     return true;
  //   }
  // }
  render(){
    return this.deepState[this.props.component].content;
    // return content;
  }
}
