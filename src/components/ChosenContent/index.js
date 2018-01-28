import React, { Component } from 'react';
import { StyleSheet, View, Animated, Text, Dimensions, Alert } from 'react-native';
const dims = {height, width} = Dimensions.get('window');
const main = getSVGDims({height:dims.height,width:dims.width});
const one = Math.min(main.height, main.width);
import { getSVGDims } from '../../services/utils.js';
import WebComponent from '../WebComponent';
import LinkComponent from '../LinkComponent';
/**
 * Include your own components below
 * @type {[type]}
 */

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
  inactive:{
    opacity:0
  },
  active:{
    opacity: 1
  }
});

const perspective = dimension => dimension * 4;
const moveMe={
  right:{flex:0.1,opacity:0,top:0,left:'-51%',transform:([{ rotateY: '90deg'}])},
  front:{flex:10,opacity:1,transform:([{ rotateY: '0deg'}])},
  left:{flex:0.1,opacity:0,top:0,left:'51%',transform:([{ rotateY: '270deg'}])},
  back:{flex:0.1,opacity:0,top:0,left:'-100%',transform:([{ rotateY: '180deg'}])},
  top:{flex:0.1,opacity:0,top:0,left:'-51%',transform:([{ rotateY: '90deg'}])},
  bottom:{flex:0.1,opacity:0,top:0,left:'-51%',transform:([{ rotateY: '90deg'}])}
}

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
  constructor(props){
    super(props);
    this.state={
      currentScreen: 1,
      currentState: 'home',
      screens:{
      selector:0,
      home:1,
      composer:2,
      upload:3,
      aframe:4,
      blockchain:5,
    }};
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.component !== this.props.component){
      const newNum = this.state.screens[nextProps];
      let myNewState={
        selector:((newNum - 0) + 7) % 6,
        home:((newNum - 1) + 7) % 6,
        composer:((newNum - 2) + 7) % 6,
        upload:((newNum - 3) + 7) % 6,
        aframe:((newNum - 4) + 7) % 6,
        blockchain:((newNum - 5) + 7) % 6,
      };
      this.setState({screens:myNewState});
    }
  }
  getMyScreen = which => {
    const screenIndices=['right','front','left','back','top','bottom'];
    const selected = this.state.screens[which];
    const centerScreen = screenIndices[selected];
    if(which === this.props.component){
      return [styles.outest,moveMe[centerScreen]];
    }else{
      return null
    }
  }
  stick(what){
    return 'stuck';
  }
  render(){
    // return <Text>Te</Text>
    // const home=this.props.component==='home' ? <WebComponent fullScreen={this.props.fullScreen} html={'<strong>Home</strong>'} /> : <Text></Text>;
    const selector='';// this.props.component==='selector' ? <Selector fullScreen={this.props.fullScreen} /> : <Text>Selector</Text>;
    // const composer=  this.props.component==='composer' ? <WebComponent fullScreen={this.props.fullScreen} uri={'http://everyvu.com/shite/'} /> : <Text>null</Text>;
    // const uploader= this.props.component==='uploader' ? <WebComponent fullScreen={this.props.fullScreen} uri={'http://everyvu.com/guesthost/'} /> : <Text>null</Text>;
    // const aframe= this.props.component==='aframe' ? <WebComponent fullScreen={this.props.fullScreen} uri={'http://www.google.com/'} /> : <Text>null</Text>;
    // const blockchain= this.props.component==='blockchain' ? <BlockChain fullScreen={this.props.fullScreen} /> : <Text>null</Text>;
    return(
      <View style={[styles.outest,{flexDirection:'row'}]}>
         <View style={this.getMyScreen('home')}>{
           this.props.component==='home' ? <WebComponent fullScreen={this.props.fullScreen} html={'<strong>Home</strong>'} /> : null
         }</View>
         <View style={this.getMyScreen('selector')}>{
           this.props.component==='selector' ? <Selector fullScreen={this.props.fullScreen} /> : null
         }</View>
         <View style={this.getMyScreen('composer')}>
           <WebComponent fullScreen={this.props.fullScreen} uri={'http://everyvu.com/shite/'} />
           {/* { this.props.component==='composer' ? <WebComponent fullScreen={this.props.fullScreen} uri={'http://everyvu.com/shite/'} /> : null } */}
         </View>
         <View style={this.getMyScreen('uploader')}>
           <WebComponent fullScreen={this.props.fullScreen} uri={'http://www.google.com/'} />
           {/* { this.props.component==='uploader' ? <WebComponent fullScreen={this.props.fullScreen} uri={'http://www.google.com/'} /> : null } */}
         </View>
         <View style={this.getMyScreen('aframe')}>
           <WebComponent fullScreen={this.props.fullScreen} uri={'http://everyvu.com/guesthost/'} />
           {/* {this.props.component==='aframe' ?  <WebComponent fullScreen={this.props.fullScreen} uri={'http://everyvu.com/guesthost/'} /> : null} */}
         </View>
         <View style={this.getMyScreen('blockchain')}>
           {/* <BlockChain fullScreen={this.props.fullScreen} /> */}
           { this.props.component==='blockchain' ? <BlockChain fullScreen={this.props.fullScreen} /> : null }
         </View>
       </View>
    );
  }
}

/**
 *
 *   screenIndices[this.state.screens.homeScreen]]   deepState = {
     home: {
       substate: null,
       content: <View style={[styles.outest,moveMe.front]}><WebComponent fullScreen={this.props.fullScreen} html={'<strong>Hoome</strong>'} /></View>
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
   this.state={
     currentState: 'home',
     screens:[{
       homeScreen:0
     },{
       selectorScreen:1
     },{
       composerScreen:2
     },{
       uploadScreen:3
     },{
       aframeScreen:4
     },{
       blockScreen:5
     }
   ]

 */
