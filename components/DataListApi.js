import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';

export default function DataListApi() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPeople([]);
    setLoading(true);
    async function loadData() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=100&inc=name");
        const data = await response.json();
        setPeople(data.results);
      } catch(error) {
        console.log(error);
        alert("Sorry, something went wrong.");
      }
      setLoading(false);
    }

    const timeout = setTimeout(loadData, 1000)

    return () => {
      clearTimeout(timeout);
    }
  }, []);

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
