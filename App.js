import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Provider, connect } from 'react-redux';
import { svgMult } from './src/services/actions';
svgMult(800);
import store from './src/services/store.js';
import LinkComponent from './src/components/LinkComponent/index.js';
import ChosenContent from './src/components/ChosenContent/index.js';

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

export default class App extends Component {
  deepState={fullScreen:false};
  state={outest:'outest',outer:'outer',selectedComponent:'',fullScreen:false};
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
      this.selectView('home');
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
            <LinkComponent choose={this} id='uploader'>Authenticated</LinkComponent>
            <LinkComponent choose={this} id='findUrl'>UnAuthd</LinkComponent>
            <LinkComponent choose={this} id='blockchain'>BlockChain</LinkComponent>
          </View>
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
