import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <StatusBar style="auto" />
      <Text style={styles.underline}>Hello World! {"\n"}</Text>
      <Text>Group 10</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    boarderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '65%',
    marginBottom: 10,
},
underline: {textDecorationLine: 'underline'}

});
