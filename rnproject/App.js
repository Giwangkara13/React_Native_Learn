import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Nama     : Luthfika Anggit Verdiani</Text>
        <Text>Kelas    :                       XI RPL 3</Text>
        <Text>No absen :                             24</Text>
        <Text>Hobi     : NgeWibu & ngeShitpost</Text>

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
