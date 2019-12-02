import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import NetworkError from './services/networkError'

function App() {
  const [netStatus, setNet] = useState(true)
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setNet(state.isConnected)
    })
  })

  return (
    <View style={styles.container}>
      {!netStatus && <NetworkError />}
      <View style={styles.fill}>
        <Image source={{uri:'https://static.thenounproject.com/png/599828-200.png'}} style={{height:120,width:120}}/>
        <Text style={styles.text}>Trun of your internet connection to see the aler.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fill: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:16
  }
});

export default App;
