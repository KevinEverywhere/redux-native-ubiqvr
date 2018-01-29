import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = {
  header:{fontSize:22,fontWeight:'bold', margin:10},
  body:{fontSize:18, margin:10, lineHeight:27},
  em: {fontStyle:'italic'}
}

class BlockText extends Component {
  render() {
    return (
      <View>
        {this.props.children}
      </View>
    );
  }
}

export const H1 = props => <BlockText><Text style={styles.header}>{props.children}</Text></BlockText>;

export const BodyText = props => <BlockText><Text style={styles.body}>{props.children}</Text></BlockText>;

export default BlockText;
