import { StatusBar } from "expo-status-bar";
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Cat from './Cat';

const cats: Cat[] = [
    {
      name: 'Lady'
    },
    {
      name: 'Mici'
    },
    {
      name: 'Serena'
    }
  ]

  export default function Home({ navigation }: any) {
    return (
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
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#C7ECC0',
      flex: 1,
      alignItems: 'center',
    },
    title: {
      fontSize: 50,
      marginTop: 50
    }
  });
  