import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class LinkComponent extends Component {
  state = {active:false};
  _onPressButton = () =>{
    this.props.choose.selectView(this.props.id);
  }
  amIActive = () => {
    return this.props.choose.state.selectedComponent === this.props.id;
  }
  render() {
    const styled = this.amIActive() ? [styles.button,styles.active] : styles.button;
    const subStyled = this.amIActive() ? [styles.buttonText,styles.buttonTextActive] : styles.buttonText;
    return (
      <View style={styles.inner}>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styled}>
            <Text style={subStyled}>{this.props.children}</Text>
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
    alignItems: 'stretch',
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
