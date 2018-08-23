import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Nama     : Giwangkara Surya Ananda</Text>
        <Text>Kelas    :                       XI RPL 4</Text>
        <Text>No absen :                             12</Text>
        <Text>Hobi     : NgeWibu & Nolife</Text>
        <Image
        style={{height:300, width:300}}
        source={require('./fotoku.jpg')}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
