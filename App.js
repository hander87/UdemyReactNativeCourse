import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    placename: ''
  }

  placenameChangedHandler = (event) => {
    alert(event)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Handerblad</Text>
        <Text style={styles.text}>(React Native)</Text>
        <TextInput value={this.state.placename} onChange={this.placenameChangedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 46,
    color: '#fff'
  },
  text: {
    fontSize: 26,
    color: '#fff'
  }

});
