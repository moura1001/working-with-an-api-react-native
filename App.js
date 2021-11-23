import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DataListApi from './components/DataListApi';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>API fetched data:</Text>
      <DataListApi />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '16%'
  },
});
