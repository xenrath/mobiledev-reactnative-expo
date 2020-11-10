import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  click(){
    Alert.alert('Hei, I Miss U')
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Pesan dari X E N R 4 T H</Text>
        <Button onPress={ this.click } title="Click Me !" color="#009688" />
        <StatusBar style="auto" />
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
