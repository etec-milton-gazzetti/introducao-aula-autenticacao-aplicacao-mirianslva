import { StatusBar } from 'expo-status-bar';
import SignIn from './src/screens/SignIn';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
    <SignIn />
      <StatusBar style="auto" />
    </ View>
  );
}


