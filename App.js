import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Text, Box } from "native-base";
import { Home } from './screens/home/Home';
import Navigation from './Navigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation/>
      <Home />
    </NativeBaseProvider>
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
