import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { IndexRoute, Router, Route, hashHistory } from 'react-router';
// import Home from '../containers/Home';
// import Welcome from '../components/Welcome';
// import Selector from '../components/Selector';
// import Composer from '../components/Composer';
// import Upload from '../components/Upload';
// import DynamicIframe from '../components/DynamicIFrame';
// import UploadPreview from '../components/UploadPreview';
// import FindByURL from '../components/FindByURL';
// import Share from '../components/Share';

const Routes = (
//   <Router history={hashHistory}>
//     <Route path="/" component={Home}>
//       <IndexRoute component={Welcome} />
//       <Route path="/home" component={Welcome} />
//       <Route path="/selector" component={Selector} />
//       <Route path="/composer" component={Composer} />
//       <Route path="/upload" component={Upload}>
//         <Route path="/upload/select" component={DynamicIframe} />
//         <Route path="/upload/detail" component={UploadPreview} />
//       </Route>
//       <Route path="/findByURL" component={FindByURL} />
//       <Route path="/share" component={Share} />
//     </Route>
//   </Router>
// );
//
// export default Routes;
//
//
<View onLayout={this.reorient} style={styles[this.state.outest]}>
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
      <Text>Find URL</Text>
    </View>
    <View style={styles.inner}>
      <Text>Share</Text>
    </View>
  </View>
</View>);

export default Routes;
