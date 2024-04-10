import { Text, View, Button,Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {ImageBackground } from '@gluestack-ui/themed';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import fundo from "./assets/fundo.jpg";



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={fundo} resizeMode="cover"/>
      <Text>Tela Inicial</Text>
      <Button title='Sobre' onPress={()=> navigation.navigate("Sobre")}/> 
          </View>
  );
}
export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter-SemiBoldItalic', fontSize: 30 }}>Inter SemiBoldItalic</Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Historia" component={Historia} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

