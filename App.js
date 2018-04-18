import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ProductList from './src/components/List.js';
import Header from './src/components/header.js';

class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
      <Header headerText="Ascii Faces"/>
      <ProductList/>
      </View>
    );
  }
}
const styles = {
  mainContainer:{
    flex:1,
    backgroundColor:'#fff'
  }
}
export default App;
