import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import usePeople from '../hooks/usePeople';

export default function DataListApi() {
  const { people, loading } = usePeople();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={people}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderItem={({ item }) => {
          return(
            <View style={styles.row}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => {
          if(loading){
            return <ActivityIndicator size="large" color="#0000ff" />
          }
          
          return null;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    backgroundColor: 'yellow',
    marginBottom: 8
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  name: {
    fontSize: 16
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 1
  }
});
