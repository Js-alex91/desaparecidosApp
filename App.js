import { StyleSheet } from 'react-native';
import { NativeBaseProvider, extendTheme } from "native-base";
import { Home } from './screens/home/Home';
import Navigation from './Navigation';


export default function App() {

  const theme = extendTheme({
    colors: {
      primary: "#ec2e53",
    }
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Navigation />
      {/* <Home /> */}
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
