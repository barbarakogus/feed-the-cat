import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cat from './Cat';

const cats: Cat[] = [
  {
    name: 'Lady',
    age: 18,
    color: 'gray',
    breed: 'street'
  },
  {
    name: 'Mici',
    age: 15,
    color: 'white',
    breed: 'street'
  },
  {
    name: 'Serena',
    age: 7,
    color: 'black and white',
    breed: 'street'
  }
]

export default function Home({ navigation }: any) {
  return (
    <>
      <View style={{ backgroundColor: 'pink', height: 30 }}>
        <Text>Header here</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Feed your Cat</Text>
        {/* {cats.map((cat, key) =>
          <Cat key={key} cat={cat} />
        )} */}
        <FlatList
          data={cats}
          renderItem={({ item }) => <Cat cat={item} navigation={navigation} />}>
        </FlatList>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#C7ECC0',
    flex: 1,
  },
  title: {
    fontSize: 50,
    marginTop: 40
  }
});
