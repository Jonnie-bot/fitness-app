import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Value from './components/Value';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome John!</Text>

      <View style={{flexDirection: 'row'}}>
        <Value label="Steps" value="1219" />
        <Value label="Distance" value="0.75Km" />
      </View>

        <Value label="Flights Climbed" value="0.75Km"/>
        
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },

});
