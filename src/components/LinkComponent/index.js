import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Svg, Text, Path, Rect, G } from 'react-native-svg';
import { getSVGDims } from '../../services/utils.js';
const svgDims = getSVGDims();

export default class LinkComponent extends Component {
  state = {active:false};
  _onPressButton = () =>{
    this.props.choose.selectView(this.props.id);
  }
  amIActive = () => {
    return this.props.choose.state.selectedComponent === this.props.id;
  }
  render() {
    const navDim = Math.round(svgDims.min/6);
    const svgS = {width:navDim,height:navDim,alignSelf:'center'};
    const styled = this.amIActive() ? [styles.button,styles.active] : styles.button;
    const subStyled = this.amIActive() ? [styles.buttonText,styles.buttonTextActive] : styles.buttonText;
    return (
      <View style={styles.inner}>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styled}>
            <Svg style={svgS} fillOpacity="1" fill="#76c">
              <G>
                <Path x={navDim/5} y={navDim/5} fillOpacity="0.3" scale={navDim/50} d="M 11.46875 0.96875 L 10.90625 4.53125 C 10.050781 4.742188 9.234375 5.058594 8.5 5.5 L 5.5625 3.40625 L 3.4375 5.53125 L 5.5 8.46875 C 5.054688 9.207031 4.714844 10.015625 4.5 10.875 L 0.96875 11.46875 L 0.96875 14.46875 L 4.5 15.09375 C 4.714844 15.953125 5.054688 16.761719 5.5 17.5 L 3.40625 20.4375 L 5.53125 22.5625 L 8.46875 20.5 C 9.203125 20.941406 10.019531 21.257813 10.875 21.46875 L 11.46875 25.03125 L 14.46875 25.03125 L 15.125 21.46875 C 15.976563 21.253906 16.769531 20.914063 17.5 20.46875 L 20.46875 22.5625 L 22.59375 20.4375 L 20.46875 17.5 C 20.90625 16.769531 21.257813 15.972656 21.46875 15.125 L 25.03125 14.46875 L 25.03125 11.46875 L 21.46875 10.875 C 21.257813 10.027344 20.90625 9.230469 20.46875 8.5 L 22.5625 5.53125 L 20.4375 3.40625 L 17.5 5.53125 C 16.769531 5.089844 15.949219 4.746094 15.09375 4.53125 L 14.46875 0.96875 Z M 13 6.46875 C 16.605469 6.46875 19.53125 9.394531 19.53125 13 C 19.53125 16.605469 16.605469 19.53125 13 19.53125 C 9.394531 19.53125 6.46875 16.601563 6.46875 13 C 6.46875 9.398438 9.394531 6.46875 13 6.46875 Z M 13 8.0625 C 10.28125 8.0625 8.0625 10.28125 8.0625 13 C 8.0625 15.71875 10.28125 17.9375 13 17.9375 C 15.71875 17.9375 17.9375 15.71875 17.9375 13 C 17.9375 10.28125 15.71875 8.0625 13 8.0625 Z M 12.96875 10.9375 C 14.113281 10.9375 15.0625 11.851563 15.0625 13 C 15.0625 14.144531 14.113281 15.0625 12.96875 15.0625 C 11.824219 15.0625 10.90625 14.144531 10.90625 13 C 10.90625 11.851563 11.824219 10.9375 12.96875 10.9375 Z "/>

                <Text style={subStyled}>{navDim} , {this.props.children}</Text>
              </G>
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    backgroundColor: '#101',
    flexGrow: 1,
  },
  button: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#777',
    borderColor: '#333',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  buttoned: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#777',
    borderColor: '#333',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical:'center',
    alignSelf:'center',
    fontWeight: '700',
    fontSize: 24,
    color: 'white'
  },
  buttonTextActive: {
    color: '#000',
  },
  active: {
    borderWidth: 0,
    backgroundColor: 'white',
  },
})
