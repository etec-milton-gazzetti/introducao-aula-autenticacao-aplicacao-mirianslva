import { Text, View, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {ImageBackground } from '@gluestack-ui/themed';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button,  Image, Text } from "@gluestack-ui/themed";
import { useState } from "react";
import fundo from "../../../assets/fundo.jpg"


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Inicial</Text>
      <Button title='Sobre' onPress={()=> navigation.navigate("Sobre")}/> 
          </View>
  );
}
function Sobre({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre</Text>
      <Button title='Voltar' onPress={()=> navigation.goBack()}/> 
      <ImageBackground>
      </ImageBackground>
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

