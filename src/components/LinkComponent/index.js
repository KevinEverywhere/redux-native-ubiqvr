import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Svg, Text, Rect } from 'react-native-svg';

export default class LinkComponent extends Component {
  state = {active:false};
  _onPressButton = () =>{
    this.props.choose.selectView(this.props.id);
  }
  amIActive = () => {
    return this.props.choose.state.selectedComponent === this.props.id;
  }
  render() {
    const svgS = {width:'100%',height:'100%'};
    const styled = this.amIActive() ? [styles.button,styles.active] : styles.button;
    const subStyled = this.amIActive() ? [styles.buttonText,styles.buttonTextActive] : styles.buttonText;
    return (
      <View style={styles.inner}>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styled}>
            <Svg style={svgS} fillOpacity="1" fill="#ffc">
              <Rect x="0" y="0" width="160" height="100" fill="#da9" />
              <Text style={subStyled}>{this.props.children}</Text>
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
    fontSize: 18,
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
