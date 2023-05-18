import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screen/WeelcomeScreen'
import LoginScreeen from './src/screen/LoginScreeen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreeen/>
      <WelcomeScreen/>
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
});
