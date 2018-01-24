import React, { PureComponent } from 'react';
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

export default class ChosenContent extends PureComponent {
  render(){
    const props = this.props;
    let content=null;
    switch(props.component){
      case 'home':
        content = <WebComponent fullScreen={props.fullScreen} html={'<strong>Home</strong>'} />
        break;
      case 'selector':
        content = (<View style={styles.outest}>
          <Selector fullScreen={props.fullScreen} />
        </View>);

        break;
        case 'blockchain':
          content = (<View style={styles.outest}>
            <BlockChain fullScreen={props.fullScreen} />
          </View>);

          break;
      case 'composer':
        content = <WebComponent fullScreen={props.fullScreen} uri={'http://everyvu.com/shite/'} />;
        break;
      case 'uploader':
        content = <WebComponent fullScreen={props.fullScreen} html={'<div style="background-color:#ce8"><video width="400" height="320" controls autoplay src="http://everyvu.com/w360/thankyou-injected.mp4"></video></div>'} />;
        break;
      case 'findUrl':
        content = <View style={styles.outest}><FindURL fullScreen={props.fullScreen} /></View>;
        break;
      case 'aframe':
        content = <WebComponent fullScreen={props.fullScreen} uri={'http://everyvu.com/guesthost/'} />;
        break;
      case 'share':
        content = <WebComponent fullScreen={props.fullScreen} uri={'http://everyvu.com/guesthost/'} />;
        break;
      default:
        content = <WebComponent fullScreen={props.fullScreen} uri={'http://www.everyvu.com/'} />;
        break;
    }
    return content;
  }
}
