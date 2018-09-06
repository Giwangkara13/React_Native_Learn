import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Judul from './Components/Judul';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Judul title= "BIODATA" />
      <Judul title= "LOGIN" />
      <Judul title= "FORM"/>
        <Text>Giwangkara Surya Ananda</Text>
        <Text>XI RPL 4</Text>
        <Text>absen : 12</Text>
        
        
        <Image 
        style={{width:300 , height:300}}
        source={require('./fotoku.jpg')}
        
        />

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
