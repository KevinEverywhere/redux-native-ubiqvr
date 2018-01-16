import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, WebView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Provider, connect } from 'react-redux';
import store from './src/services/store.js';
import WebComponent from './src/components/WebComponent/index.js';
import LinkComponent from './src/components/LinkComponent/index.js';
import Selector from './src/components/Selector/index.js';


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
  outerNot: {
    display: 'none',
  },
  outer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#333',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
  main: {
    padding: 0,
    margin: 0,
    marginTop: 0,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#300',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    flexGrow: 3,
    justifyContent: 'center',
  },
  outestL: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
  outerL: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#333',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
});

export const ChosenContent = (props) =>{
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
    case 'composer':
      content = <WebComponent fullScreen={props.fullScreen} uri={'http://everyvu.com/really/'} />
      break;
    case 'upload':
      content = <WebComponent fullScreen={props.fullScreen} html={'<strong>Uploadeder</strong>'} />
      break;
    case 'findUrl':
      content = <WebComponent fullScreen={props.fullScreen} uri={'http://everyvu.com/'} />
      break;
    case 'share':
      content = <WebComponent fullScreen={props.fullScreen} uri={'http://www.google.com'} />
      break;
    default:
      content = <WebComponent fullScreen={props.fullScreen} uri={'http://www.everyvu.com/'} />
      break;
  }
  return content;
}

export default class App extends Component {
  deepState={fullScreen:false};
  state={outest:'outest',outer:'outer',selectedComponent:'home',fullScreen:false};
  selectView = (which) => {
    this.setState({selectedComponent:which})
  }
  shouldComponentUpdate(nextProps, nextState){
    let defaultReturn = false;
    if(this.state.selectedComponent !== nextState.selectedComponent){
      defaultReturn=true;
    }
    if(this.state.fullScreen !== nextState.fullScreen){
      defaultReturn=true;
    }
    if(this.state.outest !== nextState.outest){
      defaultReturn=true;
    }
    return defaultReturn;
  }
  _onPressTop = event => {
    // if(event.nativeEvent.locationY < 50){
      const isFullScreen = !!! this.state.fullScreen;
      this.setState({fullScreen:isFullScreen});
    // }
  }
  reorientFull = event => {
    this.updateLayoutFull(event.nativeEvent.layout);
  };
  reorient = event => {
    this.updateLayout(event.nativeEvent.layout);
  };
  componentDidMount() {
    if(this.deepState.fullScreen===false){
      // this.deepState.fullScreen=true;
    }
  }
  updateLayout = layout => {
    this.deepState.fullScreen=false;
    if(layout.width>layout.height){
      setTimeout(() => {
        this.setState({outest:'outestL',outer:'outerL'});
      },5);
    }
    this.setState({outest:'outest',outer:'outer'});
  }
  render() {
    const touchableOpacity = {zIndex:9999,width:'100%',height:'10%',backgroundColor:'rgba(224,0,0,0.5)'};
    const standard = () => {
      return(
        <View onLayout={this.reorient} style={styles[this.state.outest]}>
          <View style={styles[(this.state.fullScreen===true) ? 'outerNot' : this.state.outer]}>
            <LinkComponent choose={this} id='home'>Home</LinkComponent>
            <LinkComponent choose={this} id='selector'>Selector</LinkComponent>
            <LinkComponent choose={this} id='composer'>Compose</LinkComponent>
          </View>
          <View style={styles.main}>
            <TouchableOpacity style={touchableOpacity} onPress={this._onPressTop}>
              <TouchableHighlight>
                <Text>Toggle-FullScreen</Text>
              </TouchableHighlight>
            </TouchableOpacity>
            <ChosenContent fullScreen={this.state.fullScreen} component={this.state.selectedComponent} />
          </View>
          <View style={styles[(this.state.fullScreen===true) ? 'outerNot' : this.state.outer]}>
            <LinkComponent choose={this} id='uploader'>Upload</LinkComponent>
            <LinkComponent choose={this} id='findUrl'>Find URL</LinkComponent>
            <LinkComponent choose={this} id='share'>Share</LinkComponent>
          </View>
        </View>
      );
    };
    const full = () => {
      return(
        <View onLayout={this.reorientFull} style={styles[this.state.outest]}>
          <TouchableOpacity style={touchableOpacity} onPress={this._onPressTop}>
            <TouchableHighlight>
              <Text>Toggle FullScreen</Text>
            </TouchableHighlight>
          </TouchableOpacity>
          <ChosenContent fullScreen={this.state.fullScreen} component={this.state.selectedComponent} />
        </View>
      );
    };
    return (
      <Provider store={store}>
        { standard() }
          {/* {this.state.fullScreen===true ? full() : standard()} */}
      </Provider>
    );
  }
}
