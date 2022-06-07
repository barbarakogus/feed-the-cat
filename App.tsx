import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './components/Cat';

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

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed your Cat</Text>
      {cats.map((cat, key) => 
        <Cat key={key} cat={cat} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7ECC0',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    marginTop: 50
  }
});
