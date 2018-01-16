import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import store from './src/services/store.js';

const styles = StyleSheet.create({
  outest: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  outer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fcf',
    alignItems: 'stretch',
    flexGrow: 1,
    justifyContent: 'center',
  },
  inner: {
    flex: 1,
    backgroundColor: '#fcc',
    flexGrow: 1,
    padding: '5%',
    alignItems: 'stretch',
  },
  main: {
    flex: 1,
    backgroundColor: '#ccf',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    flexGrow: 3,
    padding: '5%',
    justifyContent: 'center',
  },
  outestL: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00f',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  outerL: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f00',
    alignItems: 'stretch',
    flexGrow: 1,
    justifyContent: 'center',
  },
  innerL: {
    flex: 1,
    backgroundColor: '#fcc',
    flexGrow: 1,
    padding: '5%',
    alignItems: 'stretch',
  },
  main: {
    flex: 1,
    backgroundColor: '#ccf',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    flexGrow: 3,
    padding: '5%',
    justifyContent: 'center',
  },
});

const HomeScreen = ({ navigation }) => {
  // const { navigate } = props.navigation;
  // <View onLayout={this.reorient} style={styles[this.state.outest]}>
  <View>
    <View style={styles[this.state.outer]}>
      <View style={styles.inner}>
        <Text>Home</Text>
      </View>
      <View style={styles.inner}>
        <Text>Selector</Text>
      </View>
      <View style={styles.inner}>
        <Text>Composer</Text>
      </View>
    </View>
    <View style={styles.main}>
      <Text>Content</Text>
    </View>
    <View style={styles[this.state.outer]}>
      <View style={styles.inner}>
        <Text>Upload</Text>
      </View>
      <View style={styles.inner}>
        <Text>Find-URL</Text>
      </View>
      <View style={styles.inner}>
        <Text>Share</Text>
      </View>
    </View>
  </View>
};

const SecondScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Second Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Second: {
    screen: SecondScreen,
  },
});

export default class App extends Component {
  state={outest:'outest',outer:'outer'};
  reorient = event => {
    this.updateLayout(event.nativeEvent.layout);
  };
  updateLayout = layout => {
    if(layout.width>layout.height){
      setTimeout(() => {
        this.setState({outest:'outestL',outer:'outerL'});
      },5);
    }
    this.setState({outest:'outest',outer:'outer'});
  }
  render() {
    return (
      <Provider store={store}>
        <RootNavigator parent={this} outest={this.state.outest} outer={this.state.outer} />
      </Provider>
    );
  }
}
//
// AppRegistry.registerComponent('ReactNativeCounter', () => App);
//
// export default class App extends React.Component {
//   state={};
//   reorient = event => this.updateLayout(event.nativeEvent.layout);
//   updateLayout = layout => {
//     if(layout.width>layout.height){
//       this.setState({outest:'outestL',outer:'outerL'});
//     }
//     this.setState({outest:'outest',outer:'outer'});
//   }
//   render() {
//     this.myNum++;
//     return (
//     );
//   }
// }

/**
 * import React, { Component } from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 import { Provider, connect } from 'react-redux';
 import { StackNavigator, TabNavigator } from 'react-navigation';
 import store from './src/services/store.js';

 let layout={outest:'outest',outer:'outer'};

 export reorient = event => {
   updateLayout(event.nativeEvent.layout);
 };

 export updateLayout = event => {
   updateLayout(event.nativeEvent.layout);
 };

 export const styles = StyleSheet.create({
   outest: {
     flex: 1,
     flexDirection: 'column',
     backgroundColor: '#fff',
     alignItems: 'stretch',
     justifyContent: 'center',
   },
   outer: {
     flex: 1,
     flexDirection: 'row',
     backgroundColor: '#fcf',
     alignItems: 'stretch',
     flexGrow: 1,
     justifyContent: 'center',
   },
   inner: {
     flex: 1,
     backgroundColor: '#fcc',
     flexGrow: 1,
     padding: '5%',
     alignItems: 'stretch',
   },
   main: {
     flex: 1,
     backgroundColor: '#ccf',
     alignSelf: 'stretch',
     alignItems: 'stretch',
     flexGrow: 3,
     padding: '5%',
     justifyContent: 'center',
   },
   outestL: {
     flex: 1,
     flexDirection: 'row',
     backgroundColor: '#00f',
     alignItems: 'stretch',
     justifyContent: 'center',
   },
   outerL: {
     flex: 1,
     flexDirection: 'column',
     backgroundColor: '#f00',
     alignItems: 'stretch',
     flexGrow: 1,
     justifyContent: 'center',
   },
   innerL: {
     flex: 1,
     backgroundColor: '#fcc',
     flexGrow: 1,
     padding: '5%',
     alignItems: 'stretch',
   },
   main: {
     flex: 1,
     backgroundColor: '#ccf',
     alignSelf: 'stretch',
     alignItems: 'stretch',
     flexGrow: 3,
     padding: '5%',
     justifyContent: 'center',
   },
 });

 const HomeScreen = ({ navigation }) => {
   // const { navigate } = props.navigation;
   <View onLayout={reorient} style={styles[this.state.outest]}>
     <View style={styles[this.state.outer]}>
       <View style={styles.inner}>
         <Text>Home</Text>
       </View>
       <View style={styles.inner}>
         <Text>Selector</Text>
       </View>
       <View style={styles.inner}>
         <Text>Composer</Text>
       </View>
     </View>
     <View style={styles.main}>
       <Text>Content</Text>
     </View>
     <View style={styles[this.state.outer]}>
       <View style={styles.inner}>
         <Text>Upload</Text>
       </View>
       <View style={styles.inner}>
         <Text>Find-URL</Text>
       </View>
       <View style={styles.inner}>
         <Text>Share</Text>
       </View>
     </View>
   </View>
 };

 const SecondScreen = () => (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Second Screen</Text>
   </View>
 );

 const RootNavigator = StackNavigator({
   Home: {
     screen: HomeScreen,
   },
   Second: {
     screen: SecondScreen,
   },
 });

 export default class App extends Component {
   updateLayout = layout => {
     if(layout.width>layout.height){
       setTimeout(() => {
         this.setState({outest:'outestL',outer:'outerL'});
       },5);
     }
     this.setState({outest:'outest',outer:'outer'});
   }
   render() {
     return (
       <Provider store={store}>
         <RootNavigator outest={this.state.outest} outer={this.state.outer} />
       </Provider>
     );
   }
 }
 //
 // AppRegistry.registerComponent('ReactNativeCounter', () => App);
 //
 // export default class App extends React.Component {
 //   state={};
 //   reorient = event => this.updateLayout(event.nativeEvent.layout);
 //   updateLayout = layout => {
 //     if(layout.width>layout.height){
 //       this.setState({outest:'outestL',outer:'outerL'});
 //     }
 //     this.setState({outest:'outest',outer:'outer'});
 //   }
 //   render() {
 //     this.myNum++;
 //     return (
 //     );
 //   }
 // }

 */
